import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react'
import cn from 'classnames'
import styles from './Table.module.scss'

type Props = {
  items: City[]
} & DetailedHTMLProps<
  HTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>

const Table: FC<Props> = ({ items, className, ...props }) => {
  return (
    <table className={cn(className, styles.table)} {...props}>
      <tbody>
        { items.map(item => (
          <tr key={item.id}>
            <td>{item.date}</td>
            <td>{item.name}</td>
            <td>{item.count}</td>
            <td>{item.distance}</td>
          </tr>
        )) }
      </tbody>
    </table>
  )
}

export default memo(Table)
