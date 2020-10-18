import React, {useState} from 'react';
import './ContactUs.css'
const ContactUs = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        // if (/wysztkie warunki zostaja spelnione - nie sa pustymi stringami/)
        setSuccess(true)
    };

    return (
            <form
                className='form'
                onSubmit={handleSubmit}>
                >
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
                {success && <p>Wiadomosc zostala wyslana</p>}

            </form>
    );
};

export default ContactUs;


// jesli jest sucsses to wyswietlasz paragraf pod buttonem, na handlesubmit() zmieniasz stan sucsses na true i wyzerowac stan wszystkich inputow

// src nowy folder -assets = masz importowac wsszystkie obrazki