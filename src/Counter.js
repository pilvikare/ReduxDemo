import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from  '../actions';

class Counter extends Component {
    state = {
        counter: 10
      } 
    render () {
        return (
            <div>
                <h2>Your score is: {this.props.ctr}</h2>
                <div>
                    <button onClick={this.props.onIncCounter}>Add one</button>
                    <button onClick={this.props.addCounter}>Add five</button>
                    <button onClick={this.props.onDecCounter}>Remove one</button>
                    <button onClick={this.props.subCounter}>Remove five</button>
                    <button onClick={() => this.props.onStoreCounter(this.props.ctr)}>Store result</button>
                    <ul>
                        {this.props.storedResult.map(item => (
                           <li key={item.id} onClick={() => this.props.onDeleteCounter(item.id)}>{item.value}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResult: state.res.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncCounter: () => dispatch({type: actionTypes.INCREMENT}),
    onDecCounter: () => dispatch({type: actionTypes.DECREMENT}),
    addCounter: () => dispatch({type: actionTypes.ADD, value:5}),
    subCounter: () => dispatch({type: actionTypes.SUBTRACT, value:5}),
    onStoreCounter: (result) => dispatch({type: actionTypes.STORE_RESULT, result:result}),
    onDeleteCounter: (id) => dispatch({type: actionTypes.REMOVE_RESULT, resultElementId:id})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);