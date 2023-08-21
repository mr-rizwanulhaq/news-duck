

import React, { Component } from 'react'
import NavBar from './component/NavBar'
import News from './component/news'

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
      pageSize= 8;
  render() {


    return (
      <div>

        <BrowserRouter basename='news-duck'>
        <NavBar></NavBar>
          <Routes>
              <Route exact path="/" element={<News pageSize={this.pageSize} newsCategory='Home'> </News>} />
              <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} category='business' newsCategory='Business'> </News>} />
              <Route exact path="/entertainment" element={<News key='entertainment'pageSize={this.pageSize} category='entertainment' newsCategory='Entertainment'> </News>} />
              <Route exact path="/general" element={<News key='general'pageSize={this.pageSize} category='general' newsCategory='General'> </News>} />
              <Route exact path="/health" element={<News key='health'pageSize={this.pageSize} category='health' newsCategory='Health'> </News>} />
              <Route exact path="/science" element={<News key='science'pageSize={this.pageSize} category='science' newsCategory='Science'> </News>} />
              <Route exact path="/sports" element={<News key='sports'pageSize={this.pageSize} category='sports' newsCategory='Sports'> </News>} />
              <Route exact path="/technology" element={<News key='technology'pageSize={this.pageSize} category='technology' newsCategory='Technology'> </News>} />
          </Routes>
        </BrowserRouter>

      </div>
    )
  }
}


