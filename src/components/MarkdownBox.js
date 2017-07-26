import React, {Component} from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import  '../styles/github-markdown.css'
import  highlightJS from 'highlight.js'


const  styles={
    root: {
        marginTop: 20,
        marginBottom: 20,
        padding: '0 10px',
    }
}

class MarkdownBox extends  Component{

    static propTypes = {
        style: PropTypes.object,
        text: PropTypes.string.isRequired,
    };

    static defaultProps = {
        text: '',
    };

    componentWillMount() {
        marked.setOptions({
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            highlight: function(code, lang) {
                return highlightJS.highlight(lang, code).value;
            },
        });
    }



  render(){
      const {
          style,
          text,
      } = this.props;

      return(
          <div
              style={Object.assign({}, styles.root, style)}
              className= "markdown-body"
              dangerouslySetInnerHTML={{__html: marked(text)}}
          />

      )
  }
}

export default MarkdownBox