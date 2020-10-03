import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Verification = () => {
    return (
        <Verify>
            <Left>
                <img src={require("../../../assets/images/logo.png")} alt="Logo" />
            </Left>
            <Right>
                <Top>
                    <Heading3>Enter verification Code</Heading3>
                    <Paragraph>
                        We have send a 4 digit code to 927 346 7745
                    </Paragraph>
                    <Form>
                        <input
                            type="number"
                            maxlength="1"
                            placeholder="0"
                        />
                        <input
                            type="number"
                            maxlength="1"
                            placeholder="0"
                        />
                        <input
                            type="number"
                            maxlength="1"
                            placeholder="0"
                        />
                        <input
                            type="number"
                            maxlength="1"
                            placeholder="0"
                        />
                    </Form>
                </Top>
                <Bottom>
                    <Button>
                        <LinkButton to="/">Continue</LinkButton>
                    </Button>
                    <Para2>
                        Not received your code?
                        <LinkResend to= "/"> Resend code</LinkResend>
                    </Para2>
                </Bottom>
            </Right>
        </Verify> 
    )
}

export default Verification;

const Verify = styled.section`
    position: fixed;
	// top: -1000px;
	left: 0;
	right: 0;
	margin: 0 auto;
	background-color: #fff;
	width: 70%;
	max-width: 800px;
	height: 600px;
	z-index: 99;
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
    && img {
        display: block;
        margin: 0 auto;
        width: 70%;
    }
`;
const Right = styled.div`
    width: 55%;
	padding: 70px 50px 50px;
	box-sizing: border-box;
`;
const Top = styled.div``;
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
const Form = styled.form`
    display: flex;
	justify-content: space-between;
	width: 100%;
    margin-top: 50px;
    && input {
        -webkit-appearance: none;
        width: 23%;
        text-align: center;
        border-bottom: 2px solid #b4b3b3;
        height: 50px;
        color: #b4b3b3;
        font-size: 30px;
    }
`;
const Bottom = styled.div`
    margin-top: 80px;
`;
const Button = styled.button`
    width: 100%;
`;
const LinkButton = styled(Link)`
    text-align: center;
	display: block;
	padding: 20px 0;
	border-radius: 40px;
	background-color: #4caf50;
	color: #ffffff;
	margin-bottom: 20px;
`;
const Para2 = styled.p`
    text-align: center;
    font-size: 14px;
    color: #777777;
`;
const LinkResend = styled(Link)`
    color: #4caf50;
	font-family: "product_sansbold";
	display: inline-block;
`;