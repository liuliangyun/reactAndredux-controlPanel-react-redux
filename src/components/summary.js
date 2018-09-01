import React, { Component } from 'react'
import { connect } from 'react-redux'

class Summary extends Component {

    render(){
        return (
            <div>
                Total Count: {this.props.sum}
            </div>
        )
    }
}

const getSum = (state) => {
    let sum = 0
    for (const key in state) {
        if (state.hasOwnProperty(key)) 
            sum += state[key]
    }
    return sum
}

const mapStateToProps = (state) => ({
    sum : getSum(state)
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(Summary)