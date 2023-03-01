import { FC } from "react"

const Supertitle: FC<{ children: string }> = props => {
    return (
        <h3 className="text-white uppercase tracking-widest" {...props} />
    )
}

export default Supertitle