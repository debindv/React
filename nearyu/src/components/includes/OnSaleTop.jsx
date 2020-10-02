import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const OnSaleTop = () => {
    return (
        <Today>
            <Top>
                <Left>
                    <Heading2>On Sale <small>Today</small></Heading2>
                </Left>
                <Right>
                    <Ul>
                        <Li>
                            <LinkButton to="/">Fashion</LinkButton>
                        </Li>
                        <Li>
                            <LinkButton to="/">Gadgets</LinkButton>
                        </Li>
                        <Li>
                            <LinkButton to="/">Electronics</LinkButton>
                        </Li>
                        <Li>
                            <LinkButton to="/">Cosmetics</LinkButton>
                        </Li>
                    </Ul>
                </Right>
            </Top>
        </Today>
    )
}

export default OnSaleTop;

const Today = styled.section`
    padding-top: 100px;
`;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
`;
const Left = styled.div``;
const Heading2 = styled.h2`
    font-family: "product_sansbold";
    font-size: 50px;
    color: #4caf50;
    margin: 75px 0 45px;
    line-height: 60px;
    && small {
        font-family: "product_sansbold";
        font-size: 50px;
        color: #515151;
    }
`;
const Right = styled.div``;
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Li = styled.li`
    margin-right: 20px;
    &&:last-child {
        margin-right: 0;
    }
`;
const LinkButton = styled(Link)`
    display: inline-block;
    font-family: "product_sansbold";
    font-size: 25px;
    color: #15232e;
    &&:hover {
        text-decoration-line: underline;
        text-decoration-color: #4caf50;
        text-decoration-style: solid;
    }
`;