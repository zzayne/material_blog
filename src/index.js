import React from 'react';
import {render} from 'react-dom';
import {
    BrowserRouter as Router,Route
} from 'react-router-dom';
import Master from './containers/Master'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Helpers for debugging
window.React = React;


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

/**
 * Render the main app component. You can read more about the react-router here:
 * https://github.com/reactjs/react-router/blob/master/docs/guides/README.md
 */
render(
    <Router
        onUpdate={() => window.scrollTo(0, 0)}
    >
        <Route path="/" component={Master}></Route>
    </Router>
    , document.getElementById('root'));



//ReactDOM.render(<App />, document.getElementById('root'));
