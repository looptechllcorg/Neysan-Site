import React from 'react'
import "./ContactForm.scss"
const ContactForm = () => {
  return (
    <section id='contactform'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-11">
                    <form action="">
                        <div className="formHeader">
                            <h3>Send Us a Message</h3>
                        </div>
                        <div className="formInputs">
                            <div className="formInputDiv">
                                <label htmlFor="name"> First Name</label>
                                <input type="text" id='name' placeholder='First Name' />
                            </div>
                            <div className="formInputDiv">
                                <label htmlFor="name"> Last Name</label>
                                <input type="text" id='name' placeholder='Last Name' />
                            </div>
                            <div className="formInputDiv">
                                <label htmlFor="name"> Phone Number</label>
                                <input type="text" id='name' placeholder='Phone Number' />
                            </div>
                            <div className="formInputDiv">
                                <label htmlFor="name"> E-mail Address</label>
                                <input type="text" id='name' placeholder='E-mail Address' />
                            </div>
                            <div className="formTextAreaDiv">
                                <label htmlFor="">Message</label>
                                <textarea name="message" id="message" placeholder='Write a Message'></textarea>
                            </div>
                        </div>
                        <div className="formButton">
                            <button>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactForm