import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <Head>
			<Wrapper>
				<Left>
					<Heading1>
                        <LinkHome to="/">
                            <HeadImage src={require("../../assets/images/logo.png")} alt="logo" />
                        </LinkHome>
                    </Heading1>
					<LeftImage src={require("../../assets/images/lines.png")} alt="lines" />
					<Form action="">
						<FormImage src={require("../../assets/images/search.png")} alt="search" />
						<Input type="text" name="search" placeholder="Search..." />
					</Form>
				</Left>
				<Right>
					<Ul>
						<Li><LinkHome to="/"><Image src={require("../../assets/images/message.png")} alt="message" /></LinkHome></Li>
						<Li><LinkHome to="/"><Image src={require("../../assets/images/bell.png")} alt="bell" /></LinkHome></Li>
						<Li><LinkHome to="/"><Image src={require("../../assets/images/person1.png")} alt="person1" /></LinkHome></Li>
						<Li>Mark Anderson</Li>
						<Li><LinkHome to="/"><Image src={require("../../assets/images/downarrow.png")} alt="downarrow" /></LinkHome></Li>
					</Ul>
				</Right>
			</Wrapper>
		</Head>
    )
}

export default Header;

const Head = styled.header`
    
    background: #1F2935;
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index: 99;
    min-width: 1095px;
`;

const Left = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 45%;
    @media all and (max-width: 1280px) {
        width: 60%;
    }
    }
    @media all and (max-width: 980px) {
        width: 55%;
    }
    @media all and (max-width: 768px) {
		
    }
    @media all and (max-width: 640px) {

    }
    @media all and (max-width: 480px) {
        width: 25%;
    }
    @media all and (max-width: 360px) {

    }
    @media all and (max-width: 320px) {
        
    }
`;
const Heading1 = styled.h1`
    width: 7rem;
`;
const HeadImage = styled.img`
    display: block;
    width: 100%;
`;
const LeftImage = styled.img`
    display: block;
`;
const Form = styled.form`
    background: #15232E;
    width: 17rem;
    padding: .61rem 0.6rem;
    border-radius: 10px;
    position: relative;
    color: #fff;
    @media all and (max-width: 980px){
        width: 15rem;
    }
    @media all and (max-width: 480px){
        width: 0;
    	padding: 0;
    }
`;
const FormImage = styled.img`
    position: absolute;
    left: 17px;
    bottom: 16px;
    @media all and (max-width: 480px){
        position: static;
    	left: 0;
    	bottom: 0;
    	margin-right: 0;
    }
`;
const Input = styled.input`
    font-family: 'baloo_paaji_2bold';
    font-size: 16px;
    margin: 0 auto;
    color: #fff;
    background: #15232E;
    width: 80%;
    margin-left: 1.9rem;
    @media all and (max-width: 480px){
        display: none;
    }
`;
const LinkHome = styled(Link)`
    display: inline-block;
`;
const Image = styled.img`
    display: inline-block;
`;
const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: fit-content;
    width: 100%
    @media all and (max-width: 980px) {
        justify-content: flex-start;
    }
`;
const Li = styled.li`
    margin-right: 25px;
    color: #fff;
    font-family: 'baloo_paaji_2bold';
    font-size: 16px;
    &&:last-child {
        margin-right: 0px;
    }
    &&:nth-child(4) {
        margin-right: 5px;
    }
`;
const Right = styled.nav`
    width: 35%
    @media all and (max-width: 1280px) {

    }
    @media all and (max-width: 980px) {
        width: 45%;
    }
    @media all and (max-width: 768px) {
		display: none;
    }
    @media all and (max-width: 640px) {

    }
    @media all and (max-width: 480px) {

    }
    @media all and (max-width: 360px) {

    }
    @media all and (max-width: 320px) {
        
    }
`;
const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
	margin: 0 auto;
	max-width:1920px;
`;