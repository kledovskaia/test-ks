import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react'
import cn from 'classnames'
import styles from './Table.module.scss'

type Props = {
  items: City[]
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Table: FC<Props> = ({ items, className, ...props }) => {
  return (
    <div  className={cn(className, styles.tableContainer)} {...props}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Название</th>
            <th>Количество</th>
            <th>Расстояние</th>
          </tr>
        </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{
              <>
                <div>{new Date(item.date).toLocaleTimeString()}</div>
                <div>{new Date(item.date).toLocaleDateString()}</div>
              </>  
            }</td>
            <td>{item.name}</td>
            <td>{item.count}</td>
            <td>{item.distance}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default memo(Table)
