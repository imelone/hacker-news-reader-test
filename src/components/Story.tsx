import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import spinner from "../assets/spinnerImg.svg";

//css
import  "../styles/story.css";
import "../styles/loader.css";

//api
import {getStory} from "./../api/api";

const Link = ({ url, title, data}:{ url:string, title:string, data?:number }) => (
   <a href={url} target="_blank" rel="noreferrer" >
    {title}
  </a>
);

const StoryList = () => {
    const { id } = useParams<any>();
    const [isLoading, setIsLoading] = useState(false);
    const [storyData, setStoriesData] = useState<any>([])

    useEffect(() => {
        setIsLoading(true);
         getStory(id).then((res: any) => {
           setStoriesData(res.data)
           setIsLoading(false);
         })

    }, [id])
    
  return (
   
    <div className="story">
               {isLoading === true ? <div className="container-spinner" ><div className="loader" ><img src={spinner} className="spinner"/></div></div> : ""}
      <div className="story-title">
        {storyData.title}
      </div>
     
     
      <div className="html_raw" style={{ fontFamily: "Open sans" }} dangerouslySetInnerHTML={{ __html:  storyData.text }} />
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
