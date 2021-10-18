import {useState,useEffect} from "react";
import {getStories} from "./../api/api";
import StoryList from "./StoryList";
import Header from "./Header";

import "../styles/loader.css";
import spinner from "../assets/spinnerImg.svg";


function Home(type:any){
     
const [storiesData, setStoriesData] = useState<any>([])
const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
         getStories(type.type).then(res => {
            
           setStoriesData(res);
           setIsLoading(false);
          
         })

    }, [type])
    return(
        <> 
            {isLoading === true ? <div className="container-spinner" ><div className="loader" ><img src={spinner} className="spinner"/></div></div> : ""}
           
            <Header/>
            {storiesData.map((item:any, key:number)=>{
                return <div key={key}> <StoryList story={item.data}/> </div> 
            })}
        </>
    )
}

export default Home;