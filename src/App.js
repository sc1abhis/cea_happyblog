import './App.css';
import styled from 'styled-components'


import Header from '../src/components/Header/Header'
import Body from './components/Body/Body'
import BasicPagination from '../src/components/Body/Pagination'
const BlogContainer = styled.div`
outline-style: dotted;
height: 50 px;
padding: 50 px;

`


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      {/* <BasicPagination /> */}
    </div>
  );
}

export default App;
