import React from 'react';
import {Row,Col,Input,Button} from 'antd';
import styled from 'styled-components';

const ContentStyle = styled.div`
  background-color: #e6e6e6;
  background-size: contain;
  color: #fff;
  width: auto;
`;

const Main=()=>{
    return (
        <div>
                <ContentStyle>
                    <Row style={{display:'flex',justifyContent:'space-between'}}>
                        <Col xs={24} md={10} style={{whiteSpace:'nowrap', margin:'10vh 3vh 3vh 3vh'}}>
                            <Col>
                                <h1>Reable</h1>
                                <h3>
                                    환경을 살리는 다회용컵 서비스<br/>
                                    이메일을 적어주시면 리에이블 서비스에<br/>
                                    대한 알림을 보내드립니다.
                                </h3>
                            </Col>
                            <Col>
                                <Col style={{whiteSpace:'nowrap'}}>
                                    <Input placeholder="Email" style={{marginRight:'1vh',width:'75%'}} />
                                    <Button type="primary">등록</Button>
                                </Col>
                            </Col>
                            <Col>
                                <h5>
                                    이메일은 리에이블 서비스 알림을<br/>
                                    전송하는데에만 사용되며 제3자에게 제공되지않습니다
                                </h5>
                            </Col>
                        </Col>
                        <Col xs={24} md={8} style={{margin:'10vh 3vh 3vh 3vh'}}>
                            <img src="../img/main2.jpg" style={{width:'90%'}}/>
                        </Col>
                    </Row>
                </ContentStyle>
        </div>
    );
}

export default Main;