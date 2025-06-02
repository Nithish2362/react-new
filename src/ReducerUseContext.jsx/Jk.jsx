import React, { useContext } from 'react'
import {DataContext} from '../ReducerUseContext.jsx/Nk'

const Jk = () => {

 const { cars, Bikes, ShoesBrands } = useContext(DataContext);

  return (
    <div>
    <h1>Bike brands</h1>
        {Bikes.map((item)=><div key={item.id}> <ul>
        <li>{item.id}.{item.name}<span> (#{item.color})</span></li></ul></div>)}
    </div>
  )
}

export default Jk
