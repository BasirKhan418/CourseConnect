"use client"
import React, { useEffect, useState } from 'react'
import ResultPage from '@/components/ResultPage'
import resultjson from '../../../public/Jsons/result.json';
import result6 from '../../../public/Jsons/result6.json';
import SearchBar from '@/components/SearchBar';
import NotFound from '@/components/Notfound';
import Skeleton from '@/components/Skeleton';
const page = () => {
   const [result, setResult] = useState([]);
   const [result2, setResult2] = useState([]);
   const [searchInput,setSearchInput] = useState('');
   const [data,setData] = useState([]);
   const [loading,setLoading] = useState(false);
   const [isFire404,setIsFire404] = useState(false);
   const [type,setType] = useState('btech4');
   useEffect(()=>{
    setResult(resultjson.result);
    setResult2(result6.result);
   },[])
    console.log(result);
    //searchinput starts here
    useEffect(()=>{
console.log(searchInput);
console.log(type)
    },[searchInput])
    //handle search button click starts here
    const handleButtonClick = ()=>{
        if(type === 'btech4'){
        setData([]);
        setIsFire404(false);
        setLoading(true);
        let res = result.filter((item)=>item.Reg_No === searchInput||item.Name === searchInput.toUpperCase());
        setTimeout(()=>{
            setData(res);
            setLoading(false);
            if(res.length==0){
                setIsFire404(true);
            }
        },1000)
    }
    else{
        setData([]);
        setIsFire404(false);
        setLoading(true);
        let res = result2.filter((item)=>item.Reg_No === searchInput||item.Name === searchInput.toUpperCase());
        setTimeout(()=>{
            setData(res);
            setLoading(false);
            if(res.length==0){
                setIsFire404(true);
            }
        },2000)
    }
       
    }
  return (
    <div className='bg-white dark:bg-gray-900'>
      <SearchBar setSearchInput={setSearchInput} handleButtonClick={handleButtonClick} setType={setType} type={type}/>
      {data.length>0&&<ResultPage data={data} type={type}/>}
       { isFire404&&<NotFound />}
        {loading&&<Skeleton />}
    </div>
  )
}

export default page
