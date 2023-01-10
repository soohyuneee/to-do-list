import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
	flex: 1;
	padding: 20px 32px;
	padding-bottom: 48px;
	overflow-y: auto;
`;

function TodoList() {
	return (
		<TodoListBlock>
			<TodoItem text="노션에 과제 제출하기" done={true} />
			<TodoItem text="코딩테스트 문제풀기" done={true} />
			<TodoItem text="클론 코딩 강의 듣기" done={false} />
			<TodoItem text="투두리스트 기능 구현하기" done={false} />
		</TodoListBlock>
	);
}

export default TodoList;
