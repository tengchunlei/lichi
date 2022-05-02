import styled from "styled-components";
import React from "react";
import {Link} from "react-router-dom";
require('icons/money.svg');
require('icons/chart.svg');
require('icons/tag.svg');

const NavWrapper=styled.div`
line-height: 24px;
  box-shadow:0 0 3px rgba(0,0,0,0.25) ;
> ul{
  border:1px solid red; 
  display:flex;
  > li{
    width:33.333%;
    text-align: center;
    padding:4px 0 ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon{
      width: 24px;
      height:24px ;
      
    }
  }
}
`;

const Nav = ()=>{
    return(
        <NavWrapper>
            <ul>
                <li>
                   <svg  className="icon">
                       <use xlinkHref="#tag"/>
                   </svg>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <svg  className="icon">
                        <use xlinkHref="#money"/>
                    </svg>
                    <Link to="/money">记账页</Link>
                </li>
                <li>
                    <svg  className="icon">
                        <use xlinkHref="#chart"/>
                    </svg>
                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </NavWrapper>

    );

}

export default Nav;