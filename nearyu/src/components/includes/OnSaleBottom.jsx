import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const OnSaleBottom = () => {
    return (
        <section className="wrapper">
            <Bottom>
                <Ul>
                    <Li>
                        <img src={require("../../assets/images/i1.jpg")} alt="shirts" />
                        <Overlay>
                            <Order>
                                <LinkButton to="/">
                                    <Span>
                                        <img
                                            src={require("../../assets/images/whatsapp.png")} alt="whatsapp" />
                                    </Span>
                                    Order Now
                                </LinkButton>
                            </Order>
                        </Overlay>
                        <Paragraph>Allen Pants</Paragraph>
                        <Small>&#8377;599.00</Small>
                    </Li>
                    <Li>
                        <img src={require("../../assets/images/i1.jpg")} alt="shirts" />
                        <Overlay>
                            <Order>
                                <LinkButton to="/">
                                    <Span>
                                        <img
                                            src={require("../../assets/images/whatsapp.png")} alt="whatsapp" />
                                    </Span>
                                    Order Now
                                </LinkButton>
                            </Order>
                        </Overlay>
                        <Paragraph>Allen Pants</Paragraph>
                        <Small>&#8377;599.00</Small>
                    </Li>
                    <Li>
                        <img src={require("../../assets/images/i1.jpg")} alt="shirts" />
                        <Overlay>
                            <Order>
                                <LinkButton to="/">
                                    <Span>
                                        <img
                                            src={require("../../assets/images/whatsapp.png")} alt="whatsapp" />
                                    </Span>
                                    Order Now
                                </LinkButton>
                            </Order>
                        </Overlay>
                        <Paragraph>Allen Pants</Paragraph>
                        <Small>&#8377;599.00</Small>
                    </Li>
                    <Li>
                        <img src={require("../../assets/images/i1.jpg")} alt="shirts" />
                        <Overlay>
                            <Order>
                                <LinkButton to="/">
                                    <Span>
                                        <img
                                            src={require("../../assets/images/whatsapp.png")} alt="whatsapp" />
                                    </Span>
                                    Order Now
                                </LinkButton>
                            </Order>
                        </Overlay>
                        <Paragraph>Allen Pants</Paragraph>
                        <Small>&#8377;599.00</Small>
                    </Li>
                    <Li>
                        <img src={require("../../assets/images/i1.jpg")} alt="shirts" />
                        <Overlay>
                            <Order>
                                <LinkButton to="/">
                                    <Span>
                                        <img
                                            src={require("../../assets/images/whatsapp.png")} alt="whatsapp" />
                                    </Span>
                                    Order Now
                                </LinkButton>
                            </Order>
                        </Overlay>
                        <Paragraph>Allen Pants</Paragraph>
                        <Small>&#8377;599.00</Small>
                    </Li>
                    <Li>
                        <img src={require("../../assets/images/i1.jpg")} alt="shirts" />
                        <Overlay>
                            <Order>
                                <LinkButton to="/">
                                    <Span>
                                        <img
                                            src={require("../../assets/images/whatsapp.png")} alt="whatsapp" />
                                    </Span>
                                    Order Now
                                </LinkButton>
                            </Order>
                        </Overlay>
                        <Paragraph>Allen Pants</Paragraph>
                        <Small>&#8377;599.00</Small>
                    </Li>
                </Ul>
            </Bottom>
        </section>
    )
}

export default OnSaleBottom;

const Bottom = styled.div``;
const Ul = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
`;
const Li = styled.li`
    text-align: center;
    margin-bottom: 40px;
    position: relative;
    && img {
        box-shadow: 0px 20px 36px -9px rgb(218, 218, 218);
        display: block;
        width: 100%;
    }
`;
const Paragraph = styled.p`
    font-family: "product_sansregular";
    text-align: center;
    font-size: 26px;
    color: #15232e;
    margin-top: 20px;
`;
const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 85%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    opacity: 0;
    transition: 0.5s ease;
`;
const Order = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    width: 90%;
`;
const LinkButton = styled(Link)`
    display: flex;
    align-items: center;
    font-family: "product_sansregular";
    font-size: 22px;
    color: #fff;
    background-color: #4caf50;
    padding: 20px 10px;
    border-radius: 30px;
    text-align: center;
`;
const Span = styled.span`
    display: inline-block;
    width: 25px;
    height: 25px;
    margin-right: 75px;
    margin-left: 20px;
    && img {
        display: block;
	    width: 100%;
    }
`;
const Small = styled.small`
    font-family: "product_sansbold";
    font-size: 25px;
    color: #4caf50;
`;