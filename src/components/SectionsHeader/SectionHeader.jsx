import React from 'react'
import "./SectionHeader.scss"
import { useTranslation } from 'react-i18next'
const SectionHeader = ({sectionHeaderh2,sectionHeaderh3}) => {
    const {t} = useTranslation()
  return (
  <div className="row">
                  <div className="sectionHeader">
                    <p>{t("sectionHeaderTextP")}</p>
                    <h2>{t(sectionHeaderh2)}</h2>
                    <h3>{t(sectionHeaderh3)}</h3>
                  </div>
            </div>
  )
}

export default SectionHeader