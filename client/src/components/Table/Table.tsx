import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react'
import cn from 'classnames'
import styles from './Table.module.scss'

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>

const Table: FC<Props> = ({ className, ...props }) => {
  return (
    <table className={cn(className, styles.table)} {...props}>
      table
    </table>
  )
}

export default memo(Table)
