import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addItem, addQuantity } from '../../actions/handleItems';
import Styles from './menu.module.css';
import menuHeader from '../../assets/graphics/graphics-header.svg';
import menuFooter from '../../assets/graphics/graphics-footer.svg';
import navIcon from '../../assets/graphics/navicon.svg';
import cartIcon from '../../assets/graphics/bag.svg';
import addToCart from '../../assets/graphics/add-to-cart.png';


function Menu() {

    const [coffeeData, setCoffeeData] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();


    // Hämtar API från localhost://5000
    // Collects API from server localhost://5000 with the method GET
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5000/api/beans`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify()
            });
            const data = await response.json();
            setCoffeeData(data.menu)
        }
        fetchData();
    }, [])

    // Saves current store to variable orderData
    const orderData = useSelector((state) => { return state.order })

    // Updates Redux Store from localStorage
    useEffect(() => {
            try {
                // Saves localStoraged to a variable
                let cartItems = JSON.parse(localStorage.getItem('savedCart'))
                // If store is empty and the cart contains one or more items a for-loop runs
                // The for-loop dispacthes the action addItem to cartItem(with an index) depending on the length of cartItems. 
                if (orderData.length <= 0 && cartItems.length >= 1) {
                    for (let i = 0; i < cartItems.length; i++) {
                        dispatch(addItem(cartItems[i]))
                    }
                }
            } catch (error) {
                console.log(error);
            }
    }, []);




    // Funktion som går igenom olika conditions för att dispatcha actions: addItem och addQuantity
    // Function that dispatches actions (addItem and addQuantity) depending on conditions
    function handleClick(data) {
        // Creates variable with value false
        let found = false
        // Om varukorgen inte är tom loopas orderData igenom för att se om kaffesorten man klickat på redan finns i varukorgen
        if (orderData.length > 0) {
            orderData.forEach(function (orderItem) {
                // Finns kaffesorten i varukorgen ändras variabeln found till true och dispatchar addQuantity
                if (data.id == orderItem.id) {
                    found = true
                    dispatch(addQuantity(data))
                }
            })
            // Om kaffesorten inte finns i varukorgen är found fortfarande false, då läggs kaffesorten till och quantity ökar
            if (found == false) {
                dispatch(addItem(data))
                dispatch(addQuantity(data))
            }
            // Om varukorgen är tom så läggs kaffesort till och quantity ökar
        } else {
            dispatch(addItem(data))
            dispatch(addQuantity(data))
        }
    }

    // Skickar användaren till /cart om det finns något i varukorgen
    // Om varukorgen är tom, visas en alert och användaren är kvar i menu
    // Sends the user to /cart if it contains one item or more
    // If cart is empty, an alert is displayed and the user remains in /menu
    function handleClickCart() {
        if (orderData.length > 0) {
            history.push('/cart');
        } else {
            alert('Varukorgen är tom!')
        }
    }

    // Sums the total items in cart
    let totalCount = 0;
    orderData.forEach(data => {
        totalCount = totalCount + data.quantity;
    })

    return (
        <section className={Styles.mainContainer}>
            <img className={Styles.imgHeader} src={menuHeader} alt="header" />
            <div className={Styles.navIconContainer} onClick={() => { history.push('/nav') }}>
                <img className={Styles.navIcon} src={navIcon} alt="navigation-icon" />
            </div>
            <div className={Styles.cartIconContainer} onClick={handleClickCart}>
                <img className={Styles.cartIcon} src={cartIcon} alt="cart-icon" />
            </div>
            <div className={Styles.itemCounter}>{totalCount}</div>
            <h1 className={Styles.title}>Meny</h1>
            <section className={Styles.menuContainer}>
                {coffeeData.map((data) => {
                    return <section className={Styles.menuCoffeeContainer} key={data.id}>
                        <div className={Styles.addBtnContainer}>
                            <div className={Styles.addBtn} onClick={(() => handleClick(data))}>
                                <img data-testid="test-img" src={addToCart} alt="add-to-cart-icon"></img>
                            </div>
                        </div>
                        <div className={Styles.coffeeContainer}>
                            <p className={Styles.coffeeTitle}>{data.title}</p>
                            <div className={Styles.dottedLine}></div>
                            <p className={Styles.coffeeDesc}>{data.desc}</p>
                        </div>
                        <div>
                            <p className={Styles.coffeePrice}>{data.price} kr</p>
                        </div>
                    </section>
                })}
            </section>
            <img className={Styles.imgFooter} src={menuFooter} alt="footer" />
        </section>
    )
}

export default Menu;