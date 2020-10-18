import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <form className='form'>
                <h1>Contact from
                    <i className="fab fa-phoenix-framework"/>

                    <label>Name</label>
                    <input placeholder='name'/>

                    <label>Email</label>
                    <input placeholder='Email'/>

                    <label>Message</label>
                    <textarea placeholder='message'/>
                </h1>

            </form>
        </div>
    );
};

export default ContactUs;
