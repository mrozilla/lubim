import React from "react";
import cx from "classnames";

import styles from "./Text.module.css";

type TextType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export interface TextProps extends React.ComponentPropsWithoutRef<"h1"> {
  tag?: TextType;
  look?: TextType;
}

export const Text: React.FC<TextProps> = ({ tag: Tag = "p", look, className, ...rest }) => {
  return <Tag {...rest} className={cx(className, styles[look || Tag])} />;
};
