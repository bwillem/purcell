import { FC } from "react"

const H2: FC<{ children: string }> = props => {
    return (
        <h2 className="text-brand font-bold text-2xl leading-[1]" {...props} />
    )
}

export default H2