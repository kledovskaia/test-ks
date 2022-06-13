import { DetailedHTMLProps, FC, HTMLAttributes, useContext } from 'react'
import cn from 'classnames'
import styles from './Loader.module.scss'
import { DataContext } from '../../context/dataContext'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Loader: FC<Props> = ({ className, ...props }) => {
  const { loading } = useContext(DataContext)

  if (!loading) return null

  return <div className={cn(className, styles.loader)} {...props} />
}

export default Loader
