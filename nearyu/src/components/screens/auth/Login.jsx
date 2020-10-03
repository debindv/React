import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
    return (
        <UserLogin>
            <Left>
                <img src={require("../../../assets/images/logo.png")} alt="Logo" />
            </Left>
            <Right>
                <Top>
                    <Heading3>Welcome back</Heading3>
                    <Paragraph>Login to your existing account</Paragraph>
                    <Form>
                        <SpanInput>
                            <Small>
                                <img
                                    src={require("../../../assets/images/Icon material-person-outline.png")}
                                    alt="User icon"/>
                                </Small>
                            <input
                                type="text"
                                placeholder="Email / Mobile Number"/>
                        </SpanInput>
                        <SpanInput>
                            <Small>
                                <img
                                    src={require("../../../assets/images/Icon material-lock-outline.png")}
                                    alt="Lock icon icon"/>
                            </Small>
                            <input
                                type="password"
                                placeholder="Password"
                            />
                            <ButtonShow>show</ButtonShow>
                        </SpanInput>
                    </Form>
                </Top>
                <Bottom>
                    <ButtonSubmit>
                        <LinkButtonGreen>
                            Login
                        </LinkButtonGreen>
                    </ButtonSubmit>
                    <Para2>OR</Para2>
                    <ButtonVerify>
                        <LinkButton>
                            Request OTP
                        </LinkButton>
                    </ButtonVerify>
                </Bottom>
                <SpanSignIn>
                    <LinkPara>
                        New to nearyu? Create an account
                    </LinkPara>
                </SpanSignIn>
            </Right>
        </UserLogin>
    )
}

export default Login;

const UserLogin = styled.section`
    position: fixed;
    // top: -1000px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: #fff;
    width: 70%;
    max-width: 800px;
    height: 600px;
    z-index: 8;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    transition: ease-in-out 0.5s;
    opacity: 1;
    overflow: hidden;
`;
const Left = styled.div`
    width: 45%;
	background-color: #4caf50;
	display: flex;
    align-items: center;
    & img {
        display: block;
        margin: 0 auto;
        width: 70%;
    }
`;
const  Right = styled.div`
    width: 55%;
    padding: 70px 50px 50px;
    box-sizing: border-box;
`;
const Heading3 = styled.h3`
    font-size: 24px;
	text-align: center;
	color: #777777;
	font-family: "product_sansbold";
`;
const Paragraph = styled.p`
    font-size: 13px;
    text-align: center;
    color: #777777;
    margin-bottom: 50px;
`;
const Top = styled.div`
    margin-bottom: 70px;
`;
const Form = styled.form`
   width: 100%; 
`;
const SpanInput = styled.span`
        display: flex;
        align-items: center;
        border-bottom: 0.5px solid#e0e0e0;
        padding-bottom: 10px;
        margin-bottom: 40px;
        width: 100%;
        && input {
            flex: 1;
            color: #b4b3b3;
            font-family: "product_sansregular";
            font-size: 16px;
            margin-left: 15px;
        }
`;
const Small = styled.small`
    width: 15px;
    display: block;
    && img {
        width: 100%;
	    display: block;
    }
`;
const ButtonShow = styled.button`
    color: #4caf50;
	font-family: "product_sansBold";
	cursor: pointer;
`;
const Bottom = styled.div``;
const ButtonSubmit = styled.button`
    width: 100%;
`;
const LinkButtonGreen = styled(Link)`
    display: inline-block;
    width: 100%;
    padding: 20px 0;
    background-color: #4caf50;
    color: #ffffff;
    margin-bottom: 20px;
    border-radius: 40px;
`;
const ButtonVerify = styled.button`
    width: 100%;
`;
const LinkButton = styled(Link)`
    width: 100%;
	text-align: center;
	display: block;
	padding: 20px 0;
    border-radius: 40px;
    border: 2px solid #4caf50;
	color: #4caf50;
	margin-top: 20px;
`;
const Para2 = styled.p`
    text-align: center;
	color: #979797;
`;
const SpanSignIn = styled.span`
    width: 100%;
	display: block;
	text-align: center;
	padding-top: 35px;
`;
const LinkPara = styled(Link)`
    display: block;
	font-size: 15px;
	color: #b4b3b3;
`;