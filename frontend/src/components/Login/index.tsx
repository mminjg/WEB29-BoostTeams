import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

import { Container, BtnContainer, Input, Button, LogoWrapper } from './style';
import { githubLogin } from '../../apis/auth';

const Logo: React.FC = () => {
	return (
		<LogoWrapper>
			<Link to='/'>
				<img src='logo.png' alt='logo' />
			</Link>
		</LogoWrapper>
	);
};

const Login: React.FC = () => {
	const githubLoginHandler = () => {
		githubLogin();
	};
	return (
		<Container>
			<Logo />
			<Input type='email' placeholder='아이디를 입력' />
			<Input type='password' placeholder='비밀번호를 입력' />
			<BtnContainer direction='column' gap='1rem'>
				<BtnContainer direction='row' gap='2rem'>
					<Button>
						<span>Login</span>
					</Button>
					<Button>
						<span>Signup</span>
					</Button>
				</BtnContainer>
				<Button onClick={githubLoginHandler}>
					<AiFillGithub />
					<span>Login with Github</span>
				</Button>
			</BtnContainer>
		</Container>
	);
};

export default Login;
