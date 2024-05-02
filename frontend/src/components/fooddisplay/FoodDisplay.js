import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../context/StoreContext'
export const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)

  return (
    <div className='Food-Display' id='FoodDisplay'>FoodDisplay
    <h2>Top dishes </h2>
    <div className='food-display-list'>
        {food_list.map((item,index))=>({

        })}
    </div>
    </div>
  

}
export default FoodDisplay