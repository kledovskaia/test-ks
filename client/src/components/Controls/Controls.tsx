import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react'
import cn from 'classnames'
import styles from './Controls.module.scss'
import { DataContext } from '../../context/dataContext'

type Props = {
  state: DataContext['state']
  updateState: DataContext['updateState']
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Controls: FC<Props> = ({ state, updateState, className, ...props }) => {
  return (
    <div className={cn(className, styles.controls)} {...props}>
      controls
    </div>
  )
}

export default memo(Controls)
