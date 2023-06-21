import React from 'react'
import styled from '@emotion/styled';

const ButtonStyle = styled.button`
    cursor: pointer;
    font-family: 'Finlandica', sans-serif;
    font-size: 1.2rem;
    margin: 0px 0.5rem;
`

export const Button = ({ text, onClickCounter }: IButtonProps) => {
    return (
        <ButtonStyle onClick={onClickCounter}>{text}</ButtonStyle>
    )
}

interface IButtonProps {
    text: string,
    onClickCounter: (ev: React.MouseEvent<HTMLButtonElement>) => void,
}