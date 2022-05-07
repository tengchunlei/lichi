import styled from "styled-components";
import React, {useState} from "react";


const Wrapper= styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow:1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
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
    &.selected{
      background:yellow;
    }
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
`;
type Props={
    value:string[];
    onChange:(value:string[])=> void;
}
const TagsSection:React.FC<Props> =(props)=> {
    const [tags,setTags]=useState<string[]>(['衣','食','住','行']);
    const selectedTags=props.value;
    const onAddTag = ()=>{
      const tagName=window.prompt('新增标签为');
      console.log(tagName);
       if(tagName!==null){
         setTags([...tags,tagName])
       }
    };
    const ontoggleTag=(tag:string)=>{
        const index=selectedTags.indexOf(tag)
        if (index>=0){
       props.onChange(selectedTags.filter(t=>t!==tag))
        }
        else{
            props.onChange([...selectedTags,tag])
        }
    }
    const getClass =(tag:string)=>selectedTags.indexOf(tag)>=0?'selected':'';
    return (
        <Wrapper>
            <ol>
                {tags.map(tag=>
                <li key={tag} onClick={()=>{ontoggleTag(tag);}}
                className={getClass(tag)}>{tag}</li>
                )}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    );};

export {TagsSection};