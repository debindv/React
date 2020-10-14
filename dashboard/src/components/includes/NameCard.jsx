import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NameCard = ({student}) => {
    return(
        <>
            <Name>
                <Dp src={student.dp} alt="person" />
                <SpanName>{student.name}<PName>{student.profile}</PName></SpanName>
            </Name>
            <Contact>
                <SpanContact><ImageContact src={require("../../assets/images/messagesmall.png")} alt="message" />{student.mail}</SpanContact>
            </Contact>
            <Contact>
                <SpanContact><ImageContact src={require("../../assets/images/call.png")} alt="call" />{student.phone}</SpanContact>
            </Contact>
            <Heading3>Designations</Heading3>
            <Buttons>
                <First>
                    <LinkButton>{student.designations.first}</LinkButton>
                    <LinkButton>{student.designations.second}</LinkButton>
                </First>
                <Second>
                    <LinkButton1>
                        <i><ImageButton1 src={require("../../assets/images/messagesmall.png")} alt="message" /></i>
                        <SpanSecond>Message</SpanSecond>
                    </LinkButton1>
                    <LinkButton2>
                        <i><ImageButton2 src={require("../../assets/images/callblack.png")} alt="call" /></i>
                        <SpanSecond>Call</SpanSecond>
                    </LinkButton2>
                </Second>
            </Buttons>
        </>
    );
}

export default NameCard;

const Name = styled.div`
    display: flex;
    align-items: center;
    margin: 36px 0 45px 0px;
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
const Dp = styled.img`
    display: block;
    height: 65px;
    border-radius: 50%;
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
const SpanName = styled.span`
    margin-left: 20px;
    color: #fff;
    font-family: 'baloo_paaji_2bold';
    font-size: 21px;
    text-transform: capitalize; 
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
const PName = styled.p`
    color: #fff;
    font-family: 'baloo_paaji_2bold';
    font-size:14px;
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
const Contact = styled.div`
    margin-top: 10px;
    margin-left: 10px;
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
const SpanContact = styled.span`
    color: #fff;
    font-family: 'baloo_paaji_2bold';
    font-size: 17px;
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
const ImageContact = styled.img`
    margin-right: 15px;
    height: 12px;
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
const Heading3 = styled.h3`
    color: #fff;
    font-family: 'baloo_paaji_2bold';
    font-size: 16px;
    margin: 15px 0px 10px 0px;
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
const Buttons = styled.div``;
const First = styled.div`
    margin: 8px 0 20px 0;
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
const LinkButton = styled(Link)`
    background: #E6EEF2;
    padding: 7px 0;
    border-radius: 15px;
    color: #000;
    display: inline-block;
    width: 45%;
    text-align: center;
    margin-right: 10px;
    @media all and (max-width: 1280px) {

    }
    @media all and (max-width: 980px) {
        
    }
    @media all and (max-width: 768px) {
		
    }
    @media all and (max-width: 640px) {

    }
    @media all and (max-width: 480px) {
        width:100%;
        margin-bottom: 10px;
        margin-right: 0;
        &&:last-child {
            margin-bottom: 0;
        }
    }
    @media all and (max-width: 360px) {

    }
    @media all and (max-width: 320px) {
        
    }
`;
const Second = styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1280px) {

    }
    @media all and (max-width: 980px) {
        
    }
    @media all and (max-width: 768px) {
		
    }
    @media all and (max-width: 640px) {
        flex-wrap: wrap;
    }
    @media all and (max-width: 480px) {

    }
    @media all and (max-width: 360px) {

    }
    @media all and (max-width: 320px) {
        
    }
`;
const LinkButton1 = styled(Link)`
    border: 2px solid #fff;
    color: #fff;
    display: inline-block;
    padding: 10px 5px;
    margin-right: 5px;
    width: 45%;
    text-align: center;
    @media all and (max-width: 1280px) {
        padding: 10px;
    }
    @media all and (max-width: 980px) {
        
    }
    @media all and (max-width: 768px) {
		
    }
    @media all and (max-width: 640px) {
        width: 100%;
        margin-bottom: 15px;
    }
    @media all and (max-width: 480px) {

    }
    @media all and (max-width: 360px) {

    }
    @media all and (max-width: 320px) {
        
    }
`;
const ImageButton1 = styled.img`
    display: inline-block;
    height: 13px;
    margin-right: 8px;
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
const SpanSecond = styled.span`
    font-weight: bold;
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
const LinkButton2 = styled(Link)`
    color: #000;
    display: inline-block;
    padding: 13px 5px;
    background: #40C269;
    width: 45%;
    text-align: center;
    @media all and (max-width: 1280px) {
        
    }
    @media all and (max-width: 980px) {
        
    }
    @media all and (max-width: 768px) {
		
    }
    @media all and (max-width: 640px) {
        width: 100%;
    }
    @media all and (max-width: 480px) {

    }
    @media all and (max-width: 360px) {

    }
    @media all and (max-width: 320px) {
        
    }
`;
const ImageButton2 = styled.img`
    display: inline-block;
    height: 13px;
    margin-right: 8px;
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