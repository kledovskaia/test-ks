import { ChangeEvent, DetailedHTMLProps, FC, HTMLAttributes, memo, useCallback, useState } from 'react'
import cn from 'classnames'
import styles from './Select.module.scss'

type Props = {
  label: string,
  options: string[],
  name: string,
  value: string,
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
} & DetailedHTMLProps<
  HTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>

const Select: FC<Props> = ({ label, options, className, ...props }) => {
  return (
    <select 
      className={cn(className, styles.select)} 
      {...props}
    >
      <option value="" disabled>{label}</option>
      {options.map(option => (
        <option key={option} value={option.toLowerCase()}>{option}</option>
      ))}
    </select>
  )
}

export default memo(Select)
