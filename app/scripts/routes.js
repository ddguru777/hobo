import React from 'react'
import { Router, Route, IndexRoute } from 'react-router';

import Template from './template';
import Home from './components/home';
import Portfolio from './components/portfolio';
import Profile from './components/profile';
import Canvas from './components/canvas';
import Blog from './components/blog'

const routes = (
  <Route path="/" component={Template}>
    <IndexRoute component={Home}/>
    <Route path="portfolio" component={Portfolio}/>
    <Route path="profile" component={Profile}/>
    <Route path="profile.html" component={Profile}/>
    <Route path="canvas" component={Canvas}/>
    <Route path="blog" component={Blog}/>
    <Route path="*" component={Home}/>
  </Route>
)

export default routes