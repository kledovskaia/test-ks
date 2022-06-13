import { ChangeEvent, DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react'
import cn from 'classnames'
import styles from './Controls.module.scss'
import { DataContext } from '../../context/dataContext'
import { useCallback } from 'react'
import Select from '../Select/Select'
import Search from '../Search/Search'

const fieldOptions = ['Название', 'Количество', 'Расстояние']
const orderOptions = ['Равно', 'Содержит', 'Больше', 'Меньше']

type Props = {
  state: DataContext['state']
  updateState: DataContext['updateState']
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

type HandleUpdate = <T extends HTMLInputElement | HTMLSelectElement>(
  event: ChangeEvent<T>,
) => void

const Controls: FC<Props> = ({ state, updateState, className, ...props }) => {
  const handleUpdate = useCallback<HandleUpdate>(
    event => {
      updateState(event.target.name as keyof RequestParams, event.target.value)
    },
    [updateState],
  )

  return (
    <div className={cn(className, styles.controls)} {...props}>
      <Select
        label="Колонка:"
        options={fieldOptions}
        name="field"
        value={state.field || ''}
        onChange={handleUpdate}
      />
      <Select
        label="Условие:"
        options={orderOptions}
        name="order"
        value={state.order || ''}
        onChange={handleUpdate}
      />
      <Search
        name="search"
        value={state.search || ''}
        onChange={handleUpdate}
      />
    </div>
  )
}

export default memo(Controls)
