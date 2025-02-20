import React from 'react'
import "./Error.scss"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Error = () => {
  const {t} = useTranslation()
  return (
    <section id='errorPage'>
        <div className="pageText">
            <h4>{t("errorPageHeading")}</h4>
            <h1>404</h1>
            <p>{t("errorPageTittle")}</p>
            
            <br />
            <Link to="/" >{t("errorPageButton")}</Link>
        
        </div>
    </section>
  )
}

export default Error