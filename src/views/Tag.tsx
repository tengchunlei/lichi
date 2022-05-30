import Layout from "components/Layout";
import React from "react";
import {useParams} from "react-router-dom";
import {useTags} from "useTags";
import Icon from "components/Icon";
import {Button} from "components/Button";
import styled from "styled-components";
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

                <div>
                    <label>
                        <span>标签名</span>
                        <input type="text" placeholder="标签名"/>
                    </label>
                </div>

                <div>
                <Button>删除标签</Button>
                </div>
            </Layout>
    );
};

export{Tag};