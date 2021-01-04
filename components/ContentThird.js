import React from "react";
import styled from 'styled-components';
import {Button, Col, Input, Row} from "antd";

const StyledDiv=styled.div`
  border-top: 1px solid grey;
  margin: 3vh;
  text-align:center;
`;



const Contents=() =>{
    return(
        <StyledDiv>
                <h1>리에이블과 함께<br/>일회용품을 줄여봐요!</h1>
                <h1>이메일을 적어주시면<br/>리에이블 서비스에 관한 알림을 보내드립니다.</h1>
                <Input placeholder="Email" style={{marginRight:'1vh',width:'45%'}} />
                <Button type="primary">등록</Button>
        </StyledDiv>
    );
}

export default Contents;