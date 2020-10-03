import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthMain from './AuthMain';

const SignUp = ({showSignUp}) => {
    return (
            <Right>
                <Heading3>Create Account</Heading3>
                <Top>
                    <Form>
                        <Span>
                            <img
                                src={require("../../../assets/images/Icon material-person-outline.png")}
                                alt="Person vector" />
                        </Span>
                        <input
                            type="text"
                            placeholder="Email/Mobile Number"
                        />
                    </Form>
                    <Small>
                        By continuing,your agree to NearYu's Terms
                        of Use and Privacy Policy.
                    </Small>
                </Top>
                <Bottom>
                    <ButtonSubmit>
                        <LinkContinue>
                            Continue
                        </LinkContinue>
                    </ButtonSubmit>
                    <Paragraph>OR</Paragraph>
                    <Button onClick={<AuthMain showSignUp={true} value="login" />}>
                        <LinkLogin>
                            Exiting User? Log in
                        </LinkLogin>
                    </Button>
                </Bottom>
            </Right>   
    )
}

export default SignUp;


const Right = styled.div`
	width: 55%;
	padding: 70px 50px 50px;
	box-sizing: border-box;
`;
const Heading3 = styled.h3`
	font-size: 24px;
	text-align: center;
	color: #777777;
	margin-bottom: 70px;
	font-family: "product_sansbold";
`;
const Top = styled.div`
	margin-bottom: 70px;
`;
const Form = styled.form`
	width: 100%;
	padding-bottom: 10px;
	border-bottom: 0.5px solid#e0e0e0;
	margin-bottom: 10px;
	&& input {
		color: #b4b3b3;
		font-family: "product_sansregular";
		font-size: 16px;
	}
`;
const Span = styled.span`
	width: 20px;
	display: inline-block;
	margin-right: 15px;
	&& img {
		width: 100%;
		display: block;
	}
`;
const Small = styled.small`
	font-size: 16px;
	font-family: "product_sansregular";
	color: #b4b3b3;
	line-height: 20px;
`;
const Bottom = styled.div``;
const ButtonSubmit = styled.button`
	width: 100%;
`;
const Button = styled.button`
    width: 100%;
    display: block;
`;
const LinkContinue = styled(Link)`
	display: inline-block;
	width: 100%;
	background-color: #4caf50;
	color: #ffffff;
	margin-bottom: 20px;
	padding: 20px 0;
	border: 2px solid #4caf50;
	border-radius: 40px;
`;
const LinkLogin = styled(Link)`
	width: 100%;
	text-align: center;
	display: inline-block;
	padding: 20px 0;
	border-radius: 40px;
	border: 2px solid #4caf50;
	color: #4caf50;
	margin-top: 20px;
`;
const Paragraph = styled.p`
	text-align: center;
	color: #979797;
`;