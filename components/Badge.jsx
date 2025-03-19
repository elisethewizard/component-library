import React from "react"
import classnames from "classnames"

export default function Badge({ children='Badge', color='gray', form='square', className, ...rest }) {
    let colorClass = color && `badge-${color}`
    let formClass = form && `badge-${form}`
    const allClasses = classnames('badge', colorClass, formClass, className)

    return (
        <div className={allClasses} {...rest}>
            {children}
        </div>
    )
}