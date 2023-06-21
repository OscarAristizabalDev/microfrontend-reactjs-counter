import React, { useState } from 'react'
import styled from '@emotion/styled';

import "./Counter.css"
import { Button } from './Button';

const Success = styled.span`
    color: lime;
`
const Error = styled.span`
    color: tomato;
`

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const onSumar = () => {
        setCounter(counter + 1)
    }

    const onRestar = () => {
        setCounter(counter - 1)
    }

    return (
        <div className='Counter-container'>
            {/* <h3>Counter: <Success>{counter}</Success></h3> */}
            <h3>Counter:
                {
                    (counter < 0)
                        ? <Error>{counter}</Error>
                        : <Success>{counter}</Success>
                }
            </h3>
            <Button text='+ 1' onClickCounter={onSumar} />
            <Button text='- 1' onClickCounter={onRestar} />
        </div>
    )
}
