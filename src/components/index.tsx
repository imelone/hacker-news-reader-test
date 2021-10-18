import {useState,useEffect} from "react";

//api
import {getStories} from "../api";

//components
import StoryList from "./StoryList";
import Header from "./Header";
import Spinner from "./common/Spinner";

//css
import "../styles/loader.css";
import  "../styles/story.css";

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
               <Spinner/>
            : ""}
           
            <Header/>

            {storiesData? storiesData.map((item:any, key:number)=>{
                return <div key={key}> <StoryList story={item.data}/> </div> 
           
            }) : <div className="story-title" style={{marginTop:"3rem"}}>{"Nothing to show"}</div>}
        </>
    )
}

export default Home;