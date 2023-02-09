import React, {useState} from "react";
import styled from "styled-components";
import {MdCancel} from "react-icons/md";
import {useTodoDispatch, useTodoDataId, useTodoState} from "../TodoContext";

const Input = styled.input`
	border-radius: 4px;
	border: 1px solid #dee2e6;
	width: 400px;
	height: 45px;
	outline: none;
	font-size: 18px;
	box-sizing: border-box;
	padding-left: 10px;
	color: #7080ff;
`;
const TodoFooterBlock = styled.div`
	padding: 30px;
	border-top: 1px solid #96a3fc;
	footer {
		display: flex;
		letter-spacing: 3px;
	}
	.tasks-left {
		color: #96a3fc;
		font-size: 18px;
	}
	.add {
		color: #7080ff;
		font-size: 18px;
		font-weight: bold;
		right: 30px;
		position: absolute;
		cursor: pointer;
		&:hover {
			color: #96a3fc;
			opacity: 0.5;
			transition: 0.5s;
		}
	}
`;

function TodoCreate() {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");

	const onToggle = () => setOpen(!open);
	const onChange = (e) => setValue(e.target.value);
	const onSubmit = (e) => {
		e.preventDefault(); // 새로고침 방지
		dispatch({
			type: "CREATE",
			todo: {
				id: dataId.current,
				text: value,
				done: false,
			},
		});
		setValue("");
		setOpen(false);
		dataId.current += 1;
	};

	const todos = useTodoState();
	const undoneTasks = todos.filter((todo) => !todo.done);

	const dispatch = useTodoDispatch();
	const dataId = useTodoDataId();

	return (
		<>
			<TodoFooterBlock>
				<footer>
					<div className="tasks-left" open={open}>
						{open ? (
							<form onSubmit={onSubmit}>
								<Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" onChange={onChange} value={value} />
							</form>
						) : (
							`TASK ${undoneTasks.length}`
						)}
					</div>
					<div className="add" onClick={onToggle} open={open}>
						{open ? <MdCancel size={40} onClick={() => setValue("")} /> : "ADD NEW +"}
					</div>
				</footer>
			</TodoFooterBlock>
		</>
	);
}

export default React.memo(TodoCreate);
