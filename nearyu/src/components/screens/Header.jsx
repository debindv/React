import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import styled from 'styled-components';
import '../../App.css';

const Header = () => {
    return (
        <section className="wrapper">
            <Head>
                <h1>
                    <LinkLogo to="/home"><Logo src={logo} alt="logo"/></LinkLogo>
                </h1>
                <Ul>
                    <Li>
                        <Form action="">
                            <Span
                                ><img src={require("../../assets/images/search.png")} alt="search"
                            /></Span>
                            <Input
                                type="text"
                                placeholder="Search here what you need"
                            />
                        </Form>
                    </Li>
                    <Li className="other">
                        <LinkRight to="/productview" className="wishlist_button"><img src={require("../../assets/images/like.png")} alt="like" /></LinkRight>
                    </Li>
                    <Li className="other">
                        <LinkRight to="/productview" className="user_button"><img src={require("../../assets/images/person.png")} alt="person" /></LinkRight>
                    </Li>
                    <Li className="other">
                        <LinkRight to="/productview" className="cart_button"><img src={require("../../assets/images/cart.png")} alt="cart" /></LinkRight>
                    </Li>
                </Ul>
            </Head>
        </section>
    )
}

export default Header;

const Head = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 75px 0 60px;
`;
const LinkLogo = styled(Link)`
    display: inline-block;
	background-color: #4caf50;
	width: 65%;
`;
const Logo = styled.img`
    display: block;
    width: 100%;
`;
const Ul = styled.ul`
	display: flex;
	align-items: center;
    justify-content: space-between;
`;
const Li = styled.li`
    margin-right: 40px;
    &&:last-child {
        margin-right: 0;
    }
`;
const Form = styled.form`
    display: flex;
    align-items: center;
    width: 17rem;
    border: 2px solid #e9e9e9;
    padding: 15px 35px 12px 20px;
    border-radius: 35px;
    position: relative;
    color: #e9e9e9;
`;
const Input = styled.input`
    font-family: "product_sansregular";
    font-size: 16px;
    color: #000;
    width: 100%;
    margin-left: 16px;
`;
const Span = styled.span`
	display: inline-block;
    width: 20px;
    && img {
        display: inline-block;
	    width: 20px;
    }
`;
const LinkRight = styled(Link)`
    display: inline-block;
    width: 50%;
    && img {
        display: block;
	    width: 100%;
    }
`;
