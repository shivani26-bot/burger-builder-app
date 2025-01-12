import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
    // console.log(props); 
   let transfromedIngredient = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i)=> {
            return <BurgerIngredient key ={igKey+i} type={igKey} />;
        });
    })
    .reduce((arr,el)=> {
        return arr.concat(el)
    },[]);
    if(transfromedIngredient.length ===0 ){
       transfromedIngredient = <p>Please start adding ingredients</p> 
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type= "bread-top" />
            {transfromedIngredient}
            <BurgerIngredient type= "bread-bottom" />
        </div>
    )
};

export default burger;