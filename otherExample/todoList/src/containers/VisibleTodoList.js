import {connect} from "react-redux"
import {toggleTodo} from "../actions"
import TodoList from "../components/TodoList"

const getVisibleTodos = (todos,filter) =>{
    switch(filter){
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t=>t.compledted)
        case 'SHOW_ACTIVE':
            return todos.filter(t=>!t.compledted)
        default:
            return todos
    }
}

const mapStateToProps = state =>{
    return {
        todos:getVisibleTodos(state.todos,state.visiblityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onTodoClick: index => {
        dispatch(toggleTodo(index))
      }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList