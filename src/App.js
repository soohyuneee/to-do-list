import React from "react";
import {createGlobalStyle} from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoFooter from "./components/TodoFooter";
import TodoList from "./components/TodoList";

const GrobalStyle = createGlobalStyle`
  body {
    background : #e9ecef;
  }
`;

function App() {
	return (
		<>
			<GrobalStyle />
			<TodoTemplate>
				<TodoHead />
				<TodoList />
				<TodoFooter />
			</TodoTemplate>
		</>
	);
}

export default App;
