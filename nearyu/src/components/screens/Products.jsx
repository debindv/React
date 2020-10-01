import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../App.css';

const Products = () => {
    return (
        <Top>
            <Ul className="owl-carousel owl-theme">
                <Li>
                    <LinkBanner path="/">
                        <Span>
                            <Image src={require("../../assets/images/computer.svg")} alt="computer" />
                        </Span>
                        <Small>Gadgets</Small>
                    </LinkBanner>
                </Li>
                <Li>
                    <LinkBanner path="/">
                        <Span>
                            <Image src={require("../../assets/images/computer.svg")} alt="computer" />
                        </Span>
                        <Small>Electronics</Small>
                    </LinkBanner>
                </Li>
                <Li>
                    <LinkBanner path="/">
                        <Span>
                            <Image src={require("../../assets/images/computer.svg")} alt="computer" />
                        </Span>
                        <Small>Groceries</Small>
                    </LinkBanner>
                </Li>
                <Li>
                    <LinkBanner path="/">
                        <Span>
                            <Image src={require("../../assets/images/computer.svg")} alt="computer" />
                        </Span>
                        <Small>Fashion</Small>
                    </LinkBanner>
                </Li>
                <Li>
                    <LinkBanner path="/">
                        <Span>
                            <Image src={require("../../assets/images/computer.svg")} alt="computer" />
                        </Span>
                        <Small>Backpack</Small>
                    </LinkBanner>
                </Li>
            </Ul>
            <Arrow>
                <LinkBanner path="/"><Round><Image src={require("../../assets/images/arrow.png")} alt="arrow"/></Round></LinkBanner>
                <LinkBanner path="/"><Round><RightArrow src={require("../../assets/images/arrow.png")} alt="arrow"/></Round></LinkBanner>
            </Arrow>
        </Top>
    )
}

export default Products;

const Top = styled.div`
`;
const Ul = styled.ul`
    display: flex;
	justify-content: space-around;
	align-items: center;
	height: 115px;
	box-shadow: 0px 20px 36px -9px rgb(218, 218, 218);
`;
const Li = styled.li`
    display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-around;
	border-right: 1px solid #e9e9e9;
`;

const LinkBanner = styled(Link)`
    display: inline-block;
`;

const Span = styled.span`
    width: 30px;
	height: 30px;
	border-radius: 50%;
	padding: 20px;
	display: inline-block;
	background: linear-gradient(45deg, #4cb050, #307563);
	box-shadow: 0px 20px 36px -9px rgb(218, 218, 218);
	margin-right: 30px;
`;
const Image = styled.img`
    display: inline-block;
	width: 100%;
`;
const Small = styled.small`
    font-family: "product_sansregular";
	font-size: 25px;
	color: #15232e;
`;
const Arrow = styled.div`
    display: flex;
	align-items: center;
	margin: 80px 120px 0 0;
	justify-content: flex-end;
`;
const Round = styled.span`
    padding: 20px;
	background-color: #fff;
	border-radius: 30px;
	display: inline-block;
	width: 25px;
	box-shadow: 0px 20px 36px -9px rgb(218, 218, 218);
	margin-right: 20px;
`;
const RightArrow = styled.img`
    display: block;
	width: 100%;
	transform: scaleX(-1);
`;