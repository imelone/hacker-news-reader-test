import { useState, useEffect } from "react";
import { useParams,useHistory } from "react-router-dom";

//assets
import arrow from "../assets/chevron-arrow-left.png";

//css
import  "../styles/story.css";
import "../styles/loader.css";

//api
import {getStory} from "../api";

//components
import Spinner from "./common/Spinner";

const Link = ({ url, title}:{ url:string, title:string}) => (
   <a href={url} target="_blank" rel="noreferrer" >
    {title}
  </a>
);

const StoryList = () => {
    
    const { id } = useParams<any>();
    const [isLoading, setIsLoading] = useState(false);
    const [storyData, setStoriesData] = useState<any>([])
    const history = useHistory();

    useEffect(() => {
        setIsLoading(true);
         getStory(id).then((res: any) => {
           setStoriesData(res.data)
           setIsLoading(false);
         })

    }, [id])
    
  return (
   
    <div className="story">
       <div className="go-back">
            <a href="/#" rel="noreferrer" onClick={()=>history.goBack()}>
                <img src={arrow} alt="arrow" width="20rem"/>
            </a>
        </div>

        {isLoading === true ? 
            <Spinner/>
        : ""}

      <div className="story-title">
        {storyData.title}
      </div>
          
      <div className="html_raw"  dangerouslySetInnerHTML={{ __html:  storyData.text }} />
      <div className="story-info" >
        <span>
          by{' '}
          <Link url={`https://news.ycombinator.com/user?id=${storyData.by}`} title={storyData.by} />
        </span>
        |
        <span>
          {new Date(storyData.time * 1000).toLocaleDateString('en-US', {
            hour: 'numeric',
            minute: 'numeric'
          })}
        </span>
        |
        <span>
          <Link
            url={`https://news.ycombinator.com/item?id=${storyData.id}`}
            title={`${ storyData.kids && storyData.kids.length > 0 ? storyData.kids.length : 0} comments`}
          />
        </span>
       
      </div>
    </div>

  );
};

export default StoryList;
