import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withWidth, {LARGE} from 'material-ui/utils/withWidth';
import {Route,Link,Switch } from 'react-router-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import {darkWhite, lightWhite, grey900} from 'material-ui/styles/colors';
import FullWidthSection from '../components/FullWidthSection'
import SideNavDrawer from '../components/SideNavDrawer'
import spacing from 'material-ui/styles/spacing';
import RouteConfig from './RouteConfig'




class Master extends Component {



    /* something about new material_ui: you need to create a muiTheme
     which is totally fucking useless */
    static childContextTypes ={
        muiTheme: React.PropTypes.object,
        server_name: React.PropTypes.string
    }

    static contextTypes = {
        router: PropTypes.object.isRequired,
    };



    getChildContext() {
        return {
            muiTheme: this.state.muiTheme
        };
    }




    componentWillMount () {
        this.setState({
            muiTheme: getMuiTheme()
        });
    }



    state = {
        navDrawerOpen: false,
    };

    getStyles(){
        const style={

            appBar: {
                position: 'fixed',
                // Needed to overlap the examples
                zIndex: this.state.muiTheme.zIndex.appBar + 100,
                top: 0,
                left:0
            },
            navDrawer:{

            },
            root: {
                paddingTop: spacing.desktopKeylineIncrement,
                minHeight: 400,
            },
            content: {

                margin: spacing.desktopGutter,
            },

            footer:{
                backgroundColor: grey900,
                textAlign: 'center',
            },
            a: {
                color: darkWhite,
            },
            p: {
                margin: '0 auto',
                padding: 0,
                color: lightWhite,
                maxWidth: 356,
            },

        }

        return style;

    }


    handleTouchTapLeftIconButton= () =>{
        this.setState({
            navDrawerOpen: !this.state.navDrawerOpen,
        });
    }
    handleChangeList=(event, value)=>{

        if (value) {

            this.context.router.history.push(value);
            this.setState({
                navDrawerOpen: false,
            });
        }
    }

    handleChangeRequestNavDrawer = (open) => {
            this.setState({
                navDrawerOpen: open,
            });
    }
    handleChangeMuiTheme = (muiTheme) => {
        this.setState({
            muiTheme: muiTheme,
        });
    }



    render() {

        const {
            location,
        } = this.props;
        let path=location.pathname

        let config={
            showMenuIconButton:true,
            docked:false,
            showMenuIconButton:true,
            title:
                path==='/about'? 'About' :'',
            isHome: path==='/'? true :false,

            open:this.state.navDrawerOpen

        }


        const {
            prepareStyles,
        } = this.state.muiTheme;


        const   styles=this.getStyles();

        const routeContent=RouteConfig.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
            />
        ));


        if (this.props.width === LARGE&&!config.isHome ) {
            config.docked = true;
            config.open = true;
            config.showMenuIconButton = false;
            styles.navDrawer = {
                color:'red',
                zIndex: styles.appBar.zIndex-100,
            };

            styles.root.paddingLeft = '256px';
            styles.footer.paddingLeft = '256px';

        }

        return (


            <div>

                <AppBar
                    zDepth={0}
                    onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
                    iconElementRight={
                        <IconButton
                            iconClassName="muidocs-icon-custom-github"
                            href="https://github.com/zzayne/material_blog"
                        />
                    }
                    style={styles.appBar}
                    showMenuIconButton={config.showMenuIconButton}

                />

                <SideNavDrawer
                    style={styles.navDrawer}
                    docked={config.docked}
                    open={config.open}
                    location={location}
                    onRequestChangeNavDrawer={this.handleChangeRequestNavDrawer}
                    onChangeList={this.handleChangeList}
                />
                {config.isHome?
                    <div>
                        <Switch>
                        {routeContent}
                        </Switch>
                    </div>:
                    <div style={styles.root}>
                        <div style={styles.content}>
                        <Switch>
                        {routeContent}
                        </Switch>
                        </div>
                    </div>
                }

               {/* <div style={styles.root}>

                   {RouteConfig.map((route, index) => (
                        // Render more <Route>s with the same paths as
                        // above, but different components this time.
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))}
                </div>*/}

               {/* <Route path="/post" exact component={PostPage} />*/}
                <FullWidthSection style={styles.footer}>
                    <p style={prepareStyles(styles.p)}>
                        {'Happy Codindg .'}


                    </p>
                </FullWidthSection>


            </div>
        );
    }
}

export default withWidth()(Master);
