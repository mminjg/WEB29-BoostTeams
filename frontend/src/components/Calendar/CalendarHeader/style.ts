import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 2.5rem;
	background-color: ${ColorCode.BACKGROUND1};
	padding: 0 0.8rem;
	box-sizing: border-box;
	border-bottom: solid 1px ${ColorCode.LINE2};
	svg {
		color: ${ColorCode.FONT2};
	}
`;

export const InfoContainer = styled.div`
	flex-shrink: 0;
	display: flex;
	align-items: center;
	font-size: 0.9rem;
	div {
		padding: 0 0.8rem;
	}
	svg {
		cursor: pointer;
		&:hover {
			color: ${ColorCode.HOVER};
		}
	}
`;

export const ButtonContainer = styled.div`
	flex-shrink: 0;
	display: flex;
	align-items: center;
	& > * {
		margin-left: 0.5rem;
	}
	button {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}
`;

export const TodayBtn = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
	span {
		padding-left: 0.3rem;
		font-size: 0.9rem;
	}
	&:hover {
		span,
		svg {
			color: ${ColorCode.HOVER};
		}
	}
`;

export const NewAppointmentBtn = styled.button`
	background-color: ${ColorCode.HOVER};
	color: ${ColorCode.WHITE};
	border-radius: 8px;
	padding: 0.3rem 0.5rem;
	border-color: transparent;
	svg {
		color: ${ColorCode.WHITE};
		padding-right: 0.2rem;
	}
	&:hover {
		background-color: ${ColorCode.PRIMARY1};
	}
`;

interface btnProps {
	focus: boolean;
}

export const ConvertBtnContainer = styled.div`
	display: flex;
	width: max-content;
	border-radius: 8px;
	border: 1px solid ${ColorCode.LINE2};
`;

export const ConvertBtn = styled.button<btnProps>`
	background-color: ${(props) => (props.focus ? `${ColorCode.PRIMARY1}` : 'transparent')};
	color: ${(props) => (props.focus ? `${ColorCode.WHITE}` : `${ColorCode.BLACK}`)};
	border: 1px solid transparent;
	border-radius: 8px;
	cursor: pointer;
	padding: 0.3rem 0.4rem;
	:hover {
		border: 1px solid ${ColorCode.PRIMARY1};
		opacity: 0.9;
	}
`;
