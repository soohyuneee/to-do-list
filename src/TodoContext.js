import React, {useReducer, createContext, useContext, useRef} from "react";

function todoReducer(state, action) {
	switch (action.type) {
		case "CREATE":
			return state.concat(action.todo);
		case "TOGGLE":
			return state.map((todo) => (todo.id === action.id ? {...todo, done: !todo.done} : todo));
		case "REMOVE":
			return state.filter((todo) => todo.id !== action.id);
		case "EDIT":
			return state.map((todo) => (todo.id === action.id ? {...todo, text: action.newText} : todo));
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoDataIdContext = createContext();

export function TodoProvider({children}) {
	const [state, dispatch] = useReducer(todoReducer, []);
	const dataId = useRef(0);

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
