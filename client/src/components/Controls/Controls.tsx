import { DetailedHTMLProps, FC, HTMLAttributes, memo } from "react";
import cn from "classnames";
import styles from "./Controls.module.scss";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Controls: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={cn(className, styles.controls)} {...props}>
      controls
    </div>
  );
};

export default memo(Controls);
