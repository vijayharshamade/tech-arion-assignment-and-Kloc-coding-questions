import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import './index.css'

const ReactPopUp = () => {
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")

    const onChnageInput1 = event => {
        setInput1(event.target.value)
    }
    const onChnageInput2 = event => {
        setInput2(event.target.value)
    }
    return (
        <>
            <div className='conatainer'>
                <div className='input-container'>
                    <label htmlFor="input1" type="text">input1</label>
                    <input id="input1" value={input1} onChange={onChnageInput1} />
                </div>
                <div className='input-container'>
                    <label htmlFor="input2" type="text">input2</label>
                    <input id="input2" value={input2} onChange={onChnageInput2} />
                </div>
            </div>

            <div className="popup-container">
                <Popup
                    modal
                    trigger={
                        <button type="button" className="trigger-button">
                            Display
                        </button>
                    }
                >
                    {close => (
                        <>
                            <div>
                                <p>{input1},{input2}</p>
                            </div>
                            <button
                                type="button"
                                className="trigger-button"
                                onClick={() => close()}
                            >
                                Close
                            </button>
                        </>
                    )}

                </Popup>
            </div>
        </>
    )
}
export default ReactPopUp 