import classNames from "classnames"
import { FC } from "react"

const H2: FC<{ className?: string, children: string }> = ({ className = '', ...rest }) => {
    return (
        <h2 className={classNames(className, "text-brand font-bold text-2xl leading-[1]")} {...rest} />
    )
}

export default H2