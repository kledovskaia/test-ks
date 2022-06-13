import { DetailedHTMLProps, FC, HTMLAttributes, useContext } from 'react'
import cn from 'classnames'
import { DataContext } from '../../context/dataContext'
import styles from './Error.module.scss'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Error: FC<Props> = ({ className, ...props }) => {
  const { error } = useContext(DataContext)

  if (!error) return null

  return (
    <div className={cn(className, styles.error)} {...props}>
      {error.message}
    </div>
  )
}

export default Error
