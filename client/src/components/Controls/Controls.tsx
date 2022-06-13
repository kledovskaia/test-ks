import { ChangeEvent, DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react'
import cn from 'classnames'
import styles from './Controls.module.scss'
import { DataContext } from '../../context/dataContext'
import { useCallback } from 'react'
import Select from '../Select/Select'

const fieldOptions = ['Название', 'Количество', 'Расстояние']
const orderOptions = ['Равно', 'Содержит', 'Больше', 'Меньше']

type Props = {
  state: DataContext['state']
  updateState: DataContext['updateState']
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Controls: FC<Props> = ({ state, updateState, className, ...props }) => {
  const handleUpdate = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    updateState(
      event.target.name as keyof RequestParams,
      event.target.value,
    )
  }, [updateState])


  return (
    <div className={cn(className, styles.controls)} {...props}>
      <Select 
        label="Колонка:"
        options={fieldOptions}
        value={state.field || ''}
        onChange={handleUpdate}
        name="field"
      />
      <Select 
        label="Условие:"
        options={orderOptions}
        value={state.order || ''}
        onChange={handleUpdate}
        name="order"
      />
    </div>
  )
}

export default memo(Controls)
