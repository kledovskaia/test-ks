import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react'
import cn from 'classnames'
import Input from '../Input/Input'
import styles from './Search.module.scss'

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Search: FC<Props> = ({ className, ...props }) => {
  return <Input className={cn(className, styles.search)} {...props} />
}

export default memo(Search)
