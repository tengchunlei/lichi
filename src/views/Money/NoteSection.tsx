import styled from "styled-components";
import React, {ChangeEventHandler, useRef, useState} from "react";
import {Input} from "components/Input";
const Wrapper= styled.section`
background:#f5f5f5;
  padding:10px 16px;
  font-size: 14px;
`;

type Props={
    value:string;
    onChange:(value:string)=> void;
}

const NoteSection:React.FC<Props> =(props)=>{
    const note=props.value;
    const onChange:ChangeEventHandler<HTMLInputElement> =(e)=>{
           props.onChange(e.target.value);
    }
    return(
        <Wrapper>
            <Input label="备注" type ="text" value={note} onChange={onChange}
            placeholder="请填写备注"/>
        </Wrapper>
    )
}
export {NoteSection};

