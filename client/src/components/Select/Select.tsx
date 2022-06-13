import { DetailedHTMLProps, FC, HTMLAttributes, memo } from "react";
import cn from "classnames";
import styles from "./Select.module.scss";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

const Select: FC<Props> = ({ className, ...props }) => {
  return <select className={cn(className, styles.select)} {...props}></select>;
};

export default memo(Select);
