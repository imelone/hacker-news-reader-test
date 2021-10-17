import  "../styles/storyList.css";

const Link = ({ url, title, data}:{ url:string, title:string, data?:object }) => (
   <a href={url} target="_blank" rel="noreferrer" >
    {title}
  </a>
);


interface storyType {
    story:{
    id:number,
    by:string,
    title:string,
    kids:string,
    time:number,
    url:string}
}

const StoryList = ({story: { id, by, title, kids, time, url } }:storyType) => {
    
  return (
   
    <div className="story">
      <div className="story-title">
        <Link url={url} title={title}/>
      </div>
      <div className="story-info" >
        <span>
          by{' '}
          <Link url={`https://news.ycombinator.com/user?id=${by}`} title={by} />
        </span>
        |
        <span>
          {new Date(time * 1000).toLocaleDateString('en-US', {
            hour: 'numeric',
            minute: 'numeric'
          })}
        </span>
        |
        <span>
          <Link
            url={`https://news.ycombinator.com/item?id=${id}`}
            title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
          />
        </span>
      </div>
    </div>

  );
};

export default StoryList;
