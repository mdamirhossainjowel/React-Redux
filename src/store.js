import counterReducer from './Services/Reducers/Reducers'

const { createStore } = require("redux");



const store = createStore(counterReducer);

export default store