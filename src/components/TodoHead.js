import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
	padding: 32px;
	border-bottom: 1px solid #96a3fc;
	header {
		display: block;
		text-align: center;
		letter-spacing: 5px;
	}
	.day {
		font-size: 26px;
		font-weight: bold;
		color: #7080ff;
		display: inline-block;
	}
	.month {
		padding-top: 15px;
		padding-left: 15px;
		color: #96a3fc;
		font-size: 20px;
		display: inline-block;
	}
`;

function TodoHead() {
	return (
		<TodoHeadBlock>
			<header>
				<div className="day">Tuesday, </div>
				<div className="month"> January 10th</div>
			</header>
		</TodoHeadBlock>
	);
}

export default TodoHead;
