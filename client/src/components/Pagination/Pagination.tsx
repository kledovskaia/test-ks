import { DetailedHTMLProps, FC, HTMLAttributes, memo } from "react";
import cn from "classnames";
import styles from "./Pagination.module.scss";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Pagination: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={cn(className, styles.pagination)} {...props}>
      Pagination
    </div>
  );
};

export default memo(Pagination);
