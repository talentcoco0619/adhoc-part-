import React, { useEffect } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../common'
import { AiOutlineLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Footer from '../Landing/Footer'
import HeaderDark from '../Landing/HeaderDark'

export const Terms = () => {
  const { t } = useTranslation()
  const [termsAndConditions, setTermsAndConditions] = useState('')

  const navigate = useNavigate()

  const handleClose = () => {
    navigate(-1)
  }

  useEffect(() => {
    if (navigator.language === 'ro') {
      fetch('/api/terms-and-conditions-ro')
        .then((response) => response.json())
        .then((data) => {
          const paragraphs = data.termsAndConditions.split('\n')
          setTermsAndConditions(paragraphs)
        })
        .catch((error) => console.error(error))
    } else {
      fetch('/api/terms-and-conditions-en')
        .then((response) => response.json())
        .then((data) => {
          const paragraphs = data.termsAndConditions.split('\n')
          setTermsAndConditions(paragraphs)
        })
        .catch((error) => console.error(error))
    }
  }, [])

  return (
    <div>
      <HeaderDark />

      <div className="flex justify-center mt-16">
        <div className="xxs:pr-12 xxs:pl-12 md:pr-46 md:pl-46 lg:pr-60 lg:pl-60 d-flex flex-col">
          <p className="xxs:text-[25px] sm:text-[32px] lg:text-[56px] font-extrabold mt-14">
            {t('footer.terms')}
          </p>
          <div className="p-[15px] flex-1 overflow-y-auto mt-2">
            {Array.isArray(termsAndConditions) &&
              termsAndConditions.map((paragraph, index) => (
                <p key={index} className="mt-3">
                  {paragraph}
                </p>
              ))}
          </div>

          <p className="mt-8 text-[36px] font-bold">
            Ce reprezintă un meniu digital?
          </p>
          <p className="mt-2">
            Un meniu digital restaurant este o alternativă, ce înlocuiește
            meniul clasic, tradițional. Accesul la acesta poate fi realizat prin
            tabletă sau telefon, scanând codul QR plasat pe masă. Această metodă
            le permite clienților unui bar, restaurant sau cafenea să consulte
            meniul de băuturi sau mâncăruri, fără să aștepte un ospătar. Mulți
            proprietari de restaurante renunță la meniul tipărit, pe măsură ce
            observă avantajele aduse de adoptarea unui meniu digital QR.
          </p>

          <p className="mt-8 text-[36px] font-bold">Cum funcționează?</p>
          <p className="mt-2">
            Un meniu digital restaurant sau meniu digital hotel este simplu și
            rapid de utilizat, fără a fi necesare aspecte multe prea complexe.
            Pentru a avea o perspectivă mai concretă asupra a ceea ce implică
            această variantă de meniu calorii, vom oferi, în cele ce urmează, un
            ghid pas cu pas pentru a asigura cititorilor o experiență ușoară și
            plăcută:
          </p>

          <div className="w-full">
            <ol
              start="1"
              className="mt-2"
              style={{ listStylePosition: 'inside', display: 'list-item' }}
            >
              <li>
                1. Deschideți aplicația de cameră a telefonului. Odată deschisă,
                scaneaza meniu cod QR.{' '}
              </li>
              <li>
                2. După scanare, veți fi redirecționat către pagina de comanda
                meniu. Răsfoiți meniul și alegeți preparatul sau băutură dorită.
                Selectați produsul.
              </li>
              <li>
                3. Selectați produsul. După selectare, veți putea vedea
                detaliile de bază ale acestuia.
              </li>
              <li>
                4. Puteți scrie o instrucțiune specială pentru a informa
                ospătarul despre alergiile dumneavoastră, în cazul în care
                există. Acest lucru este opțional.{' '}
              </li>
              <li>
                5. Setați cantitatea pe care doriți să o cumpărați. Puteți
                crește sau reduce cantitatea produsului printr-un singur clic.
              </li>
              <li>6. După ce ați ales produsul, adăugați-l în coș</li>
              <li>
                7. După adăugarea produselor dorite, mergeți în coș și plasați
                comanda.{' '}
              </li>
              <li>
                8. Alegeți o metodă de plată pentru a achiziționa produsele.{' '}
              </li>
              <li>9. În cele din urmă, așteptați să vă fie livrată comanda.</li>
            </ol>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Terms
