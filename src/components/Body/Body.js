import styled from 'styled-components'

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import BlogCard from '../Body/BlogCard'

import React, { Component } from 'react'

import BloggingData from '../Data/mediumdata.json'
// import UserData from 
import { LensOutlined } from '@material-ui/icons';

export default class Body extends Component {
  
 
  
  constructor(props) {
              super(props);
              this.state = {bookmark: false ,
              thumbsup : false ,
              bookmarkSVG : "../bookmark-regular.svg" ,
              thumbsupSVG : "../thumbs-up-regular.svg"
              };
          }
          
        
  

  bookmarkHandler = () =>  {
    console.log("Clicked")
    let bookm
    bookm = this.state.bookmark 
    let bookmarksvg = ""
    bookmarksvg = (bookm ? "../bookmark-solid.svg" : "../bookmark-regular.svg") 
    this.setState({ bookmark : !bookm , 
    bookmarkSVG : bookmarksvg}) 
  } 

  thumbsUpHandler = () => {
    console.log("Inside thumbs up handler")
    let thumbs
    thumbs = this.state.thumbsup
    
    let thumbsSVG = ""
    thumbsSVG = (thumbs? "../thumbs-up-solid.svg" : "../thumbs-up-regular.svg")
    this.setState(
      {thumbsup : !thumbs ,
      thumbsupSVG : thumbsSVG }
    )



  }

  render() {
    
    return (
    <React.Fragment>
      <CssBaseline />
        <Container>
            <div class="blogs-section-wrapper">{BloggingData.map(BlogData => (<BlogCard BlogData = {BlogData}  
            onclick = {this.bookmarkHandler} 
            onclickThumbsUp = {this .thumbsUpHandler}
            bookmarkSVG = {this.state.bookmarkSVG} 
            thumbsUpSVG = {this.state.thumbsupSVG} />))}</div>
            {/* <BlogCard></BlogCard> */}
        </Container>
    </React.Fragment>
    )
  }
}
