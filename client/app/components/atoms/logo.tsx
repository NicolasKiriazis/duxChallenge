import React from "react"

interface ImageProps {
    className: string
}

const Logo:React.FC<ImageProps> = ({className}) => {

return<>

<img src="https://i.ibb.co/HtYK4z2/icon-dux.png" alt="logo-dux" className={className}></img>

</>

}

export default Logo