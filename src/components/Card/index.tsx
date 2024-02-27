import { FunctionComponent, HTMLAttributes } from "react";
import {
  ButtonContainer,
  DataContainer,
  Footer,
  Name,
  StyledCard,
} from "../Card/styled.index";
import { Cat } from "App-Types/cat";
import Button from "components/Card/Button/index";
import { Action } from "App-Types/action";

interface CardProps {
  cat: Cat;
  onAction: (action: Action) => void;
}

type Props = CardProps & HTMLAttributes<HTMLDivElement>;

const Card: FunctionComponent<Props> = ({ cat, onAction, ...rest }) => {
  return (
    <StyledCard $catId={cat.id} {...rest}>
      <Footer>
        <DataContainer>
          <Name>
            {cat.name}, {cat.age}
          </Name>
        </DataContainer>
        <ButtonContainer>
          <Button
            icon={{ type: "x" }}
            variant={"ignore"}
            onClick={() => onAction(Action.Ignore)}
          />
          <Button
            icon={{ type: "star" }}
            variant={"superLike"}
            onClick={() => onAction(Action.SuperLike)}
          />
          <Button
            icon={{ type: "heart" }}
            variant={"like"}
            onClick={() => onAction(Action.Like)}
          />
        </ButtonContainer>
      </Footer>
    </StyledCard>
  );
};

export default Card;
