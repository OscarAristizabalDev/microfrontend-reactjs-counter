import React from 'react'

export const Button = ({ text, onClickCounter }: IButtonProps) => {
    return (
        <button onClick={onClickCounter}>{text}</button>
    )
}

interface IButtonProps {
    text: string,
    onClickCounter: (ev: React.MouseEvent<HTMLButtonElement>) => void,
}