import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import styled from 'styled-components';

// import blogImage from '../Data/Blog.jpg';
// import bookmark from '../Data/bookmark-regular.svg';
// import thumbsUp from '../Data/thumbs-up-regular.svg';

// import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}); 


export default function MyBlogCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  

  return (
   
        <div class="card-content-wrapper">
            <div class="blog-left-content">
                <p>Published in: {props.BlogData.publication}</p>
                <h2>{props.BlogData.title}</h2>
                <p>{props.BlogData.subtitle}</p>
                {/* <div> Created date {props.BlogData.date}</div> */}

                <div class="blog-actions-bar">
                    <div class="learn-more-link">
                        <a href={props.BlogData.url} target="blank">Continue Reading</a>
                    </div>
                    
                    
                </div>
            </div>
            <div class="blog-right-content">
                <img src="../Blog.jpg" />
            </div>
            <div class="blog-action-btn-group">
                        <button><img src="../Blog.jpg" /></button>
                        <button><img src="../edit-regular.svg" /></button>
            </div>
        </div>
    
  );
}