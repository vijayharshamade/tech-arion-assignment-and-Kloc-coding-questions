


import './index.css'
import { useState } from "react"

const LoginForm = () => {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [name, setName] = useState("")

    const onChangeEmail = event => {
        setEmail(event.target.value)
    }

    const onChangeMessage = event => {
        setMessage(event.target.value)
    }

    const onChangeName = event => {
        setName(event.target.value)
    }

    const submitForm = async event => {
        event.preventDefault()
        const formUrl = " https://admin.srkprojects.com/web/api/client/v1/contact-us/"
        const contactDetails = { email, message, name }
        const options = {
            method: "POST",
            body: JSON.stringify(contactDetails)
        }

        const formResponse = await fetch(formUrl, options)
        const formData = await formResponse.json()
        if (formResponse.ok === true) {
            console.log(formData)
        }


    }

    return (
        <>
            <div className='login-form-container'>
                <h1>
                    Contact Us
                </h1>
                <form className='form-container' onSubmit={submitForm}>

                    <div className='input-container'>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="text" value={email} id="email" onChange={onChangeEmail} />
                    </div>

                    <div className='input-container'>
                        <label htmlFor="message">
                            Message
                        </label>
                        <input type="text" value={message} id="message" onChange={onChangeMessage} />
                    </div>

                    <div className='input-container'>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="text" value={name} id="name" onChange={onChangeName} />
                    </div>

                    <button className='button' type="submit">Submit</button>
                </form>
            </div>
        </>

    )
}

export default LoginForm