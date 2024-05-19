import React from "react"
import { BsCloudUpload } from "react-icons/bs"

export default function Card({children, title, ...rest}){
    return (
        <div className='card' {...rest}>
            <div className='card-wrapper'>
                <BsCloudUpload className='card-icon'/>
                <div className='card-text'>
                    <h1>{title ? title : `Easy deployment`}</h1>
                    <h2>{children ? children : `Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.`}</h2>
                </div>
            </div>
        </div>
    )
}