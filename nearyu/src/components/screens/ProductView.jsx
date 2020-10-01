import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProductViewHead from "../includes/ProductViewHead";
import ProductViewButtons from "../includes/ProductViewButtons";

const ProductView = () => {
    return (
        <>
        <View>
            <section className="wrapper">
                <ProductViewHead />
                <Bottom>
                    <Left>
                        <img src={require("../../assets/images/i9.png")} alt="tomatoes" />
                    </Left>
                    <Right>
                        <Topper>
                            <TopLeft>
                                <Heading4>Brussel Sprouts</Heading4>
                                <Heading5>Posuere Maucenas</Heading5>
                                <Heading6>&#8377;300.00<span>&#8377;300.00</span><small>56%off</small></Heading6> 
                            </TopLeft>
                            <TopRight>
                                <LinkLove to="/"><img src={require("../../assets/images/share.png")} alt="share" /></LinkLove>
                                <LinkLove to="/"><img src={require("../../assets/images/love.png")} alt="love" /></LinkLove>
                            </TopRight>
                        </Topper>
                        <Middle>
                            <MiddleH4>Quantity <Less to="/">-</Less><span>1</span><Add to="/">+</Add></MiddleH4>
                            <MiddleH5>Available Offers</MiddleH5>
                            <Offer>
                                <img src={require("../../assets/images/tag.png")} alt="label" />
                                <small>5% Unlimited Cashback on Axix Bank credit card</small>
                            </Offer>
                            <Offer>
                                <img src={require("../../assets/images/tag.png")} alt="label" />
                                <small>10% off* on Axix Bank Buzz credit card</small>
                            </Offer>
                        </Middle>
                        <Under>
                            <ProductViewButtons />
                        </Under>
                    </Right>
                </Bottom>
            </section>
        </View>
        {/* <Footer /> */}
        </>
    )
}

export default ProductView;

const View = styled.div`
    background: url(../assets/images/circle.png) no-repeat;
	background-position-x: initial;
	padding: 100px 0;
`;

const Bottom = styled.div`
    display: flex;
	align-items: flex-start;
	margin-top: 50px;
	border-bottom: 1px solid #c1c1c1;
	padding-bottom: 70px;
`;
const Left = styled.div`
    width: 30%;
    && img {
        display: block;
	    width: 100%;
    }
`;
const Right = styled.div`
    margin-left: 40px;
	width: 70%;
`;
const Topper = styled.div`
    display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding-bottom: 20px;
	border-bottom: 1px solid #c1c1c1;
`;
const TopLeft = styled.div`
    width: 100%;
`;
const Heading4 = styled.h4`
    font-family: "product_sansregular";
	font-size: 21px;
	color: #535353;
	margin-bottom: 10px;
`;
const Heading5 = styled.h5`
    font-family: "product_sansregular";
    font-size: 19px;
    color: #c1c1c1;
    margin-bottom: 10px;
`;
const Heading6 = styled.h6`
    font-family: "product_sansregular";
    font-size: 20px;
    color: #000;
    font-weight: bold;
    && span {
        font-family: "product_sansregular";
        font-size: 14px;
        color: #c1c1c1;
        text-decoration: line-through;
        margin: 0 20px;
    }
    && small {
        font-weight: bold;
	    color: #4caf50;
    }
`;
const TopRight = styled.div`
    display: flex;
`;
const LinkLove = styled(Link)`
    display: inline-block;
    width: 20px;
    &&:first-child {
        margin-right: 20px;
    }
    && img {
        display: inline-block;
	    width: 100%;
    }
`;
const Middle = styled.div`
    padding: 20px 0;
	border-bottom: 1px solid #c1c1c1;
`;
const MiddleH4 = styled.h4`
    font-family: "product_sansregular";
	font-size: 18px;
	color: #000;
	font-weight: bold;
    margin-bottom: 30px;
    && span {
        font-family: "product_sansregular";
        font-size: 18px;
        font-weight: bold;
        color: #939393;
    }
`;
const MiddleH5 = styled.h5`
    font-family: "product_sansbold";
	font-size: 16px;
	color: #000;
	font-weight: bold;
	margin-bottom: 10px;
`;
const Less = styled(Link)`
    font-family: "product_sansregular";
    display: inline-block;
    font-size: 16px;
    padding: 3px 8px;
    background-color: #ebebeb;
    color: #757575;
    margin-right: 15px;
	margin-left: 30px;
`;
const Add = styled(Link)`
    font-family: "product_sansregular";
    display: inline-block;
    font-size: 16px;
    padding: 3px 8px;
    background-color: #ebebeb;
    color: #757575;
    margin-right: 10px;
    margin-left: 15px;
`;
const Offer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    && img {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
    && small {
        font-family: "product_sansregular";
        font-size: 15px;
        color: #bfbfbf;
    }
`;
const Under = styled.div``;
