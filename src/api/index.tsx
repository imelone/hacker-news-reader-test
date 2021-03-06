import axios from 'axios';
import { BASE_URL } from '../components/common/constants';

interface storyType {
    story:{
    id:number,
    by:string,
    title:string,
    kids:string,
    time:number,
    text:string,
    tempPeople:string,
    url:string}
}
export const getStory = async (id:number) => {
  try {
    const story = await axios.get<storyType>(`${BASE_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getStories = async (type:string) => {
  try {
    const { data: storyIds }:{data:[]} = await axios.get<[]>(
      `${BASE_URL}/${type}stories.json`
    );
    
    const stories = await Promise.all(storyIds.slice(0, 130).map(getStory));
     
    //get the stories with text field
    let result = stories.filter((item:any) => item.data.text !== undefined )
    return result;

  } catch (error) {
    console.log('Error while getting list of stories.');
  }
};