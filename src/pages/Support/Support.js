import React, { useEffect } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../common'
import { AiOutlineLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import HeaderDark from "../Landing/HeaderDark";
import Footer from "../Landing/Footer";
import Dropdown from "../../common/Dropdown";

export const Support = () => {
  const { t } = useTranslation()
  const [helpAndSupport, sethelpAndSupport] = useState('')

  const navigate = useNavigate()

  const handleClose = () => {
    navigate(-1)
  }

  useEffect(() => {
    if (navigator.language === 'ro') {
      fetch('/api/help-and-support-ro')
        .then((response) => response.json())
        .then((data) => {
          const paragraphs = data.helpAndSupport.split('\n')
          sethelpAndSupport(paragraphs)
        })
        .catch((error) => console.error(error))
    } else {
      fetch('/api/help-and-support-en')
        .then((response) => response.json())
        .then((data) => {
          const paragraphs = data.helpAndSupport.split('\n')
          sethelpAndSupport(paragraphs)
        })
        .catch((error) => console.error(error))
    }
  }, [])

  return (
      <div>
        <HeaderDark />

        <div className="flex justify-center mt-16">
          <div className="xxs:pr-12 xxs:pl-12 md:pr-46 md:pl-46 lg:pr-60 lg:pl-60 d-flex flex-col">
            <div className="flex flex-row mb-9 justify-center gap-10">
               <div className="flex w-full justify-center items-center">
                <p className="xxs:text-[25px] sm:text-[36px] lg:text-[50px] font-extrabold mt-12 xxs:w-full sm:w-full lg:w-1/2 uppercase">{t('footer.help')}</p>
               </div>
               <img src="/assets/images/blog_image.png" alt="Support" className="xxs:w-3/4 sm:w-full lg:w-full" />
            </div>
            <div className="w-full mt-2">
              <div className="flex flex-col border-[1px] bg-[#FFF] shadow-lg font-extrabold rounded-[5px] p-4 mt-4 xxs:w-full sm:w-[500px] lg:w-[1100px]">
                <Dropdown title="Cum pot contacta departamentul de suport Adhoc?" content="Your clients don’t need to install or do anything special. Just scan & browse" iconColor="#000000" />
              </div>

              <div className="flex flex-col border-[1px] bg-[#FFF] shadow-lg font-extrabold rounded-[5px] p-4 mt-4 xxs:w-full sm:w-[500px] lg:w-[1100px]">
                <Dropdown title="De ce este nevoie de numărul meu de telefon?" content="Your clients don’t need to install or do anything special. Just scan & browse" iconColor="#000000" />
              </div>

              <div className="flex flex-col border-[1px] bg-[#FFF] shadow-lg font-extrabold rounded-[5px] p-4 mt-4 xxs:w-full sm:w-[500px] lg:w-[1100px]">
                <Dropdown title="Când pot să folosesc Adhoc?" content="Your clients don’t need to install or do anything special. Just scan & browse" iconColor="#000000" />
              </div>

              <div className="flex flex-col border-[1px] bg-[#FFF] shadow-lg font-extrabold rounded-[5px] p-4 mt-4 xxs:w-full sm:w-[500px] lg:w-[1100px]">
                <Dropdown title="Ce pot să comand?" content="Daca vezi QR codul insotiti de logo ul nostru inseamna ca , ti-am răspunde instant - Ce-ți dictează pofta ! si este disponibil la locatia Partenerului nostru " iconColor="#000000" />
              </div>

              <div className="flex flex-col border-[1px] bg-[#FFF] shadow-lg font-extrabold rounded-[5px] p-4 mt-4 xxs:w-full sm:w-[500px] lg:w-[1100px]">
                <Dropdown title="Care sunt metodele de plată acceptate?" content="Adhoc îți pune la dispoziție următoarele metode de plată: numerar, card bancar. Recomandăm mereu livrarea non-contact și plata cu cardul, pentru mai multă siguranță." iconColor="#000000" />
              </div>

              <div className="flex flex-col border-[1px] bg-[#FFF] shadow-lg font-extrabold rounded-[5px] p-4 mt-4 xxs:w-full sm:w-[500px] lg:w-[1100px]">
                <Dropdown title="Cum modific metoda de plată?" content="Your clients don’t need to install or do anything special. Just scan & browse" iconColor="#000000" />
              </div>

              <div className="flex flex-col border-[1px] bg-[#FFF] shadow-lg font-extrabold rounded-[5px] p-4 mt-4 xxs:w-full sm:w-[500px] lg:w-[1100px]">
                <Dropdown title="Cum identific produsele dorite?" content={
                  <div>
                    <p>Ai 2 variante disponibile, alege-o tu pe ce mai accesibilă pentru tine:</p>
                    <ul>
                      <li>&nbsp; • Cauți orice îți trece prin cap și vrei să-ți aducem în secțiunea de căutare din partea de sus a paginii</li>
                      <li>&nbsp; • Acasă Explorezi categoriile disponibile în aplicație</li>
                    </ul>
                  </div>
                } iconColor="#000000" />
              </div>

              <div className="flex flex-col border-[1px] bg-[#FFF] shadow-lg font-extrabold rounded-[5px] p-4 mt-4 xxs:w-full sm:w-[500px] lg:w-[1100px]">
                <Dropdown title="Unde adaug codul de voucher?" content="Your clients don’t need to install or do anything special. Just scan & browse" iconColor="#000000" />
              </div>

              <div className="flex flex-col border-[1px] bg-[#FFF] shadow-lg font-extrabold rounded-[5px] p-4 mt-4 xxs:w-full sm:w-[500px] lg:w-[1100px]">
                <Dropdown title="Cum iau legatura cu Partenerul? " content="Your clients don’t need to install or do anything special. Just scan & browse" iconColor="#000000" />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
  )
}

export default Support
