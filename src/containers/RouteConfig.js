/**
 * Created by zayne on 2017/7/25.
 */

import {Route,Link } from 'react-router-dom'
import HomePage from './HomePage';
import PostList from '../components/PostList'
import AboutPage from './About/about'
import PostContent from '../components/PostContent'

const RouteConfig=[
    {
        path: '/',
        exact: true,
        component:HomePage
    },
    {
        path: '/about',
        component:AboutPage
    },
    {
        path: '/post/:id',
        component:PostContent,
        exact: true,

    },
    {
        path: '/:classOne/:classTwo',
        component:PostList
    },
    {
        path: '/:classOne/:classTwo/:id',
        component:PostList
    },

]

export  default RouteConfig
