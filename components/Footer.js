import React from 'react';
import {Row,Col,Input,Button} from 'antd';
import styled from 'styled-components';

const ContentStyle = styled.div`
  background-color: gray;
  text-align: center;
  color: #fff;
  width: auto;
  height: 10vh;
`;

const Main=()=>{
    return (
        <div>
            <ContentStyle>
                대표번호 | 010-1111-1111<br/>
                이메일 | email@email.com<br/>
                주소 |숭실대학교 창신관 311호<br/>
            </ContentStyle>
        </div>
    );
}

export default Main;