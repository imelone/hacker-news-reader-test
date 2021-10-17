import React,{useState,useEffect} from "react";
import {getStories} from "./../api/api";
import StoryList from "./StoryList";
import Header from "./Header";
//import Loader  from "./common/Loader";

function Home(type:any){
     
const [storiesData, setStoriesData] = useState<any>([])
const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
         getStories(type.type).then(res => {
           setStoriesData(res)
           setIsLoading(false);
         })

    }, [type])
    return(
        <>

         {/* <Loader show={isLoading}>Loading...</Loader> */}
            <Header/>

            {storiesData.map((item:any, key:number)=>{
                return <div key={key}> <StoryList story={item.data}/> </div> 
            })}
        </>
    )
}

export default Home;