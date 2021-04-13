import React from 'react';
import { useHistory } from 'react-router-dom';

// Importerar css-modulen för landing-filen
import style from './landing.module.css';
// Importerar graphics till designen
import GraphicLeft from '../../assets/graphics/intro-graphic-left.svg';
import GraphicRight from '../../assets/graphics/intro-graphic-right.svg';
import logo from '../../assets/graphics/airbean-landing.svg';

function Landing() {
    // Sparar ner useHistory i en variabel
    const history = useHistory();

    // setTimeout funktion för att sidan ska laddas om till menyn efter 4 sekunder
    setTimeout(() => {
        history.push("/menu");    
    }, 4000)

    // Function för att byta komponent när användaren klickar på browsern
    function handleClick() {
        history.push("/menu"); 
    }
    
    return(
        // CSS
        <main data-testid="testTwo" className={style.container} onClick={handleClick}>
            <img src={GraphicLeft} alt="left" className={style.left} />
            <img src={GraphicRight} alt="right" className={style.right} />

            <div className={style.logoContainer}>
                <img src={logo} alt="logo" />
            </div>
        </main>
    )
}

export default Landing;