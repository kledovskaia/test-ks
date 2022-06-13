import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react'
import cn from 'classnames'
import styles from './Input.module.scss'

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Input: FC<Props> = ({ className, ...props }) => {
  return <input className={cn(className, styles.input)} {...props} />
}

export default memo(Input)
