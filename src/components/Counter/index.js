import './index.css'
import { useState } from 'react'
const Counter = () => {
    const [count, setCount] = useState(0)

    const onIncrement = () => {
        setCount((prevState) => prevState + 3)
    }

    const onDecrement = () => {
        setCount((prevState) => prevState - 3)
    }

    return (
        <div className="counter-container">
            <div className='counter-card'>
                <h1 className='count'>
                    Counter
                </h1>
                <div className='buttons-count'>
                    <button type="button" onClick={onDecrement}>
                        -
                    </button>
                    <p className='count'>
                        {count}
                    </p>
                    <button type="button" onClick={onIncrement}>
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Counter
