import classNames from "classnames"

const Ul = ({ className = '', ...rest }) => {
    return <ul className={classNames(className, 'list-none ml-o pl-[12px] [text-indent:-18px] pr-4')} {...rest} />
}

export default Ul