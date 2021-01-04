import React from "react";
import Head from 'next/head';
import './style.css';
import 'antd/dist/antd.css';

const App=({Component})=>{
    return(
        <>
            <Head>
                <title>Reable</title>
            </Head>
            <Component />

        </>
    );
};

export default App;