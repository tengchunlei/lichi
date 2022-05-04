import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";



const TagSection= styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  > ol{
    margin:0 -12px;
  > li{
    border:1px solid yellow;
    border-radius: 18px;
    background: #D9D9D9;
    display: inline-block;
    padding:3px 18px;
    font-size: 14px;
    margin:8px 12px;
  }
  }
  > button{
    background:none;
    border:none;
    border-bottom:1px solid #333;
    padding: 2px 4px;
    color:#666;
    margin-top:8px;
  }
  
`
const NoteSection= styled.section`
background:#f5f5f5;
  padding:10px 16px;
  font-size: 14px;
  
  > label{
    display:flex;
    align-items: center;
    > span {margin-right:16px;
    white-space: nowrap;
    }
    > input{
      display:block;
      width:100%;
      height:72px;
      background:none;
      border:none;
    }
    
  }
`

const CategorySection= styled.section`
   font-size: 24px;
   > ul{
     background:#c4c4c4 ;
     display: flex;
     > li{
       width: 50%;
       text-align: center;
       padding:16px 0;
       position: relative;
       &.selected::after{
         content:'';
         display: block;
         height:3px;
         background: #333;
         position:absolute;
         bottom:0;
         width:100%;
         left:0;
         
       }
     }
     
   }
`

const NumberPadSection= styled.section`
   display:flex;
   flex-direction: column;
  > .output{
    background: white;
    font-size: 36px;
    line-height:72px ;
    text-align: right;
    padding: 0 16px;
    box-shadow:inset 0 -5px 5px -5px rgba(0,0,0,0.25)
    ,inset 0 5px 5px -5px rgba(0,0,0,0.25);


  }
    > .pad{
      > button{
        font-size:18px;
        float:left;
        width: 25%;
        height:64px;
        border:none;
        &.ok{
          height:128px;
          float:right;
        }
        &.dot{
          width: 25%;
        }
        &.zero{
          width: 50%;
        }
        
        &:nth-child(1){
          background: #f2f2f2;
        }

        &:nth-child(2),
        &:nth-child(5){
          background: #E0E0E0;
        }

        &:nth-child(3),
        &:nth-child(6),
        &:nth-child(9){
        background:#D3D3D3;
      }

        &:nth-child(4),
        &:nth-child(7),
        &:nth-child(10){
        background: #C1C1C1;
      }

        &:nth-child(8),
        &:nth-child(11),
        &:nth-child(13){
        background:#B8B8B8;
      }

        &:nth-child(12){
        background:#9A9A9A ;
      }

        &:nth-child(14){
        background: ;#A9A9A9
      }
        
        
        
        
        
        
        
        
        
      }
    }
`


function Money() {
    return (
        <Layout>
 <TagSection>
     <ol>
         <li>衣</li>
         <li>食</li>
         <li>住</li>
         <li>行</li>
     </ol>
     <button>新增标签</button>
 </TagSection>
            <NoteSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="添加备注"/>

                </label>
            </NoteSection>

           <CategorySection>
               <ul>
                   <li className="selected">支出</li>
                   <li>收入</li>
               </ul>
           </CategorySection>

           <NumberPadSection>
               <div className="output">
               10000000
               </div>
               <div className="pad clearfix">
                   <button>1</button>
                   <button>2</button>
                   <button>3</button>
                   <button>删除</button>
                   <button>4</button>
                   <button>5</button>
                   <button>6</button>
                   <button>清空</button>
                   <button>7</button>
                   <button>8</button>
                   <button>9</button>
                   <button className="ok">OK</button>
                   <button className="zero">0</button>
                   <button className="dot">.</button>
               </div>
           </NumberPadSection>





        </Layout>
    );
}

export default Money ;