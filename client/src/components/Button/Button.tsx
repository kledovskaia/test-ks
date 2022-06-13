import cn from 'classnames'
import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react'
import styles from './Button.module.scss'

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const Button: FC<Props> = ({ className, children, ...props }) => {
  return (
    <button className={cn(className, styles.button)} {...props}>
      {children}
    </button>
  )
}

export default memo(Button)
