import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";
type RecordItem={
     tagIds:number[]
     note:string
     category:'+'|'-'
     amount:number
     createAt:string
}
type newRecordItem=Omit<RecordItem,'createAt'>

 export const useRecords=()=>{
    const [records,setRecords]=useState<RecordItem[]>([]);
    useEffect(()=>{
        setRecords(JSON.parse(window.localStorage.getItem('records')||'[]'))
    },[]);

    useUpdate(()=>{
        window.localStorage.setItem('reords',JSON.stringify(records))
    },[records])

     const addRecord =(newRecord:newRecordItem)=>{
          const record ={...newRecord,createAt:(new Date()).toISOString()}
         setRecords([...records,record]);
     }

    return {records,addRecord}
 };
