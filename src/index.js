//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

//const myfirstelement = <h1>Helleo react</h1>
//ReactDOM.render(myfirstelement,
  
  //document.getElementById('root')
//);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
//<React.StrictMode>
//<App />
//</React.StrictMode>,
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div><h1>React First Element</h1><br/><p>this is my first element</p></div>, document.getElementById("root"));
   serviceWorker.unregister();