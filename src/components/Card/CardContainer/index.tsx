import { FunctionComponent } from "react";
import { CardsContainerCard, StyledCardsContainer } from "./index.style";
import { Cat } from "App-Types/cat";
import { Action } from "App-Types/action";

interface CardsContainerProps {
  cats: Cat[];
  onAction: (cat: Cat, action: Action) => void;
}

const CardsContainer: FunctionComponent<CardsContainerProps> = ({
  cats,
  onAction,
}) => {
  return (
    <StyledCardsContainer>
      {cats.map((cat, index) => (
        <CardsContainerCard
          key={cat.id}
          index={index}
          cat={cat}
          onAction={(action) => onAction(cat, action)}
        />
      ))}
    </StyledCardsContainer>
  );
};

export default CardsContainer;
