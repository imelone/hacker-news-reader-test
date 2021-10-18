import {useState,useEffect} from "react";
import {getStories} from "../api";
import StoryList from "./StoryList";
import Header from "./Header";

import "../styles/loader.css";
import spinner from "../assets/spinnerImg.svg";


function Home(props:any){
  
const [storiesData, setStoriesData] = useState<any>([])
const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
         getStories(props.type).then(res => {
            
           setStoriesData(res);
           setIsLoading(false);
          
         })

    }, [props.type])

    return(
        <> 
            {isLoading === true ? 
                <div className="container-spinner" >
                    <div className="loader" >
                        <img src={spinner} className="spinner" alt="spinner"/>
                    </div>
                </div> 
            : ""}
           
            <Header/>

            {storiesData.map((item:any, key:number)=>{
                return <div key={key}> <StoryList story={item.data}/> </div> 
            })}
        </>
    )
}

export default Home;