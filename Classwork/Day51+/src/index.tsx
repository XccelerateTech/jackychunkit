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
// import Questioner from './Day52/Questioner/App';
// ReactDOM.render(
//   <Questioner question="what is your name" />,
//   document.getElementById('root') as HTMLElement
// )

// =================Day 52 TicTacToe=================
// import Game from './Day52/TicTacToe/Game'

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root') as HTMLElement
// )

// =================Day 53 Form=================
// import Form from './Day53/Form/SimpleForm' /* Simple input box */
// import Form from './Day53/Form/EssayForm' /* Textarea form */
// import Form from './Day53/Form/SelectForm' /* Select form */
// import Form from './Day53/Form/MultipleForm' /* Multiple form */

// ReactDOM.render(
//   <Form />,
//   document.getElementById('root') as HTMLElement
// )

// =================Day 53 Clock=================
// import Timer from './Day53/Timer/Timer'

// ReactDOM.render(
//   <Timer />,
//   document.getElementById('root') as HTMLElement
// )

// =================Day 54 Router=================
// import App from './Day54/Router/BasicRouter'
// import App from './Day54/Router/AdvancedRouter/App'

// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// )

// =================Day 54 TicTacToe=================
// import Game from './Day54/TicTacToe/Game'

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root') as HTMLElement
// )

// =================Day 55 Weekly Assignment 1=================
// import App from './Day55(week1)/Router'

// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// )

// =================Day 56 Redux=================
// import App from './Day56/BasicRedux/App'
// // import App from './Day56/AdvancedRedux/App'
// import App from './Day56/Structured/index'

// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// )

// =================Day 59 Jest=================
// import App from './Day59/Default/App'
import { Board } from './Day59/TicTacToe/TicTacToe'

ReactDOM.render(
  <Board />,
  document.getElementById('root') as HTMLElement
)


//  ==========================================
registerServiceWorker();