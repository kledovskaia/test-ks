import { DetailedHTMLProps, FC, HTMLAttributes, memo } from "react"

type Props = DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement>

const Table: FC<Props> = (props) => {
    return <table {...props}>table</table>
}

export default memo(Table)