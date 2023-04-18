import classNames from "classnames"
import { forwardRef } from "react"

const Container = forwardRef<any, any>(({ className = '', ...rest }, ref) => {
    return <div ref={ref} className={classNames(className, 'px-4 mx-auto container ')} {...rest} />
})

export default Container