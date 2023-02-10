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
	@media screen and (max-width: 600px) {
		padding: 20px;
	}
`;

function TodoHead() {
	const today = new Date();
	const dateString = today.toLocaleDateString("EN", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
	const dayName = today.toLocaleDateString("EN", {weekday: "long"});
	return (
		<TodoHeadBlock>
			<header>
				<div className="day">{dayName}</div>
				<div className="month">{dateString}</div>
			</header>
		</TodoHeadBlock>
	);
}

export default TodoHead;
