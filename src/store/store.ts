import { createStore } from "redux"
import { tokensReducer } from "./token/tokensReducer"

const store = createStore(tokensReducer)

export default store;