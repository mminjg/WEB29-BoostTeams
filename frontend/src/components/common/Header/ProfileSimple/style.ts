import styled, { keyframes } from 'styled-components';
import { ColorCode } from '../../../../utils/constants';

const dropAnimation = keyframes`
	0% {
		opacity: 0;
		transform: translateY(-0.5rem);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

export const Wrapper = styled.div`
	position: absolute;
	top: 2rem;
	right: 2rem;
	display: flex;
	flex-direction: column;
	width: 22rem;
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
	background-color: ${ColorCode.WHITE};
	border-radius: 8px;
	z-index: 25;
	padding: 2rem 0rem 0rem 0rem;
	animation: ${dropAnimation} 0.5s ease-in-out 1;
`;

export const Container = styled.div`
	position: absolute;
	display: block;
	width: 100%;
`;

export const Background = styled.div`
	position: fixed;
	top: 3rem;
	left: 0;
	display: block;
	width: 100vw;
	height: calc(100vh - 3rem);
	z-index: 0;
`;
