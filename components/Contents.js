import React from "react";
import styled from 'styled-components';
import {Col, Row} from "antd";

const StyledDiv=styled.div`
  border-top: 1px solid grey;
  margin: 3vh;
  font-size:1.5rem;
`;

const StyledImg =styled.img`
  width:90%;
  height: auto;
`;


const Contents=() =>{
    return(
        <StyledDiv>
            <Row>
                <Col xs={24} md={12} style={{margin:'10vh 3vh 3vh 3vh'}}>
                    <h1>다회용컵 서비스는<br/>순환시스템으로<br/>운영됩니다.</h1>
                </Col>
                <Col xs={24} md={10} style={{whiteSpace:'nowrap', margin:'10vh 3vh 3vh 3vh'}}>
                    <StyledImg src ="../img/main1.jpg"/>
                </Col>
            </Row>
        </StyledDiv>
    );
}

export default Contents;