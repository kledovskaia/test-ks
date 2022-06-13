import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import Controls from "../components/Controls/Controls"
import Table from "../components/Table/Table"

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Main: FC<Props> = (props) => {
    return (
        <div {...props}>
            <Controls />
            <Table />
        </div>
    )
}