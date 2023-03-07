import classNames from "classnames"

function Container({ className = '', ...rest }) {
    return <div className={classNames(className, 'px-4 mx-auto container ')} {...rest} />
}

export default Container