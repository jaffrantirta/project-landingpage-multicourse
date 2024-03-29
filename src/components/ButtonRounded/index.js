import React from 'react'

export default function ButtonRounded({ customStyle, text, onClick, isBorderOnly = false }) {
    return (
        <button onClick={e => onClick(e)} className={`transition-all ${isBorderOnly ? `border-2 border-primary text-primary bg-white hover:text-white` : `bg-primary text-white`} font-primary text-lg duration-700 shadow-lg rounded-full px-7 py-4 hover:bg-secondary ${customStyle}`}>{text}</button>
    )
}
