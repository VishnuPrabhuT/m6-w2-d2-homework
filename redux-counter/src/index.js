import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Counter from "./Counter";

const initialState = { count: 0 };

function reducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "RESET":
            return { count: initialState.count };
        default:
            return state;
    }
}
const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
        <Counter />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

render(<App />, document.querySelector("#root"));
