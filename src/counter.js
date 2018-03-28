import React from "react"
import ReactDom from "react-dom"
import { createStore } from "redux"

const Counter = ({ value, onIncrement, onDecrement }) => (//定义组件
    <div>
        <h1>我是渲染出来的值:{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
)

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state
    }
}

const store = createStore(reducer)

const render = () => {
    ReactDom.render(
        <Counter
            value={store.getState()}
            onIncrement={()=>store.dispatch({ type: 'INCREMENT' })}
            onDecrement={()=>store.dispatch({ type: 'DECREMENT' })}
        />,
        document.getElementById('root')
    )
}''

render()
store.subscribe(render)
store.subscribe(()=>{
    console.log(store.getState())
})
