import React, {useState} from "react";
import styled, {css} from "styled-components";
import {MdEdit, MdDone, MdDelete, MdCancel} from "react-icons/md";
import {useTodoDispatch} from "../TodoContext";

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
	@media screen and (max-width: 600px) {
		letter-spacing: 2px;
		font-size: 18px;
	}
`;

const Input = styled.input`
	border-radius: 4px;
	border: 1px solid #dee2e6;
	width: 320px;
	height: 35px;
	outline: none;
	font-size: 18px;
	box-sizing: border-box;
	padding-left: 10px;
	color: #7080ff;
	@media screen and (max-width: 600px) {
		width: 180px;
		font-size: 14px;
	}
`;

function TodoItem({id, done, text}) {
	const dispatch = useTodoDispatch();
	const [editToggle, setEditToggle] = useState(false);
	const [value, setValue] = useState(text);

	const onEditToggle = () => setEditToggle(!editToggle);
	const onChange = (e) => setValue(e.target.value);
	const onToggle = () => dispatch({type: "TOGGLE", id});
	const onRemove = () => dispatch({type: "REMOVE", id});
	const onEdit = () => dispatch({type: "EDIT", id, newText: value});

	const onCancleClick = () => {
		setEditToggle(false);
		setValue(text);
	};

	const onEditClick = () => {
		onEdit(id, value);
		setEditToggle(true);
	};

	return (
		<TodoItemBlock>
			<CheckBox done={done} onClick={onToggle}>
				{done && <MdDone />}
			</CheckBox>
			<Text done={done}>{editToggle ? <Input autoFocus value={value} onChange={onChange} /> : text}</Text>
			<Edit onClick={onEditToggle}>
				<MdEdit onClick={onEditClick} />
			</Edit>
			<Remove>{editToggle ? <MdCancel onClick={onCancleClick} /> : <MdDelete onClick={onRemove} />}</Remove>
		</TodoItemBlock>
	);
}

export default React.memo(TodoItem);
