import Layout from "components/Layout";
import React from "react";
import {useParams} from "react-router-dom";
import {useTags} from "useTags";
import Icon from "components/Icon";
import {Button} from "components/Button";
import styled from "styled-components";
import {Input} from "components/Input";
import {Space} from "components/Space";
import { Center } from "components/Center";
    type Params = {
        id:string
    }

const Topbar =styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 20px;
    padding:14px;
    background: white;
`
const InputWrapper = styled.div`
    background: white;
    padding: 14px 16px;
    margin-top:8px;
`


const Tag:React.FC=(props)=>{
        const {findTag} = useTags();
        let {id}=useParams<Params>();
        const tag =findTag(parseInt(id));

    return (
            <Layout>
                <Topbar>
                    <Icon name="left"/>
                    <span>编辑标签</span>
                    <Icon name=""/>
                </Topbar>
            <InputWrapper>
                <div>
                   <Input label="标签名" type ="text" placeholder="标签名"/>
                </div>
            </InputWrapper>
                <div>
                    <Center>
                    <Space/>
                    <Space/>
                    <Space/>
                <Button>删除标签</Button>
                    </Center>
                </div>
            </Layout>
    );
};

export{Tag};