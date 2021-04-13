import React from 'react';
import { useHistory } from 'react-router-dom';

import style from './nav.module.css';
import close from '../../assets/graphics/close.svg';

function Nav() {
    const history = useHistory();

    // Functioner som hoppar mellan olika komponenter
    function handleClick() {
        history.push("/menu")
    }

    function click() {
        history.push("/about")
    }

    return(
        // CSS 
        <main>
            <section className={style.container}>
                <div onClick={ handleClick } className={style.closeContainer}>
                    <img src={close} className={style.close} alt="close" />
                </div>

                <article className={style.content}>
                    <div onClick={ handleClick } className={style.meny}>Meny</div>
                    <div className={style.horisont}> </div>
                    <div onClick={ click } className={style.coffee}>Vårt kaffe</div>
                    <div className={style.horisont}> </div>
                </article>
            </section>
        </main>
    )
}

export default Nav;