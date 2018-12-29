import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// =================Day 51=================
// import App from './Day51/App';
// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// );


// // =================Day 52 Comment Card=================
// import App from './Day52/CommentCard/App';
// const list = [{ id: 1, name: 'Sam', comment: `it's good` }, { id: 2, name: 'Altaf', comment: `it's bad` }]
// ReactDOM.render(
//   <App list={list} />,
//   document.getElementById('root') as HTMLElement
// );

// =================Day 52 Questioner=================
import Questioner from './Day52/Questioner/App';
ReactDOM.render(
  <Questioner question="what is your name" />,
  document.getElementById('root') as HTMLElement
)


registerServiceWorker();