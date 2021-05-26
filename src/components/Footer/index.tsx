import React from "react";

interface IProps {
    className?: string
}

const Footer:React.FC<IProps>  = ({className= undefined}) => {
    return <>
        <div className={className}>Divided Footer</div>
    </>
}

export default Footer