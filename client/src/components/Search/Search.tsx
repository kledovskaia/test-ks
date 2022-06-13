import { DetailedHTMLProps, FC, HTMLAttributes, memo } from "react"
import Input from "../Input/Input"

type Props = DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Search: FC<Props> = (props) => {
    return <Input {...props}/>
}

export default memo(Search)