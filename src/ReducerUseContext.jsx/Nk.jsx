import React from "react";
import { Reducer } from "./Reducer";

import { createContext } from "react";
import JK from "./Jk";
import Shoes from "./Shoes";
import Cars from "./Cars";

export const DataContext = createContext();

const cars = [
  { id: "car-1", name: "Ford", color: "red" },
  { id: "car-2", name: "Toyota", color: "blue" },
  { id: "car-3", name: "BMW", color: "black" },
  { id: "car-4", name: "Mercedes", color: "white" },
  { id: "car-5", name: "Audi", color: "green" },
  { id: "car-6", name: "Lexus", color: "yellow" },
  { id: "car-7", name: "Honda", color: "orange" },
  { id: "car-8", name: "Mazda", color: "purple" },
];

const Bikes = [
  { id: "bike-1", name: "Honda", color: "red" },
  { id: "bike-2", name: "Yamaha", color: "blue" },
  { id: "bike-3", name: "Suzuki", color: "black" },
  { id: "bike-4", name: "Kawasaki", color: "white" },
  { id: "bike-5", name: "Ducati", color: "green" },
  { id: "bike-6", name: "BMW", color: "yellow" },
  { id: "bike-7", name: "Honda", color: "orange" },
  { id: "bike-8", name: "Mazda", color: "purple" },
];

const ShoesBrands = [
  { id: "shoe-1", name: "Nike", color: "red" },
  { id: "shoe-2", name: "Adidas", color: "blue" },
  { id: "shoe-3", name: "Puma", color: "black" },
  { id: "shoe-4", name: "Reebok", color: "white" },
  { id: "shoe-5", name: "New Balance", color: "green" },
  { id: "shoe-6", name: "Asics", color: "yellow" },
  { id: "shoe-7", name: "Vans", color: "orange" },
  { id: "shoe-8", name: "Converse", color: "purple" },
];
const Nk = () => {
  return <>
  <DataContext.Provider value={{cars,Bikes,ShoesBrands}}>
      <Reducer />
      <JK />
      <Cars />
      <Shoes />
  </DataContext.Provider>
  </>;
};

export default Nk;
