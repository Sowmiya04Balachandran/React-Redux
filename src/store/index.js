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

import { configureStore ,createSlice} from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  showCounter:true,
};

const counterSlice=createSlice({
  name:'counter',
  initialState:initialCounterState,
  reducers:{
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    toggleCounter(state){
      state.showCounter=!state.showCounter;
    }
  }
})

const intialAuthState={
  isAuthenthicated:false,
}

const authSlice=createSlice({
  name:'authentication',
  initialState:intialAuthState,
  reducers:{
    isLogin(state){
      state.isAuthenthicated=true;
    },
    isLogout(state){
      state.isAuthenthicated=false;
    }
  }
})



// Use configureStore instead of createStore



const store = configureStore({
  reducer: {
          counter:counterSlice.reducer ,                   //counter: counterReducer,
        auth:authSlice.reducer
  }
});

export const authAction=authSlice.actions;
export const counterAction=counterSlice.actions;
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