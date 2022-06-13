import { DetailedHTMLProps, FC, HTMLAttributes, memo } from "react"

type Props = DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: FC<Props> = (props) => {
    return <input {...props} />
}

export default memo(Input)