import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    firstName: Yup.string().required(t("name-error")).min(2, t("minimun")),
    lastName: Yup.string().required(t("lastname-error")).min(2, t("minimun")),
    email: Yup.string().email(t("Invalid-email-address")).required(t("email-error")),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, t("Invalid-number-address"))
      .min(9, t("Invalid-number-address"))
      .required(t("number-error")),
    message: Yup.string().required(t("textarea-error")),
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
      emailjs
        .send(
          "service_oe7rrp7", // EmailJS servis ID
          "template_8z0emg2", // EmailJS şablon ID
          values,
          "4lXz7K1642U9oFoat" // EmailJS public key
        )
        .then(
          () => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: t("swalAlertTitle"),
              showConfirmButton: false,
              timer: 1500,
            });
            resetForm();
          },
          (error) => {
            console.error("Email gönderme hatası:", error);
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: t("emailError"),
              showConfirmButton: false,
              timer: 1500,
            });
          }
        );
    },
  });

  return (
    <section id="contactform">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11">
            <form onSubmit={formik.handleSubmit}>
              <div className="formHeader">
                <h3>{t("contactDescription")}</h3>
              </div>
              <div className="formInputs">
                <div className="formInputDiv">
                  <label htmlFor="firstName">{t("firstName")}</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder={t("firstName")}
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                  {formik.errors.firstName && <div style={{ color: "red" }}>{formik.errors.firstName}</div>}
                </div>
                <div className="formInputDiv">
                  <label htmlFor="lastName">{t("lastName")}</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder={t("lastName")}
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                  {formik.errors.lastName && <div style={{ color: "red" }}>{formik.errors.lastName}</div>}
                </div>
                <div className="formInputDiv">
                  <label htmlFor="phoneNumber">{t("number")}</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder={t("number")}
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                  />
                  {formik.errors.phoneNumber && <div style={{ color: "red" }}>{formik.errors.phoneNumber}</div>}
                </div>
                <div className="formInputDiv">
                  <label htmlFor="email">{t("email")}</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder={t("email")}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email && <div style={{ color: "red" }}>{formik.errors.email}</div>}
                </div>
                <div className="formTextAreaDiv">
                  <label htmlFor="message">{t("message")}</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder={t("message2")}
                    onChange={formik.handleChange}
                    value={formik.values.message}
                  ></textarea>
                  {formik.errors.message && <div style={{ color: "red" }}>{formik.errors.message}</div>}
                </div>
              </div>
              <div className="formButton">
                <button type="submit">{t("send")}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
