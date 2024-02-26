import { FunctionComponent, HTMLAttributes } from "react";
import {
  StyledCard,
  Footer,
  DataContainer,
  Name,
  ButtonContainer,
} from "./styled.index";
import { Cat } from "App-Types/cat";
import Button from "components/Card/Button";

interface CardProps {
  cat: Cat;
}

type Props = CardProps & HTMLAttributes<HTMLDivElement>;

const Card: FunctionComponent<CardProps> = ({ cat, ...rest }) => {
  return (
    <StyledCard $catId={cat.id} {...rest}>
      <Footer>
        <DataContainer>
          <Name>{cat.name}</Name>
          <ButtonContainer>
            <Button variant={"ignore"}></Button>
            <Button variant={"superLike"}></Button>
            <Button variant={"like"}></Button>
          </ButtonContainer>
        </DataContainer>
      </Footer>
    </StyledCard>
  );
};

export default Card;
export type { Props };
