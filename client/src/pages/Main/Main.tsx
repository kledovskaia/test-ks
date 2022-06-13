import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import Controls from '../../components/Controls/Controls'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import styles from './Main.module.scss'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Main: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={cn(className, styles.main)} {...props}>
      <Controls />
      <Table />
      <Pagination />
    </div>
  )
}
