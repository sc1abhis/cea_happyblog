import React from 'react'

import MyBlogCard from '../Body/BlogCard'

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Data from '../Data/UserData.json';



export default function MyPosts() {
  return (
    <React.Fragment>
    <CssBaseline />
      <Container>
          <div class="blogs-section-wrapper">{Data.map(UserData => (<MyBlogCard BlogData = {UserData}  
          />))}</div>
          
          {/* <BlogCard></BlogCard> */}
      </Container>
  </React.Fragment>
  )
}
