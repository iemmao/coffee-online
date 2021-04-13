import React from 'react';
import { useHistory } from 'react-router-dom';
import Styles from './about.module.css';
import menuHeader from '../../assets/graphics/graphics-header.svg';
import menuFooter from '../../assets/graphics/graphics-footer.svg';
import evaCortadoImg from '../../assets/graphics/eva-cortado.jpg';
import navIcon from '../../assets/graphics/navicon.svg';

function About() {

    const history = useHistory();

    return (
        <section className={Styles.mainContainer} >
            <img className={Styles.imgHeader} src={menuHeader} alt="header"></img>
            <div className={Styles.navBtn}>
                <div className={Styles.navIconContainer} onClick={() => { history.push('/nav') }}>
                    <img className={Styles.navIcon} src={navIcon} alt="navigation-icon" />
                </div>
            </div>
            <h1 className={Styles.title}>Vårt kaffe</h1>
            <article className={Styles.coffeeInfo}>
                <p className={Styles.aboutIngress}>
                    Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice
                </p>
                <p className={Styles.aboutTextFirst}>
                    Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.
                </p>
                <p className={Styles.aboutTextSecond}>
                    Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.
                </p>
            </article>
            <div className={Styles.founderContainer}>
                <img className={Styles.imgEvaCortado} src={evaCortadoImg} alt="eva-cortado-founder"></img>
            </div>
            <div className={Styles.founderInfo}>
                <p className={Styles.name}>Eva Cortado</p>
                <p className={Styles.jobTitle}>VD &amp; Grundare</p>
            </div>
            <img className={Styles.imgFooter} src={menuFooter} alt="footer"></img>
        </section>
    )
}

export default About;