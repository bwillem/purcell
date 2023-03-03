import classNames from "classnames"

function Li({ className = '', ...rest }) {
    return <li className={classNames(className, 'text-white before:[padding-right:4px] before:[color:#A2BC4C] before:[content:"✓"!important]')} {...rest} />
}

export default Li