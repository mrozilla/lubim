import React from "react";
import cx from "classnames";

import styles from "./Heading.module.css";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps extends React.ComponentPropsWithoutRef<"h1"> {
  tag?: HeadingLevel;
  look?: HeadingLevel;
}

export const Heading: React.FC<HeadingProps> = ({ tag: Tag = "h1", look, className, ...rest }) => {
  return <Tag {...rest} className={cx(className, styles[look || Tag])} />;
};
