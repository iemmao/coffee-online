import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Menu from '../../components/menu/menu';
import { addQuantity, removeItem, removeQuantity } from '../../actions/handleItems';
import Styles from './cart.module.css';

import bag from '../../assets/graphics/bag.svg';
import arrowUp from '../../assets/graphics/arrow-up.svg';
import arrowDown from '../../assets/graphics/arrow-down.svg';


function Cart() {

    const history = useHistory();
    const dispatch = useDispatch();

    // Saves our current state to variable items
    const items = useSelector((state) => { return state.order });

    // Creates a function that adds quantity to the item by using dispatch
    function handleClickAdd(item) {
        dispatch(addQuantity(item))
    }

    //Creates a function that removes the item from cart if quantity equals to 1, otherwise it decreases quantity
    function handleClickRemove(item) {
        if (item.quantity == 1) {
            dispatch(removeItem(item))
        } else {
            dispatch(removeQuantity(item))
        }
    }

    //If cart is empty the user is being sent back to menu
    if (items.length < 1) {
        setTimeout(() => {
            history.push('/menu')
        }, 800)
        localStorage.clear();
    }

    // Restores the localStorage and sends the user to /status
    function handleClickOrder() {
        history.push('/status')
        localStorage.clear();
    }

    // Sets the current state to localStorage with onClick
    // localStorage.setItem(keyName, keyValue)
    function handleClickSaveCart() {
        localStorage.setItem('savedCart', JSON.stringify(items))
        setTimeout(() => {
            history.push('/menu')
        }, 800)
    }

    //  Sums the total items in cart
    let totalCount = 0;
    items.forEach(item => {
        totalCount = totalCount + item.quantity;
    })

    // Sums the price for all items
    let total = 0;
    items.forEach(item => {
        total = total + item.quantity
            * item.price;
    })

    return (
        <section className={Styles['main-section']} >
            {/* Imports the Menu component as a background to Cart component */}
            <Menu />
            <div className={Styles['main-box']}>
                <div className={Styles.wrapper}>

                    <div className={Styles['cart-icon-container']} onClick={() => { history.push('/menu') }}>
                        <img className={Styles['cart-icon']} src={bag} alt="Shopping cart"></img>
                    </div>

                    <div className={Styles['item-counter']}>{totalCount}</div>
                    <div className={Styles.arrow}></div>

                    <h2 className={Styles.header}>Din beställning</h2>
                    <div className={Styles.info}>

                        {items.map((item) => {
                            let pricePerItem = item.price * item.quantity;
                            return <section className={Styles['cart-container']} key={item.id}>
                                <div className={Styles['cart-item']}>

                                    <div className={Styles['cart-item-box']}>
                                        <p className={Styles.item}>{item.title}</p>
                                        <p className={Styles.dots}></p>
                                    </div>
                                    <p className={Styles.price}>{pricePerItem} kr</p>
                                </div>

                                <div className={Styles['cart-item-counter']}>
                                    <img onClick={() => { handleClickAdd(item) }} className={Styles['arrow-up']} src={arrowUp} alt="Arrow Up"></img>
                                    <p className={Styles.amount}>{item.quantity}</p>
                                    <img onClick={() => { handleClickRemove(item) }} className={Styles['arrow-down']} src={arrowDown} alt="Arrow Down"></img>
                                </div>
                            </section>
                        })}

                        <div data-testid="test" className={Styles['total-container']}>
                            <div className={Styles.total}>
                                <h3 className={Styles['total-header']}>Total</h3>
                                <p className={Styles['dots-total']}></p>
                                <p className={Styles['total-price']}>{total} kr</p>
                            </div>
                            <p className={Styles.moms}>inkl moms + drönarleverans</p>
                        </div>
                    </div>
                    <button className={Styles['order-button']} onClick={handleClickOrder} >Take my money!</button>

                    <button className={Styles['save-cart-button']} onClick={handleClickSaveCart} >Save shopping cart</button>

                </div>
            </div>
        </section>
    )
}

export default Cart;
