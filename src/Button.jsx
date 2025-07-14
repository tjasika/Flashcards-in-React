import { useState } from "react";

export const Button = ({icon, onClick}) => {
    return (
        <button onClick={onClick} className="text-2xl hover:cursor-pointer">
            {icon && <i className={`bi ${icon}`}></i>}
        </button>
    )
}