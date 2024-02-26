import styled from "styled-components";
import { VariantType } from "ui/theme/theme";

interface StyledButtonProps {
  variant?: VariantType;
}

const StyledButton = styled.button<StyledButtonProps>``;

export { StyledButton };
