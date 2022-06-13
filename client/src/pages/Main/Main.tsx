import { DetailedHTMLProps, FC, HTMLAttributes, useContext } from 'react'
import cn from 'classnames'
import Controls from '../../components/Controls/Controls'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import styles from './Main.module.scss'
import { DataContext } from '../../context/dataContext'
import { useCallback } from 'react'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Main: FC<Props> = ({ className, ...props }) => {
  const { state, updateState, data } = useContext(DataContext)

  const updatePage = useCallback(
    (page: typeof state['page']) => {
      updateState('page', page)
    },
    [updateState],
  )

  return (
    <div className={cn(className, styles.main)} {...props}>
      <Controls state={state} updateState={updateState} />
      {data && (
        <>
          <Table items={data.cities} />
          <Pagination
            page={state.page}
            totalPages={Math.ceil(data.totalCount / (state.limit || 10))}
            updatePage={updatePage}
          />
        </>
      )}
    </div>
  )
}
