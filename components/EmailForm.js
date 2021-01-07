import React,{useState} from 'react';
import {Button, Col, Input, Row} from "antd";
import {db} from '../firebase';


const EmailForm=()=>{
    const [email,setEmail]=useState("");
    let now =new Date()
    const handleSubmit =(e)=>{
        e.preventDefault();
        db.collection('contacts')
            .add({
                email: email,
                time: now
            })
            .then(()=>{
                alert("Email has been submitted");
            })
            .catch((error)=>{
                alert(error.message);
            })
        setEmail("");
    }

    return(
        <>
            <Col>
                <Input
                    placeholder="Email"
                    style={{marginRight:'1vh',width:'75%'}}
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <Button type="primary" onClick={handleSubmit}>등록</Button>
            </Col>
        </>
    );
}

export default EmailForm;