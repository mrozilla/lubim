import React from "react";
import cx from "classnames";

import { useOnScreen } from "@/utils";

import styles from "./Appearable.module.css";

export interface AppearableProps extends React.ComponentPropsWithoutRef<"div"> {}

export const Appearable: React.FC<AppearableProps> = ({ className, children, ...rest }) => {
  const [ref, isIntersecting] = useOnScreen<HTMLDivElement>({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={cx(styles.container, isIntersecting && styles.visible, className)}
      {...rest}
    >
      {children}
    </div>
  );
};
