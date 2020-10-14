import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import '../../App.css';
import NameCard from '../includes/NameCard';
import Data from '../includes/StudentData';

const Main = () => {
    const [search,setSearch] = useState("");
    const [searchResult, setSearchResult] = useState(Data);
    useEffect(() => {
        setSearchResult(
            Data.filter((student)=> 
                student.name.toLowerCase().includes(search.toLowerCase()) ||
                student.mail.toLowerCase().includes(search.toLowerCase())
            )
        )
    },[search]);
    return(
        <DivMain>
            <section className="wrapper">
                <Student>
                    <Heading6>Students</Heading6>
                    <Form action="">
                        <FormImage src={require("../../assets/images/search.png")} alt="search" />
                        <Input type="text" name="search" placeholder="Search..." onChange={(e) => {setSearch(e.target.value)}}/>
                    </Form>
                </Student>
                <Ul>
                    
                        {searchResult.map((item) => {
                            return(
                                <Li><NameCard student={item}/></Li>
                            )
                        })}
                </Ul>
            </section>
        </DivMain>
    );
}

export default Main;

const DivMain = styled.div`
    background: #1F2935;
    width: 76%;
    padding-bottom: 16px;
    position: relative;
    left: 350px;
    min-height: 100vh;
    top: 115px;
    z-index: 0; 
    @media all and (max-width: 1280px) {

    }
    @media all and (max-width: 980px) {
        
    }
    @media all and (max-width: 768px) {
		left: 245px;
        top: 90px;
    }
    @media all and (max-width: 640px) {
        left: 95px;
    }
    @media all and (max-width: 480px) {

    }
    @media all and (max-width: 360px) {

    }
    @media all and (max-width: 320px) {
        
    } 
`;

const Student = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
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
const Heading6 = styled.h6`
    color: #fff;
    font-family: 'baloo_paaji_2bold';
    font-size: 18px;
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
const Form = styled.form`
    background: #15232E;
    width: 12rem;
    padding: .61rem 0.6rem;
    border-radius: 10px;
    position: relative;
    color: #fff;
    @media all and (max-width: 1280px) {

    }
    @media all and (max-width: 980px) {
        
    }
    @media all and (max-width: 768px) {
		
    }
    @media all and (max-width: 640px) {
        width: 0;
    	padding: 0; 
    }
    @media all and (max-width: 480px) {

    }
    @media all and (max-width: 360px) {

    }
    @media all and (max-width: 320px) {
        
    }
`;
const FormImage = styled.img`
    display: block;
    position: absolute;
    left: 17px;
    bottom: 16px;
    @media all and (max-width: 1280px) {

    }
    @media all and (max-width: 980px) {
        
    }
    @media all and (max-width: 768px) {
		
    }
    @media all and (max-width: 640px) {
        left: 0;
    	bottom: 5px;
    }
    @media all and (max-width: 480px) {
        left: -35px;
    }
    @media all and (max-width: 360px) {

    }
    @media all and (max-width: 320px) {
        
    }
   
`;
const Input = styled.input`
    font-family: 'baloo_paaji_2bold';
    font-size: 16px;
    margin: 0 auto;
    color: #fff;
    background: #15232E;
    width: 80%;
    margin-left: 1.9rem;
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
const Ul = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;  
    grid-gap: 20px;
    @media all and (max-width: 1280px) {
        grid-template-columns: 1fr 1fr;
    }
    @media all and (max-width: 980px) {
        grid-template-columns: 1fr;
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
const Li = styled.li`
    background: #15232E;
    padding: 20px;
    height: 385px;
    @media all and (max-width: 1280px) {

    }
    @media all and (max-width: 980px) {
        
    }
    @media all and (max-width: 768px) {
		
    }
    @media all and (max-width: 640px) {
        height: auto;
    }
    @media all and (max-width: 480px) {

    }
    @media all and (max-width: 360px) {

    }
    @media all and (max-width: 320px) {
        
    }
`;