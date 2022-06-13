import { DetailedHTMLProps, FC, HTMLAttributes, memo, MouseEvent, useCallback } from 'react'
import cn from 'classnames'
import styles from './Pagination.module.scss'
import { DataContext } from '../../context/dataContext'
import Button from '../Button/Button'
import { useMemo } from 'react'

type Props = {
  page: DataContext['state']['page'],
  totalPages: number,
  updatePage: (page: Props['page']) => void
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Pagination: FC<Props> = ({ page, totalPages, updatePage, className, ...props }) => {
  const currentPage = useMemo(() => page || 0, [page]);

  const nextPage = useCallback(() => {
    if (currentPage === totalPages) return
    updatePage(currentPage + 1)
  }, [currentPage, updatePage])

  const previousPage = useCallback(() => {
    if (!currentPage) return
    updatePage(currentPage - 1)
  }, [currentPage, updatePage])

  const handlePageChange = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const targetPage = +target.id
    if (currentPage === targetPage) return;
    updatePage(targetPage)
  }, [currentPage])

  return (
    <div className={cn(className, styles.pagination)} {...props}>
      <Button onClick={previousPage}>Previous</Button>
      <div>
        {new Array(totalPages).fill(0).map((_, i) => <Button key={i} id={i.toString()} onClick={handlePageChange}>{i + 1}</Button>)}
      </div>
      <Button onClick={nextPage}>Next</Button>
    </div>
  )
}

export default memo(Pagination)
