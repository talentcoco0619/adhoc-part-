import React from 'react'
import Footer from "../Landing/Footer";
import HeaderDark from "../Landing/HeaderDark";

const DigitalMenu = () => {
    return (
        <div>
            <HeaderDark />
            <div className="flex justify-center mt-16">
                <div className="xxs:pr-12 xxs:pl-12 md:pr-46 md:pl-46 lg:pr-60 lg:pl-60 d-flex flex-col">
                    <p className="xxs:text-[23px] sm:text-[36px] lg:text-[56px] font-extrabold mt-14">Ce este un meniu digital?</p>

                    <p>Prezența unui meniu este esențială în cadrul fiecărui restaurant.
                        Acest lucru se poate observa încă de la intrarea în restaurant,
                        unde fiecare client este întâmpinat de preparatele culinare,
                        afișate într-un meniu.
                    </p>

                    <div className="d-flex flex-col mt-2 mb-4">
                        <p>By John Doe</p>
                        <p>12/12/12</p>
                    </div>

                    <div className="w-full">
                        <img className="w-full" src="/assets/images/choose3.png" alt="Why Choose A Digital Menu"/>
                    </div>

                    <div className="mt-8">
                        <p>Astfel, acesta oferă detaliile necesare cu privire la selecția de mâncare, secțiunea de băutură, sau alte alimente disponibile.
                            Totodată, în acest mod, furnizorul pune la dispoziție informații utile în ceea ce privește restricțiile alimentare, dar și prețurile pentru fiecare specialitate.
                            Meniurile tradiționale tipărite pe hârtie au o istorie bogată, fiind recunoscute datorită adoptării în masă de către majoritatea proprietarilor de restaurante.
                            Deși acestea datează de sute de ani, iar în prezent au fost descoperite alternative mai moderne, totuși ele nu au dispărut în totalitate, reprezentând încă o parte importantă din viața restaurantelor de astăzi.
                            Un aspect mai puțin pozitiv al meniurilor pe hârtie este redat însă de numeroasele dezavantaje pe care le atrage, motiv pentru care multe persoane din industrie își ridică întrebări cu privire la eficiența lor. Așadar, în prezent, meniurile digitale se poziționează ca fiind o componentă vitală a noii ere a restaurantelor, aducând multiple avantaje atât clienților, cât și proprietarilor.
                            Optând pentru această alternativă, meniul poate fi explorat direct de pe smartphone, într-un mod captivant și distractiv. De asemenea, în acest fel, angajații restaurantului nu mai sunt supuși unui stres suplimentar pentru a reține comenzile, putând să se axeze pe servirea lor, în loc să aștepte persoanele venite să ia decizii în privința preparatelor dorite.
                            Ideea principală a adoptării acestui meniu online se concentrează, mai precis, pe facilitarea comenzilor, îmbunătățind, în același timp, consistența și acuratețea acestora.
                            Prin intermediul acestui articol, vom pune la dispoziția cititorilor toate aspectele necesare cu privire la beneficiile pe care le poate aduce noul tip de meniu în restaurantele dumneavoastră.
                        </p>
                    </div>

                    <p className="mt-8 text-[36px] font-bold">Ce reprezintă un meniu digital?</p>
                    <p className="mt-2">
                        Un meniu digital restaurant este o alternativă, ce înlocuiește meniul clasic, tradițional.
                        Accesul la acesta poate fi realizat prin tabletă sau telefon, scanând codul QR plasat pe masă.
                        Această metodă le permite clienților unui bar, restaurant sau cafenea să consulte meniul de băuturi sau mâncăruri, fără să aștepte un ospătar.
                        Mulți proprietari de restaurante renunță la meniul tipărit, pe măsură ce observă avantajele aduse de adoptarea unui meniu digital QR.
                    </p>

                    <p className="mt-8 text-[36px] font-bold">Cum funcționează?</p>
                    <p className="mt-2">
                        Un meniu digital restaurant sau meniu digital hotel este simplu și rapid de utilizat, fără a fi necesare aspecte multe prea complexe.
                        Pentru a avea o perspectivă mai concretă asupra a ceea ce implică această variantă de meniu calorii,
                        vom oferi, în cele ce urmează, un ghid pas cu pas pentru a asigura cititorilor o experiență ușoară și plăcută:
                    </p>

                    <div className="w-full">
                        <ol start="1" className="mt-2" style={{listStylePosition: 'inside', display: 'list-item'}}>
                            <li>1. Deschideți aplicația de cameră a telefonului. Odată deschisă, scaneaza meniu cod QR. </li>
                            <li>2. După scanare, veți fi redirecționat către pagina de comanda meniu. Răsfoiți meniul și alegeți preparatul sau băutură dorită. Selectați produsul.</li>
                            <li>3. Selectați produsul. După selectare, veți putea vedea detaliile de bază ale acestuia.</li>
                            <li>4. Puteți scrie o instrucțiune specială pentru a informa ospătarul despre alergiile dumneavoastră, în cazul în care există. Acest lucru este opțional. </li>
                            <li>5. Setați cantitatea pe care doriți să o cumpărați. Puteți crește sau reduce cantitatea produsului printr-un singur clic.</li>
                            <li>6. După ce ați ales produsul, adăugați-l în coș</li>
                            <li>7. După adăugarea produselor dorite, mergeți în coș și plasați comanda. </li>
                            <li>8. Alegeți o metodă de plată pentru a achiziționa produsele. </li>
                            <li>9. În cele din urmă, așteptați să vă fie livrată comanda.</li>
                        </ol>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default DigitalMenu
