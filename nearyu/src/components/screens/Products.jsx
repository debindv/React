import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import { Link } from 'react-router-dom';
import OnSaleBottom from '../includes/OnSaleBottom';

const Products = () => {
    return (
        <Categories>
            <Wrapper>
                <LeftIndent>
                    <Aside>
                        <Top>
                            <Heading6>Categories</Heading6>
                            <Form action="">
                                <Item>
                                    <Input type="checkbox" name="shirts" />
                                    <Label for="shirts">Shirts</Label>
                                </Item>
                                <Item>
                                    <Input type="checkbox" name="tshirts" />
                                    <Label for="tshirts">T-Shirts</Label>
                                </Item>
                                <Item>
                                    <Input type="checkbox" name="kurthi" />
                                    <Label for="kurthi">Kurthi</Label>
                                </Item>
                                <Item>
                                    <Input type="checkbox" name="parda" />
                                    <Label for="parda">Parda</Label>
                                </Item>
                                <Item>
                                    <Input type="checkbox" name="churidar" />
                                    <Label for="churidar">Churidar</Label>
                                </Item>
                                <Item>
                                    <Input type="checkbox" name="pant" />
                                    <Label for="pant">Pant</Label>
                                </Item>
                                <Item>
                                    <Input type="checkbox" name="shall" />
                                    <Label for="shall">Shall</Label>
                                </Item>
                            </Form>
                        </Top>
                        <Middle>
                            <Heading6>Popular Tags</Heading6>
                            <Items>
                                <p>Cottens</p>
                                <p>Churidar</p>
                                <p>Shall</p>
                                <p>Parda</p>
                                <p>Pants</p>
                            </Items>	
                        </Middle>
                        <Bottom>
                            <Heading6>Price Range</Heading6>
                            <Span>Price: </Span><Small>&#8377;100 - &#8377;1000</Small>
                            <FromTo>
                                <FormFrom>
                                    <label for="from">From</label><br />
                                    <input type="text" name="from" placeholder="0.00" />
                                </FormFrom>
                                <FormTo>
                                    <label for="to">To</label><br />
                                    <input type="text" name="to" placeholder="0.00" />
                                </FormTo>
                                <LinkSearch to="/"><SpanSearch><i class="fa fa-search" aria-hidden="true"></i></SpanSearch></LinkSearch>
                            </FromTo>
                        </Bottom>
                    </Aside>
                </LeftIndent>
                <RightIndent>
                    <OnSaleBottom />
                </RightIndent>
            </Wrapper>
        </Categories>
    )
}

export default Products;

const Categories = styled.section`
    padding: 100px 0;
    background: url(../images/circle.png) no-repeat;
    background-position-x: initial;
`;
const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
	flex-wrap: wrap;
	width: 90%;
	margin: 0 auto;
	max-width: 1200px;
`;
const LeftIndent = styled.section`
    box-sizing: border-box;
    width: 20%;
`;
const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const Top = styled.div`
    border-color: #fff;
    box-shadow: 0px 20px 36px -9px rgb(218, 218, 218);
    width: 100%;
    padding: 30px;
`;
const Heading6 = styled.h6`
	font-family: "product_sansregular";
	font-size: 22px;
	color: #707070;
	font-weight: bold;
	text-transform: uppercase;
	margin-bottom: 30px;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
`;
const Item = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	&&:last-child {
		margin-bottom: 0;
	}
`;
const Input = styled.input`
	-webkit-appearance: none;
	background-color: #fff;
	border: 1px solid #cacece;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
	inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
	padding: 9px;
	border-radius: 3px;
	display: inline-block;
	position: relative;
	&&:checked {
		background-color: #4cb050;
		border: 1px solid #adb8c0;
		color: #fff;
	}
	&&:after {
		content: "\2714";
		font-size: 16px;
		position: absolute;
		top: 0px;
		left: 3px;
		color: #fff;
	}
`;
const Label = styled.div`
	font-family: "product_sansregular";
	font-size: 22px;
	color: #707070;
	margin-left: 10px;
`;
const Middle = styled.div`
	margin-top: 50px;
	border-color: #fff;
	box-shadow: 0px 20px 36px -9px rgb(218, 218, 218);
	width: 100%;
	padding: 30px;
`;
const Items = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	&& p {
		padding: 9px 32px 9px 10px;
		border-radius: 7px;
		background-color: #ececec;
		margin-bottom: 20px;
		margin-right: 10px;
		color: #8d8d8d;
		font-weight: bold;
	}
`;
const Bottom = styled.div`
	margin-top: 50px;
	border-color: #fff;
	box-shadow: 0px 20px 36px -9px rgb(218, 218, 218);
	width: 100%;
	padding: 30px;
`;
const Span = styled.span`
	font-family: "product_sansregular";
	font-size: 14px;
	color: #707070;
`;
const Small = styled.div`
	font-family: "product_sansregular";
	font-size: 15px;
	color: #707070;
	font-weight: bold;
	margin-left: 10px;
`;
const FromTo = styled.div`
	margin-top: 100px;
	display: flex;
	align-items: flex-end;
`;
const FormFrom = styled.form`
	margin-right: 10px;
	&& label {
		margin-bottom: 10px;
		font-family: "product_sansregular";
		font-size: 15px;
		color: #707070;
	}
	&& input {
		margin-top: 30px;
		border: 2px solid #d2d2d2;
		border-radius: 5px;
		padding: 10px;
		width: 65px;
	}
`;
const FormTo = styled.form`
	&& label {
		font-family: "product_sansregular";
		font-size: 15px;
		color: #707070;
	}
	&& input {
		margin-top: 30px;
		border: 2px solid #d2d2d2;
		border-radius: 5px;
		padding: 10px;
		width: 65px;
	}
`;
const LinkSearch = styled(Link)`
	display: inline-block;
	background-color: #707070;
	padding: 9px;
	margin-left: 10px;
`;
const SpanSearch = styled.span`
	&& i {
		color: #fff;
		font-size: 21px;
	}
`;
const RightIndent = styled.section`
	width: 70%;
`;
