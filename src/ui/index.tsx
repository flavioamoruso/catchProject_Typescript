import { FunctionComponent, useState } from "react";
import { StyledUI } from "./index.style";
import { getRandomCat } from "utils/random";
import { Cat } from "App-Types/cat";
import { Action } from "App-Types/action";
import CardsContainer from "components/Card/CardContainer";

const UI: FunctionComponent = () => {
  const [availableCats, setAvailableCats] = useState<Cat[]>(
    Array.from(Array(5).keys()).map(() => getRandomCat()),
  );

  const [ignored, setIgnored] = useState<Cat[]>([]);
  const [superLiked, setSuperLiked] = useState<Cat[]>([]);
  const [liked, setLiked] = useState<Cat[]>([]);

  const handleAction = (cat: Cat, action: Action) => {
    setAvailableCats((availableCats) =>
      availableCats.filter((c) => c.id !== cat.id),
    );
    setAvailableCats((availableCats) => [...availableCats, getRandomCat()]);
    switch (action) {
      case Action.Ignore:
        setIgnored((ignored) => [...ignored, cat]);
        break;
      case Action.SuperLike:
        setSuperLiked((superLiked) => [...superLiked, cat]);
        break;
      case Action.Like:
        setLiked((liked) => [...liked, cat]);
        break;
    }
  };

  console.log("ignored", ignored);
  console.log("superLiked", superLiked);
  console.log("liked", liked);

  return (
    <StyledUI>
      <CardsContainer cats={availableCats} onAction={handleAction} />
    </StyledUI>
  );
};

export default UI;
