import classNames from "classnames"
import { FC } from "react"

const H4: FC<{ className?: string, children: string }> = ({ className = '', ...rest }) => {
    return (
        <h4 className={classNames(className, "text-brand font-bold text-lg leading-[1]")} {...rest} />
    )
}

export default H4