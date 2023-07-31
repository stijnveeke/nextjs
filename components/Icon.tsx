import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import { IconType } from "react-icons/lib";

export const Icon: React.FC<{
  iconTag: string;
  className?: string;
  color?: string;
  title?: string;
  children?: React.ReactNode;
  size?: string;
}> = (props) => {
  const { iconTag, ...rest } = props;
  const icons = {
    ...FaIcons,
    ...AiIcons,
    ...IoIcons,
    ...MdIcons,
  };

  return React.createElement(icons[iconTag], rest);
};

export default Icon;
