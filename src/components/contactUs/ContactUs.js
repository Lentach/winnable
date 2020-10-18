import React from 'react';
import './ContactUs.css'
const ContactUs = () => {
    return (
        <div>
            <form className='form'>
                <h1>Contact Me</h1>
                <i className="fab fa-phoenix-framework"/>
                <br/>
                <br/>
                    <label>Name</label>
                    <input placeholder='Name'/>

                    <label>Email</label>
                    <input placeholder='Email'/>

                    <label>Message</label>
                    <textarea placeholder='message'/>

                    <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
