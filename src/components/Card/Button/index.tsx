import { ButtonHTMLAttributes, FunctionComponent } from "react";
import { VariantType } from "ui/theme/theme";
import { StyledButton } from "./index.style";

interface ButtonProps {
  variant?: VariantType;
}
type Props = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
const Button: FunctionComponent<ButtonProps> = ({
  variant = "like",
  ...rest
}) => {
  return <StyledButton variant={variant} {...rest}></StyledButton>;
};

export default Button;
export type { Props };
