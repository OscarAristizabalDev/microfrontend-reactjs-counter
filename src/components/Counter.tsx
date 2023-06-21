import React, { useState } from 'react'

import "./Counter.css"
import { Button } from './Button';

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
            <h3>Counter: {counter}</h3>
            <Button text='+ 1' onClickCounter={onSumar} />
            <Button text='- 1' onClickCounter={onRestar} />
        </div>
    )
}
