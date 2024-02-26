import { FunctionComponent } from "react";

export type IconType = "heart" | "star" | "x";

interface IconProps {
  color?: string;
  size?: number;
  type: IconType;
}

const Icon: FunctionComponent<IconProps> = ({ size, type, ...rest }) => {
  return <></>;
};

export default Icon;
