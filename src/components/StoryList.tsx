import  "../styles/storyList.css";

const Link = ({ url, title}:{ url:string, title:string }) => (
   <a href={url}  rel="noreferrer" >
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

const StoryList = ({story: { id, by, title, kids, time } }:storyType) => {
    
  return (
   
    <div className="stories">
      <div className="stories-title">
        <Link url={`#/story/${id}`} title={title} />
        {/*192327 has text field*/}
      </div>
      <div className="stories-info" >
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
