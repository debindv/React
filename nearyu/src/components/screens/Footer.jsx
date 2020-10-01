import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <Foot>
			<Top>
				<Left>
					<LinkLogo path="#"><img src={logo} alt="logo"/></LinkLogo>
					<Paraone>
						Lorem ipsum, dolor sit, amet consectetur adipisicing
						elit. Quis quae iure qui error nisi nam, fugiat quo hic
						in dolores suscipit ab fugit praesentium, quibusdam
						illum? Voluptas laudantium vel similique.
					</Paraone>
				</Left>
				<Right>
					<Ul>
						<Li>
							<Heading6>Quick Links</Heading6>
							<LinkRight path="/"><ParaRight>Home</ParaRight></LinkRight><br />
							<LinkRight path="/"><ParaRight>About Us</ParaRight></LinkRight><br />
							<LinkRight path="/"><ParaRight>Services</ParaRight></LinkRight><br />
							<LinkRight path="/"><ParaRight>Contact Us</ParaRight></LinkRight><br />
						</Li>
						<Li>
							<Heading6>Terms of Service</Heading6>
							<LinkRight path="/"><ParaRight>Privacy Policy</ParaRight></LinkRight><br />
							<LinkRight path="/"><ParaRight>Terms of Service</ParaRight></LinkRight><br />
							<LinkRight path="/"><ParaRight>Refund Policy</ParaRight></LinkRight><br />
							<LinkRight path="/"><ParaRight>Shipping Policy</ParaRight></LinkRight><br />
						</Li>
						<Li>
							<Heading6>Contact Us</Heading6>
							<ParaRight>
								If you have any questions or need help, feel
								free to contact with our team
							</ParaRight>
							<Link path="mailto:sample@gmail.com">
                                <ParaRight>
									<Fafa className="fa fa-envelope" aria-hidden="true"></Fafa>sample@gmail.com
								</ParaRight>
                            </Link>
                            <br />
							<Link path="">
                                <ParaRight>
									<Fafa
										className="fa fa-phone"
										aria-hidden="true"
									></Fafa>Office: +919836749832
								</ParaRight>
                            </Link>
                            <br />
						</Li>
					</Ul>
				</Right>
			</Top>
			<Bottom>
				<Small>&copy; 2020 Natural Near Yu All right Reserved</Small>
			</Bottom>
		</Foot>
    )
}

export default Footer;

const Foot = styled.footer`
    padding: 120px 120px 0px 120px;
    background-color: #2c2c2c;
`;
const Top = styled.div`
    display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 50px;
`;

const Left = styled.div`
    width: 32.5%;
`;
const LinkLogo = styled(Link)`
    display: inline-block;
    margin-bottom: 30px;
    && img {
        display: block;
	    width: 100%;
    }
    && p {
        font-family: "product_sansregular";
        font-size: 19px;
        color: #5f5f5f;
    }
`;
const Paraone = styled.p`
    font-family: "product_sansregular";
	font-size: 19px;
	color: #5f5f5f;
`;
const Right = styled.div`
    width: 63%;
`;
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
`;
const Li = styled.li`
    margin-right: 20px;
	width: 33%;
`;

const Heading6 = styled.h6`
    font-family: "product_sansbold";
	font-size: 35px;
	color: #5f5f5f;
	margin-bottom: 40px;
`;
const LinkRight = styled.div`
    display: inline-block;
`;
const ParaRight = styled.p`
    font-family: "product_sansregular";
    font-size: 25px;
    color: #8e8e8e;
    margin-bottom: 30px;
`;

const Bottom = styled.div`
    border-top: 1px solid #8e8e8e;
	text-align: center;
	padding: 50px 0;
`;
const Small = styled.div`
    font-family: "product_sansregular";
	font-size: 18px;
	color: #868e8e;
`;
const Fafa = styled.i`
    margin-right: 30px;
	font-size: 30px;
`;