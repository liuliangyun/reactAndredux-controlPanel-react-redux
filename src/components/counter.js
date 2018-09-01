import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions'

class Counter extends Component {

    render(){
        const buttonStyle = {
            margin: '10px'
        }
        return(
            <div>
                <button style={buttonStyle} onClick={this.props.onIncrement}>+</button>
                <button style={buttonStyle} onClick={this.props.onDecrement}>-</button>
                <span>{this.props.caption}: {this.props.value}</span>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => ({
    value : state[ownProps.caption]
})

const mapDispatchToProps = (dispatch,ownProps) => ({
    onIncrement: () => {
        dispatch(Actions.increment(ownProps.caption))
    },
    onDecrement: () => {
        dispatch(Actions.decrement(ownProps.caption))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Counter)