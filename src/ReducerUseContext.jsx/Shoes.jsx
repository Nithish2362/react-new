import React, { useContext } from 'react'
import {DataContext} from '../ReducerUseContext.jsx/Nk'

const Shoes = () => {
    const { cars, Bikes, ShoesBrands } = useContext(DataContext);
  return (
    <div>
        <h1>Shoes brands</h1>
      {ShoesBrands.map((item)=><div key={item.id}><ul>
        <li>{item.id}.{item.name}<span> (#{item.color})</span></li>
        </ul></div>)}
    </div>
  )
}

export default Shoes
