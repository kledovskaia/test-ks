import { DetailedHTMLProps, FC, HTMLAttributes, memo } from "react"

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Controls: FC<Props> = (props) => {
    return <div {...props}>controls</div>
}

export default memo(Controls)