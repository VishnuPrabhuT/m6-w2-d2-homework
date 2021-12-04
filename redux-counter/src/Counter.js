import React from "react";
import { connect } from "react-redux";
import "./Counter.css";

class Counter extends React.Component {
    increment = () => {
        this.props.dispatch({ type: "INCREMENT" });
    };

    decrement = () => {
        this.props.dispatch({ type: "DECREMENT" });
    };

    render() {
        return (
            <div className="counter">
                <h2>Counter</h2>
                <div>
                    <span>{this.props.count}</span>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                    <button
                        onClick={() => {
                            this.props.dispatch({ type: "RESET" });
                        }}
                    >
                        reset
                    </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { count: state.count };
}

// export default Counter;
export default connect(mapStateToProps)(Counter);
