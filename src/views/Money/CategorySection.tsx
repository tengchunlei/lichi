import styled from "styled-components";
import React, {useState} from "react";
const Wrapper= styled.section`
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
;
const CategorySection:React.FC=()=>{
    const categoryMap={'-':'支出','+':'收入'}
    const [categoryList]=useState<('+'|'-')[]>(['-','+']);
    const[category,setCategory]=useState('-')// -表示支出
    return(
        <Wrapper>
            <ul>
                {categoryList.map(c=>
                    <li key={c}
                        className={category ===c?'selected':''}
                        onClick={()=>{setCategory(c);}}
                    >{categoryMap[c]}</li>
                )}
            </ul>
        </Wrapper>
    )
}
export {CategorySection};



