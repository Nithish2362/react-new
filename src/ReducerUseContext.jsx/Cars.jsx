import React, { useContext } from 'react'
import {DataContext} from '../ReducerUseContext.jsx/Nk'
const Cars = () => {

    const { cars } = useContext(DataContext);
  return (
    <div>
        <h1>Cars brands</h1>
        {cars.map((item)=><div key={item.id}> <ul>
        <li>{item.id}.{item.name}<span> (#{item.color})</span></li></ul></div>)}
      
    </div>
  )
}   

export default Cars 
