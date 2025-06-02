import React, { useReducer } from 'react'

 export const Reducer = () => {
     
    const initialState=[];
    const Reducer = (state,action) => {
        switch(action.type){
            case 'ADD':
                return[
                    ...state,
                {id:state.length+1,name:action.payload}];
                case 'DELETE':
                    return state.filter((item)=>item.id!==action.payload);
                    case 'UPDATE':
                    return state.map((item)=>item.id===action.payload.id?{...item,name:action.payload.newname}:item);
            default:
                return state;
        }
    }   

    const handleChange=(e)=>{
         if(e.key==='Enter'){
               despatch({type:'ADD',payload:e.target.value})
             }
    };

  
    const[routine,despatch]=useReducer(Reducer,initialState);
  return (
    <div>
        <h1>daily routine</h1>
        <input type="text" placeholder='enter ur routine' onKeyDown={(e)=>handleChange(e)} />
        <ul>
            {routine.map((item)=><li key={item.id}>{item.name}<button 
            onClick={() => despatch({ type: 'DELETE', payload: item.id })}>delete</button>
            <button  onClick={() => despatch({ type: 'UPDATE', payload: { id: item.id, newname: prompt('enter new name', item.name)}})}>Update</button></li>)}
        </ul>
       
    </div>
  )
}

