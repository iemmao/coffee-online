import React from 'react';
import { useHistory } from 'react-router-dom';
import { generateOrderNr, generateETA } from '../../airbean-api/utils/utils';

import drone from '../../assets/graphics/drone.svg';
import style from './status.module.css';

function Status() {
    // Sparar ner useHistory till en variabel
    const history = useHistory();

    // Function på knappen för att kastas tillbaka till menyn och nollställa kundkorgen.
    // Väljer att lägga i denna ordning pga att man först ska hoppa tillbaka till /menu komponenten
    // och sen ska varukorgen återställas till 0.
    function handleClick() {
        history.push("/menu");
        history.push(window.location.reload()); 
    }

    // Sparar ner metoder i variabler
    const ETA = generateETA();
    const orderNr = generateOrderNr();

    return(
        // CSS
        <main data-testid="test" className={style.container}>
            <div className={style.ordernummer}> 
                <p className={style.order}> Ordernummer </p>
                <p data-testid="orderNr" className={style.orderNr}> #{orderNr} </p> 
            </div>

            <img data-testid="droneImg" src={drone} alt="drone" className={style.img} />

            <div data-testid="heading" className={style.text}>
                <h1 className={style.heading}>Din beställning är på väg!</h1>
            </div>

           <div className={style.timeContainer}>
                <p data-testid="time" className={style.time}> {ETA} </p> 
                <p className={style.minuter}> minuter</p>
            </div>

            <div className={style.btnContainer}>
                {/* data-testid, visar vad i komponenten man vill testa */}
                <button onClick={ handleClick } data-testid="testButton" className={style.btn}>Ok, cool!</button>
            </div>
        </main>
    )
}

export default Status;