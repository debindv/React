import React from 'react';
import styled from 'styled-components';

const AuthLeft = () => {
    return (
        <Left>
            <img src={require("../../assets/images/logo.png")} alt="Logo" />
        </Left>
    )
}
export default AuthLeft;

const Left = styled.div`
    width: 45%;
    background-color: #4caf50;
    display: flex;
	align-items: center;
	&& img { 
		display: block;
		margin: 0 auto;
		width: 70%;
	}
`;