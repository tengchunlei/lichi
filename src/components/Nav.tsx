import styled from "styled-components";
import React from "react";
import {Link} from "react-router-dom";
import Icon from "./Icon";

const NavWrapper=styled.div`
line-height: 24px;
  box-shadow:0 0 3px rgba(0,0,0,0.25) ;
> ul{
  border:1px solid red; 
  display:flex;
  > li{  
    width:33.333%; 
    text-align: center;
    > a{
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
}
`;

const Nav = ()=>{
    return(
        <NavWrapper>
            <ul>
                <li>

                    <Link to="/tags">
                        <Icon name="tag"/>
                        标签页
                    </Link>
                </li>
                <li>
                    <Link to="/money">
                        <Icon name="money"/>
                        记账页
                    </Link>
                </li>
                <li>
                    <Link to="/statistics">
                        <Icon name="chart"/>
                        统计页
                    </Link>
                </li>
            </ul>
        </NavWrapper>

    );

}

export default Nav;