import { FunctionComponent } from "react";
import { StyledUi } from "./index.style";
import Card from "components/Card";
import { getRandomCat } from "utils/random";

const Ui: FunctionComponent = () => {
  const cat = getRandomCat();

  return (
    <StyledUi>
      <Card cat={cat} />
    </StyledUi>
  );
};

export default Ui;
