import styled,{css, keyframes} from 'styled-components';
import Link from 'next/link'
import React,{useState, useEffect } from 'react';
import {Menu} from "antd";

const fadeIn = keyframes`
  0%{
    background-color: rgba(0, 0, 0, 0);
  }
  100% {
    background-color: #b3d1ff;
  }
`;

const Nav=()=>{
    const [show, setShow]=useState(true);
    const [opacity, setOpacity]= useState(1);


    const Navigation = styled(Menu)`
      background-color: rgba(0, 0, 0, 0);
      position: fixed;
      top:0;
      width:100%;
      z-index: 1;
      border: none;
      font-size:2.5rem;
      height:8vh;
      display: flex;
      
      ${!show && css`
        background-color: #b3d1ff;
        animation-duration: 0.5s;
        animation-name: ${fadeIn};
      `};
    `;




    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY<100){
                setShow(true);
                setOpacity(1);
            }else{
                setShow(false);
                setOpacity(0.2);
            }
        })
        return ()=>{
            window.removeEventListener("scroll",null);
        }
    },[]);

    return(
        <>

            <Navigation mode="horizontal">
                <Navigation.Item>
                    {show ?
                        <Link href="/"><a>Reable</a></Link>: <Link href="/"><a>리에이블</a></Link>
                    }
                </Navigation.Item>
            </Navigation>

        </>
    )
}
export default Nav;