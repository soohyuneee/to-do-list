import React, {useReducer, createContext, useContext, useRef, useEffect} from "react";

function todoReducer(state, action) {
	let newState = [];
	switch (action.type) {
		case "INIT":
			return action.data;
		case "CREATE": {
			newState = state.concat(action.todo);
			break;
		}
		case "TOGGLE": {
			newState = state.map((todo) => (todo.id === action.id ? {...todo, done: !todo.done} : todo));
			break;
		}
		case "REMOVE": {
			newState = state.filter((todo) => todo.id !== action.id);
			break;
		}
		case "EDIT": {
			newState = state.map((todo) => (todo.id === action.id ? {...todo, text: action.newText} : todo));
			break;
		}
		default:
			return state;
	}
	localStorage.setItem("todo", JSON.stringify(newState));
	return newState;
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoDataIdContext = createContext();

export function TodoProvider({children}) {
	const [state, dispatch] = useReducer(todoReducer, []);
	const dataId = useRef(0);

	useEffect(() => {
		const localData = localStorage.getItem("todo");
		if (localData) {
			const todoList = JSON.parse(localData).sort((a, b) => parseInt(b.id) - parseInt(a.id));
			if (todoList.length >= 1) {
				dataId.current = parseInt(todoList[0].id) + 1;
				dispatch({type: "INIT", data: todoList});
			}
		}
	}, []);

	return (
		<TodoStateContext.Provider value={state}>
			<TodoDispatchContext.Provider value={dispatch}>
				<TodoDataIdContext.Provider value={dataId}>{children}</TodoDataIdContext.Provider>
			</TodoDispatchContext.Provider>
		</TodoStateContext.Provider>
	);
}

export function useTodoState() {
	return useContext(TodoStateContext);
}

export function useTodoDispatch() {
	return useContext(TodoDispatchContext);
}

export function useTodoDataId() {
	return useContext(TodoDataIdContext);
}
