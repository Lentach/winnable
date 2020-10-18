import React, {useState} from 'react';
import './ContactUs.css'
const ContactUs = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => e.preventDefault()

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>>
                <h1>Contact Me</h1>
                <i className="fab fa-phoenix-framework"/>
                <br/>
                <br/>
                    <label>Name</label>
                    <input
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label>Email</label>
                    <input
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Message</label>
                    <textarea
                        placeholder='message'
                        value={message}
                        onChange={(e => setMessage(e.target.value))}
                    />

                    <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
