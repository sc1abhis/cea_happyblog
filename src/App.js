import './App.css';
import styled from 'styled-components'


import Header from '../src/components/Header/Header'
import Body from './components/Body/Body'
import NewPost from './components/Body/NewPost'
import MyPosts from './components/Body/MyPosts'
import BasicPagination from '../src/components/Body/Pagination'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const BlogContainer = styled.div`
outline-style: dotted;
height: 50 px;
padding: 50 px;

`


function App() {
  return (
    <div className="App">
      
      <Router>
      <Header></Header>

      
        <Switch>
          <Route
            exact
            path={['/']}
          >
            <Body />
          </Route>

          <Route path="/NewPost">
            <NewPost />
          </Route>
          <Route path="/MyPosts">
            <MyPosts />
          </Route>
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
