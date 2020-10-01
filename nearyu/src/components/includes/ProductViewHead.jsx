import React from 'react';
import styled from 'styled-components';

const ProductViewHead = () => {
    return (
        <Top>
            <Heading3>Product View</Heading3>
        </Top>
    )
}

export default ProductViewHead;

const Top = styled.div`
    width: 100%;
    background: #fff;
    box-shadow: 0px 20px 36px -9px rgb(218, 218, 218);
    padding: 30px 0 30px 30px;
`;
const Heading3 = styled.h3`
    font-family: "product_sansregular";
    font-size: 21px;
    color: #535353;
    font-weight: bold;
`;