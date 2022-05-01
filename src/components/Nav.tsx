import styled from "styled-components";
import React from "react";
import {Link} from "react-router-dom";
import x from 'icons/money.svg';
const NavWrapper=styled.div`
line-height: 24px;
  box-shadow:0 0 3px rgba(0,0,0,0.25) ;
> ul{
  border:1px solid red; 
  display:flex;
  > li{
    width:33.333%;
    text-align: center;
    padding: 16px;
  }
}
`;

const Nav = ()=>{
    return(
        <NavWrapper>
            <ul>
                <li>
                    <img src={x} alt=""/>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <Link to="/money">记账页</Link>
                </li>
                <li>
                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </NavWrapper>

    );

}

export default Nav;