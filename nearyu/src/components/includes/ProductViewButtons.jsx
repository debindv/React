import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductViewButtons = () => {
    return (
        <Buttons>
            <Button1 path="/">Add to Cart</Button1>
            <Button2 path="/"><span><img src={require("../../assets/images/whatsapp.png")} alt="whatsapp" /></span>
                Order Now
                </Button2>
        </Buttons>
    )
}

export default ProductViewButtons;

const Buttons = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Button1 = styled(Link)`
    width: 40%;
    padding: 20px;
    border-radius: 35px;
    color: #4caf50;
    border: 3px solid #4caf50;
    display: inline-block;
    font-size: 17px;
    text-align: center;
`;
const Button2= styled(Link)`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "product_sansregular";
    font-size: 17px;
    color: #fff;
    background-color: #4caf50;
    padding: 20px;
    border-radius: 30px;
    text-align: center;
    && span {
        display: inline-block;
        width: 25px;
        height: 25px;
        margin-right: 10px;
        margin-left: 20px;
    }
    && img {
        display: inline-block;
	    width: 100%;
    }
`;