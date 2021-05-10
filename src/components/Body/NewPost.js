import React from 'react'
import Button from '@material-ui/core/Button';

import Data from '../Data/UserData.json';

export default function NewPost() {
  return (
      <div class = "new-blog--wrapper"> 
            <div>
                <div class="publish-button">
                <Button variant="outlined"> Publish </Button>
                </div>
                <h1> Title </h1>
                <textarea rows="2" cols="100" >  </textarea>
                <h1> Publication </h1>
                <textarea rows="2" cols="100" >  </textarea>
                <h1> Sub Title </h1>
                <textarea rows="2" cols="100" >  </textarea>
            </div>

            <div>
                <h1>Post</h1>
                <textarea rows="30" cols="100" >  </textarea>
            </div>

        </div>


    )
}
