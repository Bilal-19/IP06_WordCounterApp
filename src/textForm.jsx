// import ProtoTypes from 'prop-types'
import { useState } from 'react'


export default function TextForm(props) {
    const handleUpperCase = () => {
        setText('You have cicked to upper-case')
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowerCase = () => {
        setText('You have cicked to upper-case')
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleCopyText = () => {
        let newText = document.getElementById('textarea')
        newText.Select
        navigator.clipboard.writeText(newText.value)
        alert('Text copied!')
    }

    // const handleRemoveExtraSpace = () => {
    //     let newText = text.split(`/[]+ /s`)
    //     setText(newText.join(''))
    // }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    return (
        <>
            <h1 className='responsive-heading'>{props.heading}</h1>
            <div className="box">
                <textarea className='text-area' value={text} onChange={handleOnChange} placeholder='Enter text here' id='textarea'>
                </textarea>

                <div className="button">
                    <button onClick={handleUpperCase}>Uppercase</button>
                    <button onClick={handleLowerCase}>Lowercase</button>
                    <button onClick={handleCopyText}>Copy Text</button>
                    {/* <button onClick={handleRemoveExtraSpace}>Remove Extra Space</button> */}
                </div>
            </div>

            <div className="para">
                <p><strong>Total No of Words:</strong> {text.split(' ').length - 1}</p>
                <p><strong>Total No of Characters:</strong> {text.length}</p>
                <p><strong>Time-Taken:</strong> {0.008 * text.split("").length}</p>
                <p><strong>Text Preview:</strong> {text}</p>
            </div>
        </>
    )
}