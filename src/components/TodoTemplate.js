import React from "react";
import styled from "styled-components";

const TodoTempleteBlock = styled.div`
	width: 512px;
	height: 768px;

	position: relative;
	background: white;
	box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.2);

	margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

	margin-top: 96px;
	margin-bottom: 32px;
	display: flex;
	flex-direction: column;
`;
function TodoTemplate({children}) {
	return <TodoTempleteBlock>{children}</TodoTempleteBlock>;
}

export default TodoTemplate;
