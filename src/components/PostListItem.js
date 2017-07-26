import  React,{Component} from 'react'
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import spacing from 'material-ui/styles/spacing';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton'


const style={
    card:{
        marginTop:spacing.desktopGutter
    },
    title:{

        fontSize:20
    },

    subTitle:{
        fontSize:10,
        marginTop:5
    },
    action:{
        textAlign:'right'
    },
    excerpt:{
        wordBreak:'break-word',
        textJustify:'inter-word'
    }

}
class PostListItem extends Component{
    static  propTypes={
        post: PropTypes.object.isRequired
    }
    static contextTypes = {
        router: PropTypes.object.isRequired,
    }
    handBtnReadTouch(id){
      this.context.router.history.push('/post/'+id)
    }

    render(){
        const{
            post
        }=this.props


        return(
            <Card style={style.card}>
                <CardHeader
                    title={post.title}
                    subtitle={post.source+'  '+post.time}
                    actAsExpander={true}

                    titleStyle={style.title}
                    subtitleStyle={style.subTitle}
                />

                <CardText expandable={false} style={style.excerpt}>
                    {post.excerpt}
                </CardText>
                <CardActions style={style.action}>
                    <RaisedButton label="Read"  secondary={true}  onTouchTap={(event)=>{
                        event.preventDefault();
                        this.handBtnReadTouch(post.id)}}/>


                </CardActions>
            </Card>
        )
    }

}
export default PostListItem