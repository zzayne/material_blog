/**
 * Created by zayne on 2017/7/22.
 */
import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types';
import withWidth , {LARGE} from 'material-ui/utils/withWidth';
import {cyan500, grey200, darkWhite} from 'material-ui/styles/colors';
import typography from 'material-ui/styles/typography';
import RaisedButton from 'material-ui/RaisedButton';
import spacing from 'material-ui/styles/spacing';
import logoImg from '../images/logo.png'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import FullWidthSection from '../components/FullWidthSection'
import HomeFeature from '../components/HomeFeature'
import AboutSvg from '../images/about.svg'
import TechSvg from '../images/tech.svg'
import OtherSvg from '../images/other.svg'
import PostPage from '../components/PostList'

class HomePage extends Component {


    homeIntro() {
        const styles = {
            root: {
                backgroundColor: cyan500,
                overflow: 'hidden',
                textAlign:'center',
                margin:0,
                padding:0,

            },
            logo: {

                width: 200,
                height: 200,
            },
            tagLine: {

                margin: '16px auto 0 auto',
                textAlign: 'center',
                maxWidth: 575,
            },
            label: {
                color: lightBaseTheme.palette.primary1Color,
            },

            h1: {
                color: darkWhite,
                marginTop:10,
                fontWeight: typography.fontWeightLight,
            },
            h2: {
                color: darkWhite,
                fontWeight: typography.fontWeightLight,
                fontSize: 20,
                lineHeight: '28px',
                paddingTop: 15,
                marginBottom: 13,
                letterSpacing: 0,
            },
            taglineWhenLarge: {
                marginTop: 32,
                padding:0
            },
            h1WhenLarge: {
                fontSize: 50,
            },
            nowrap: {
                whiteSpace: 'nowrap',
            },
            h2WhenLarge: {
                fontSize: 24,
                lineHeight: '32px',
                paddingTop: 16,
                marginTop:20,
                marginBottom: 20,
            }
        };


        if (this.props.width === LARGE) {
            styles.tagline = Object.assign({}, styles.tagline, styles.taglineWhenLarge);
            styles.h1 = Object.assign({}, styles.h1, styles.h1WhenLarge);
            styles.h2 = Object.assign({}, styles.h2, styles.h2WhenLarge);
        }

        return (
            <FullWidthSection style={styles.root}>
                <img style={styles.logo} src={logoImg}/>
                <div style={styles.tagline}>
                    <h1 style={styles.h1}>Zayne Blog</h1>
                    <h2 style={styles.h2}>
                        {/*<span style={styles.nowrap}>Keep Record,</span>*/}
                        <span style={styles.nowrap}>Keep Fresh </span>
                    </h2>
                    <RaisedButton
                        className="demo-button"
                        label="Go"
                        labelStyle={styles.label}
                    />
                </div>
            </FullWidthSection>
        )
    }
    homePurpose(){
        const styles = {
            root: {
                backgroundColor: grey200,
            },
            content: {
                maxWidth: 700,
                padding: 0,
                margin: '0 auto',
                fontWeight: typography.fontWeightLight,
                fontSize: 20,
                lineHeight: '28px',
                paddingTop: 19,
                marginBottom: 13,
                letterSpacing: 0,
                color: typography.textDarkBlack,
            },
        };

        return (
            <FullWidthSection
                style={styles.root}
                useContent={true}
                contentStyle={styles.content}
                contentType="p"
                className="home-purpose"
            >
                博客项目构想已久，利用此次学习
                <a href="http://facebook.github.io/react/">React</a>的机会开始落实，项目使用了
                <a href="http://www.material-ui.com/#/">
                    Material-Ui
                </a>组件库进行搭建，界面设计参考了其官网设计。项目当前比较简陋，后期会逐步进行完善，代码托管在
                <a href="https://github.com/zzayne/material_blog">GitHub</a>，欢迎共同交流提高。
            </FullWidthSection>
        );
    }

    homeFeatures(){
        const styles={maxWidth: 906}
        return(
        <FullWidthSection useContent={true} contentStyle={styles}>
            <HomeFeature
                title="About"
                route="/about"
                img={AboutSvg}
                firstChild={true}
            />
            <HomeFeature
                title="Tech"
                route="/tech/js"
                img={TechSvg}
            />
            <HomeFeature
                title="Other"
                route="/other"
                img={OtherSvg}
                lastChild={true}
            />
        </FullWidthSection>
        )

    }



    render() {
        const style = {
            paddingTop: spacing.desktopKeylineIncrement,
        };
        return (
            <div style={style}>
                {this.homeIntro()}
                {this.homePurpose()}
                {this.homeFeatures()}
                <Route path="/about" component={PostPage}/>
            </div>


        );

    }
}

export default withWidth()(HomePage);
