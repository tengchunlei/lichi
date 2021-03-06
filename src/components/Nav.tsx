import styled from "styled-components";
import React from "react";
import {Link, NavLink} from "react-router-dom";
import Icon from "./Icon";

const NavWrapper=styled.div`
  background: #ffffff;
line-height: 24px;
  box-shadow:0 0 3px rgba(0,0,0,0.25) ;
> ul{
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
      &.selected{
        color:rgb(255, 218, 68);
        .icon{
          fill: rgb(255, 218, 68);
        }
        
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
                    <NavLink to="/money" activeClassName="selected">
                        <Icon name="money"/>
                        来记一笔
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/tags"  activeClassName="selected">
                        <Icon name="tag"/>
                        收支类别
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/statistics"activeClassName="selected">
                        <Icon name="chart"/>
                        历史明细
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>

    );

}

export default Nav;