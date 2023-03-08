import classNames from "classnames"
import { FC } from "react"

const H3: FC<{ className?: string, children: string }> = ({ className = '', ...rest }) => {
    return (
        <h3 className={classNames(className, "uppercase tracking-widest text-brand font-bold text-lg leading-[1]")} {...rest} />
    )
}

export default H3