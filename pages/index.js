import React from 'react';
import Nav from '../components/Nav'
import Main from "../components/Main";
import Contents from "../components/Contents";
import ContentSecond from "../components/ContentSecond";
import ContentThird from "../components/ContentThird";
import Footer from "../components/Footer";

const index=()=>{
    return(
        <div>
            <Nav/>
            <Main/>
            <ContentSecond/>
            <Contents/>
            <ContentThird/>
            <Footer/>
        </div>
    )
}

export default index;