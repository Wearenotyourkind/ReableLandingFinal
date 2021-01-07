import React from "react";
import styled from 'styled-components';
import {Col, Row} from "antd";

const StyledDiv=styled.div`
  border-top: 1px solid grey;
  margin: 3vh;
  font-size: 1.5rem;
`;

const StyledImg =styled.img`
  width:90%;
  height: auto;
`;


const ContentSecond=() =>{
    return(
        <StyledDiv>
            <Row>
                <Col xs={24} md={10} style={{whiteSpace:'nowrap', margin:'10vh 3vh 3vh 3vh'}}>
                    <StyledImg src ="../img/main1.jpg"/>
                </Col>
                <Col xs={24} md={8} style={{margin:'10vh 3vh 3vh 3vh'}}>
                    <h1>환경을 버리는 일회용컵 BYE!</h1>
                    <h1>환경을 살리는 다회용컵 HELLO!</h1>
                    <h3>리에이블 서비스는 <br/>다회용컵 순환 시스템으로 <br/> 일회용컵 사용을<br/>줄이고자 합니다.</h3>
                </Col>
            </Row>
        </StyledDiv>
    );
}

export default ContentSecond;