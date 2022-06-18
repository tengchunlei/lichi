import {useEffect, useState} from "react";
import {createId} from "../lib/createId";
import {useUpdate} from "./useUpdate";

const useTags=()=>{
    const [tags,setTags]=useState<{id:number;name:string}[]>([]);
    useEffect(()=>{
        let localTags=JSON.parse(window.localStorage.getItem('tags')||'[]')
        if(localTags.length===0){

            localTags=[
                {id:createId(),name:'学习'},
                {id:createId(),name:'健身'},
                {id:createId(),name:'运动'},
                {id:createId(),name:'饮食'},
                {id:createId(),name:'交通'},
            ];
        }
        setTags(localTags);
  },[]);

     useUpdate(()=>{
      window.localStorage.setItem('tags',JSON.stringify(tags))
  },tags);
    const findTag=(id:number)=>tags.filter(tag=>tag.id===id)[0];
    const findTagIndex = (id:number)=>{
        let result=-1;
        for(let i=0;i<tags.length;i++){
            if(tags[i].id===id){
                result = i;
                break;
            }
        }
        return result;
    };

    const updateTag =(id:number ,{name}:{name:string})=>{
       setTags(tags.map(tag=>tag.id===id?{id, name:name}:tag));
    };

    const deleteTag =(id:number)=>{
       setTags(tags.filter(tag=>tag.id!==id))
    };
    const addTag = ()=>{
        const tagName=window.prompt('您要新增的标签名称是？');
        console.log(tagName);
        if(tagName!==null &&tagName!==''){
            setTags([...tags,{id:createId(),name:tagName}])
        }
    };
    const  getName = (id:number)=>{
        const tag= tags.filter(t=>t.id===id)[0];
        return tag ?tag.name:'';
    };
    return{tags,getName,addTag,setTags,findTag,updateTag,findTagIndex,deleteTag};
};
export{useTags};