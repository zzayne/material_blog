import React, {Component} from 'react';
import PostListItem from './PostListItem'
import Posts from'../containers/posts.json'
const PostList=({match})=>{

    return(
    <div>
        {
            Posts.map((item,index)=>(<PostListItem key={item.id} post={item}></PostListItem>))
        }

    </div>

)}
export default PostList