import React from "react";
import styled from "styled-components";

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
		flex: 1;
		width: 50%;
	}
	.add {
		color: #7080ff;
		font-size: 18px;
		font-weight: bold;
		flex: 1;
		width: 50%;
		text-align: right;
		cursor: pointer;
		&:hover {
			color: #96a3fc;
			opacity: 0.5;
			transition: 0.5s;
		}
	}
`;

function TodoFooter() {
	return (
		<TodoFooterBlock>
			<footer>
				<div className="tasks-left">TASKS 4</div>
				<div className="add">ADD NEW +</div>
			</footer>
		</TodoFooterBlock>
	);
}

export default TodoFooter;
