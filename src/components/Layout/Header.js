import React from 'react'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
import mealsImage from '../../assets/meals.jpg'

const Header = (props) => {

    return (
        <>
            <header className={classes.header}>          
                <h1>React Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="table full of food"/>
            </div>
        </>    
    )
}


export default Header