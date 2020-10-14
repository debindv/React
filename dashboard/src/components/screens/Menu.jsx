import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Rectangle from '../../assets/images/rectangle.png';

const Menu = () => {
    return (
        <SideMenu>
            <UlList>
                <Li className="active"><Linked><Image src={require("../../assets/images/dashboard.png")} alt="dashboard" /><Span>Dashboard</Span></Linked></Li>
                <Li className=""><Linked><Image src={require("../../assets/images/tickets.png")} alt="tickets" /><Span>Tickets</Span></Linked></Li>
                <Li className=""><Linked><Image src={require("../../assets/images/support.png")} alt="support" /><Span>Support</Span></Linked></Li>
                <Li className=""><Linked><Image src={require("../../assets/images/claim.png")} alt="claim" /><Span>Claim</Span></Linked></Li>
                <Li className=""><Linked><Image src={require("../../assets/images/report.png")} alt="report" /><Span>Report</Span></Linked></Li>
                <Li className=""><Linked><Image src={require("../../assets/images/jobdesk.png")} alt="jobdesk" /><Span>Jobdesk</Span></Linked></Li>
                <Li className=""><Linked to="/students/"><Image src={require("../../assets/images/mystudents.png")} alt="mystudents" /><Span>My Students</Span > </Linked></Li>
            </UlList>
		</SideMenu>
    );
}

export default Menu;

const SideMenu = styled.section`
    background: #1F2935;
    width: 20.2rem;
    position: fixed;
    z-index: 99;
    top: 84px;
    height: 87%;
    @media all and (max-width: 1280px) {

    }
    @media all and (max-width: 980px) {
        
    }
    @media all and (max-width: 768px) {
		width: 227px;
		top: 68px;
    }
    @media all and (max-width: 640px) {
        width: 74px;
    }
    @media all and (max-width: 480px) {
        top: 50px;
    }
    @media all and (max-width: 360px) {

    }
    @media all and (max-width: 320px) {
        
    }
`;
const UlList = styled.ul`
`;
const Li = styled.li`
    height: 44px;
    padding: 20px 10px 0px 30px;	
    align-items: center;
    &&:hover {
        background: url(${Rectangle})no-repeat;
        background-color: #15232E; 
        background-position: left;
    }
    @media all and (max-width: 1280px) {

    }
    @media all and (max-width: 980px) {
        
    }
    @media all and (max-width: 768px) {
		
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
const Linked = styled(Link)`
    display: inline-block;
    @media all and (max-width: 1280px) {

    }
    @media all and (max-width: 980px) {
        
    }
    @media all and (max-width: 768px) {
		
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
const Image = styled.img`
    display: inline-block;
    position: relative;
	height: 40%;
    top: 5px;
    @media all and (max-width: 1280px) {

    }
    @media all and (max-width: 980px) {
        
    }
    @media all and (max-width: 768px) {
		
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
const Span = styled.span`
    font-family: 'baloo_paaji_2bold';
    font-size: 18px;
    color: #fff;
    margin-left: 1.125rem;
    @media all and (max-width: 1280px) {

    }
    @media all and (max-width: 980px) {
        
    }
    @media all and (max-width: 768px) {
		
    }
    @media all and (max-width: 640px) {
        display: none;
    }
    @media all and (max-width: 480px) {

    }
    @media all and (max-width: 360px) {

    }
    @media all and (max-width: 320px) {
        
    }
`;