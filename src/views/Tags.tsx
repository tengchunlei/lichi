import Layout from "../components/Layout";
import React from "react";
import {useTags} from "useTags";

function Tags() {
    const {tags,setTags}=useTags();
    return (
        <Layout>标签页面</Layout>
    )
}

export default Tags;