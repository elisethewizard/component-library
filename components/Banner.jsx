import React from "react"
import classnames from "classnames"
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaInfoCircle } from "react-icons/fa"

export default function Banner({children, variant='neutral', title=`Banner's title`, className, ...rest}){
    let variantClass = variant && `banner-${variant}`
    const allClasses = classnames('banner', variantClass, className)
    
    return (
        <div className={allClasses}>
            {variant === 'success' ? <FaCheckCircle className='icon' /> :
            variant === 'warning' ? <FaExclamationTriangle className='icon' /> :
            variant === 'error' ? <FaTimesCircle className='icon' /> :
            <FaInfoCircle className='icon' />}
            <h1>{title}</h1>
            {children && <h2>{children}</h2>}
        </div>
    )
}