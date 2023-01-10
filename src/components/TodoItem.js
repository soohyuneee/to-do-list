import React from "react";
import styled, {css} from "styled-components";
import {MdEdit, MdDone, MdDelete} from "react-icons/md";

const Edit = styled.div`
	padding-right: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #7080ff;
	font-size: 24px;
	transition: 0.2s;
	cursor: pointer;
	&:hover {
		color: #ff8b99;
		transition: 0.2s;
	}
	display: none;
`;

const Remove = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #7080ff;
	font-size: 24px;
	transition: 0.2s;
	cursor: pointer;
	&:hover {
		color: #ff8b99;
		transition: 0.2s;
	}
	display: none;
`;

const TodoItemBlock = styled.div`
	display: flex;
	align-items: center;
	padding-top: 12px;
	padding-bottom: 12px;
	&:hover {
		${Remove} {
			display: initial;
		}
		${Edit} {
			display: initial;
		}
	}
`;

const CheckBox = styled.div`
	width: 32px;
	height: 32px;
	border: 1px solid #7080ff;
	font-size: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	cursor: pointer;
	${(props) =>
		props.done &&
		css`
			background-color: #7080ff;
			color: #ffffff;
		`}
`;

const Text = styled.div`
	flex: 1;
	font-size: 21px;
	letter-spacing: 5px;
	color: #7080ff;
	${(props) =>
		props.done &&
		css`
			color: #96a3fc;
			opacity: 0.5;
			text-decoration: line-through;
		`}
`;

function TodoItem({id, done, text}) {
	return (
		<TodoItemBlock>
			<CheckBox done={done}>{done && <MdDone />}</CheckBox>
			<Text done={done}>{text}</Text>
			<Edit>
				<MdEdit />
			</Edit>
			<Remove>
				<MdDelete />
			</Remove>
		</TodoItemBlock>
	);
}

export default TodoItem;
