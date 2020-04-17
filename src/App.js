import React from 'react';
import './App.css';
import axios from 'axios';
import ImageCard from './components/imageCard';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  height:100vh;
  position:absolute;
  top:0;
  right:0;
  left:0;
	background:#0a0a0a;
	color: white;
`;

function App() {
  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1;
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();

  let newDate = month + '/' + day + '/' + year;


  return (
    <AppContainer>
      <h1>NASA's Picture of the Day</h1>
      <span>Today is: {newDate}</span>
      <ImageCard />
    </AppContainer>
  );
}

export default App;