import {createSlice} from "@reduxjs/toolkit"

interface UIState {
    ui: string; 
  }
 
  const storedUI = localStorage.getItem("ui");
  const initialState: UIState = {
    ui: storedUI || "sets",
  };

const uiSlice = createSlice({
    name:"ui",
    initialState,
    reducers:{
        setsUI:(state, action) => {
            state.ui = action.payload;
            localStorage.setItem("ui", action.payload)
        },
        fruitsUI:(state, action) => {
            state.ui = action.payload;
            localStorage.setItem("ui", action.payload)
        },
        vegetablesUI:(state, action) => {
            state.ui = action.payload;
            localStorage.setItem("ui", action.payload)
        },
        greeneryUI:(state, action) => {
            state.ui = action.payload;
            localStorage.setItem("ui", action.payload)
        },
        fungiUI:(state, action) => {
            state.ui = action.payload;
            localStorage.setItem("ui", action.payload)
        },
        groceriesUI:(state, action) => {
            state.ui = action.payload;
            localStorage.setItem("ui", action.payload)
        },
        sweetsUI:(state, action) => {
            state.ui = action.payload;
            localStorage.setItem("ui", action.payload)
        },
        drinksUI:(state, action) => {
            state.ui = action.payload;
            localStorage.setItem("ui", action.payload)
        }
    }
})

export const {setsUI,
    fruitsUI,
    vegetablesUI,
    greeneryUI,
    fungiUI,
    groceriesUI,
    sweetsUI,
    drinksUI } = uiSlice.actions;
export default uiSlice.reducer;