// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'

// export const store = configureStore({
//     reducers: {
//         counter: counterReducer 
//     }
// })

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer 
    }
})


