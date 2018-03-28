import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import {Provider,connect} from "react-redux"

//UI组件
class Counter extends React.Component{
    render(){
        const {value,onIncreaseClick} = this.props
        return(
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>增加1</button>
            </div>
        )
    }
}


//定义Action
const increaseAction = {type:'increase'}
//定义映射关系
function mapStateToProps(state){
    return {
        value:state.count
    }
}

function mapDispatchToProps(dispatch){
    return {
        onClick:()=>dispatch(increaseAction)
    }
}
//使用Connect创建容器组件
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

//定义Reducer
function counterReducer(state = {count:0},action){
    const count = state.count
    switch(action.type){
        case 'increase':
            return {count:count+1}
        default:
            return state
    }
}

//创建Store
const store = createStore(counterReducer)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )