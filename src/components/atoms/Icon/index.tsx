import React from 'react'
import SvgIcon from "@mui/material/SvgIcon"
interface PropType{
    path: string;
    width?: string;
    height?: string;
    strokeWidth?: number;
}
const Icon = (props: PropType) => {
    return (    
        <SvgIcon>
            <image xlinkHref = { props.path }
            height = { props.height }  
            width = { props.width }
            strokeWidth = { props.strokeWidth } />
        </SvgIcon>   
    )   
}
export default Icon;