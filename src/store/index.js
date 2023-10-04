// import { createStore } from 'redux';

// const initialState = {
//   counter: 0,
// };

// const counterReducer=(state=initialState,action)=>{
//     if(action.type==='increment'){
//         return {
//             ...state,
//             counter:state.counter+1
//         }
//     }
//     if(action.type==='decrement'){
//         return{
//             ...state,
//         counter:state.counter-1,
//     }
//     }
// if (action.type === 'toggle') {
//   return {
//     showCounter:!state.showCounter,
//   };
// }
//  }
//  const store=createStore(counterReducer)

//  export default store;

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth';
import counterReducer from './Counter';





// Use configureStore instead of createStore



const store = configureStore({
  reducer: {
    counter:counterReducer,                              //counterSlice.reducer ,                   //counter: counterReducer,
    auth:authReducer                                  //authSlice.reducer
  }
});



export default store;



// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       ...state,
//       counter: state.counter + 2,
//       //showCounter:state.showCounter,
//     };
//   }
//   if (action.type === 'decrement') {
//     return {
//       //showCounter:state.showCounter,
//       ...state,
//       counter: state.counter - 2,
//     };
//   }
//    if (action.type === 'toggle') {
//     return {
//       ...state,
//       showCounter:!state.showCounter,
//     };
//   }

//   return state;
// };