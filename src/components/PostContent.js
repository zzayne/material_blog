/**
 * Created by zayne on 2017/7/27.
 */
import  React,{Component} from 'react'

import Paper from 'material-ui/Paper';
import Posts from '../containers/posts.json'


const styles={
    paper:{
        minHeight:400,
        padding:15
    },
    title:{
        fontSize:20,

    }
}



const PostContent =({match})=>{

    const PostItem=Posts.find(item=>item.id==match.params.id);


   return(
    <Paper style={styles.paper}>
        <h2 style={styles.title}>{PostItem.title}</h2>
        <div>
            {PostItem.content}
        </div>

    </Paper>


)}
export default PostContent