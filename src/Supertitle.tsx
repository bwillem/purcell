import classNames from "classnames"
import { FC } from "react"

const Supertitle: FC<{ className?: string, children: string }> = ({ className = '', ...rest }) => {
    return (
        <h3
            className={classNames(className, "uppercase tracking-widest")}
            {...rest}
        />
    )
}

export default Supertitle