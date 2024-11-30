import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2'
import "./ContactForm.scss"
const ContactForm = () => {
    const validationSchema = Yup.object({
        firstName: Yup.string()
          .required("First name is required")
          .min(2, "First name must be at least 2 characters"),
        lastName: Yup.string()
          .required("Last name is required")
          .min(2, "Last name must be at least 2 characters"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        phoneNumber: Yup.string()
          .matches(/^[0-9]+$/, "Phone number must be digits only")
          .min(10, "Phone number must be at least 10 digits")
          .required("Phone number is required"),
        message: Yup.string()
          .max(500, "Message cannot exceed 500 characters")
          .required("Message is required"),
      });
      
    const formik = useFormik({
        initialValues: {
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
          console.log(values);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          resetForm();
        },
      });
  return (
    <section id='contactform'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-11">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="formHeader">
                            <h3>Send Us a Message</h3>
                        </div>
                        <div className="formInputs">
                            <div className="formInputDiv">
                                <label htmlFor="firstName"> First Name</label>
                                <input 
                                type="text" 
                                id='firstName' 
                                name='firstName'
                                placeholder='First Name'
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                                />
                                {formik.errors.firstName ? <div style={{ color: "red" }}>{formik.errors.firstName}</div> : null}
                            </div>
                            <div className="formInputDiv">
                                <label htmlFor="lastName"> Last Name</label>
                                <input
                                 type="text" 
                                 id='lastName' 
                                 name='lastName'
                                 placeholder='Last Name' 
                                 onChange={formik.handleChange}
                                 value={formik.values.lastName}/>
                                 {formik.errors.lastName ? <div style={{ color: "red" }}>{formik.errors.lastName}</div> : null}
                            </div>
                            <div className="formInputDiv">
                                <label htmlFor="phoneNumber"> Phone Number</label>
                                <input 
                                type="tel" 
                                id='phoneNumber' 
                                name='phoneNumber'
                                placeholder='Phone Number'  
                                onChange={formik.handleChange}
                                value={formik.values.phoneNumber}/>
                                {formik.errors.phoneNumber ? <div style={{ color: "red" }}>{formik.errors.phoneNumber}</div> : null}
                           </div>
                            <div className="formInputDiv">
                                <label htmlFor="email"> E-mail Address</label>
                                <input 
                                type="text" 
                                id='name' 
                                name='email'
                                placeholder='E-mail Address' 
                                onChange={formik.handleChange}
                                value={formik.values.email}/>
                                {formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}
                           
                            </div>
                            <div className="formTextAreaDiv">
                                <label htmlFor="message">Message</label>
                                <textarea 
                                name="message" 
                                id="message" 
                                placeholder='Write a Message'
                                onChange={formik.handleChange}
                                    value={formik.values.message}
                                ></textarea>
                                {formik.errors.message ? <div style={{ color: "red" }}>{formik.errors.message}</div> : null}
                           
                            </div>
                        </div>
                        <div className="formButton">
                            <button type='submit' >Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactForm