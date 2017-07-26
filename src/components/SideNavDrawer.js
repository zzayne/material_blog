import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import {spacing, typography, zIndex} from 'material-ui/styles';

import Subheader from 'material-ui/Subheader';

import {cyan500} from 'material-ui/styles/colors';

const SelectableList = makeSelectable(List);
const styles = {

    logo: {
        cursor: 'pointer',
        fontSize: 24,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: cyan500,
        paddingLeft: spacing.desktopGutter,
        marginBottom: 8,
    }
};




class SideNavDrawer extends Component{
    //props list
    static propTypes = {
        docked: PropTypes.bool.isRequired,
        open: PropTypes.bool.isRequired,
        style: PropTypes.object,
        location: PropTypes.object.isRequired,
        onChangeList: PropTypes.func.isRequired,
        onRequestChangeNavDrawer: PropTypes.func.isRequired,
    };
    static contextTypes = {

        router: PropTypes.object.isRequired,
    }


    //When click  listItem jump to the page(value is the page url)
    handleRequestChangeLink=(event, value)=>{
        window.location=value
    }
    handleTouchTapHeader = () => {

        this.context.router.history.push('');
        this.props.onRequestChangeNavDrawer(false);
    };
    render() {
        const {
            docked,
            open,
            style,
            location,
            onChangeList,
            onRequestChangeNavDrawer
        } = this.props;

        return(


            <Drawer
                style={style}
                docked={docked}
                open={open}
                onRequestChange={onRequestChangeNavDrawer}
                containerStyle={{zIndex: zIndex.drawer -100}}
            >
                <div style={styles.logo} onTouchTap={this.handleTouchTapHeader}>
                     Zayne Blog
                </div>

                <SelectableList  value={location.pathname}   onChange={onChangeList}>
                    <ListItem
                        primaryText="About"  value="/about"
                    />
                    <ListItem
                        primaryText="Tech"
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem primaryText="JS" value="/tech/js" />,
                            <ListItem primaryText="React" value="/tech/react" />,
                            <ListItem primaryText=".NET" value="/tech/dot-net" />,
                        ]}
                    />
                    <ListItem
                        primaryText="Life"
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem primaryText="Movie" value="/life/movie" />,
                            <ListItem primaryText="Book" value="/life/book" />,
                            <ListItem primaryText="Travel" value="/life/travel" />,


                        ]}
                    />
                    <ListItem
                        primaryText="Other"
                        primaryTogglesNestedList={true}
                        nestedItems={[

                        ]}
                    />

                </SelectableList>
                <Divider />
                <SelectableList onChange={this.handleRequestChangeLink} >
                    <Subheader>Resources</Subheader>
                    <ListItem primaryText="GitHub" value="https://github.com/zzayne/material_blog" />
                    <ListItem primaryText="React" value="http://facebook.github.io/react" />
                    <ListItem
                        primaryText="Material Design"
                        value="https://www.google.com/design/spec/material-design/introduction.html"
                    />
                </SelectableList>

            </Drawer>

        )
    }


}
export  default  SideNavDrawer