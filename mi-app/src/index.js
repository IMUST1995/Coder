import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
/* const estilo = () => ({
  backgroundColor: 'black',
  color: 'white'
})
const LI = ({ children, estado }) => <li>{children} estoy {estado}</li>
const X = () => 
  <ul>
    <LI 
      estado={'feliz'}
      casa={false}
      edad={24}    
    >
    chanchito
    </LI>
    <LI style={estilo()} estado={'triste'}>chanchito</LI>
    <LI estado={'emocionado'}>felipe</LI>
  </ul>
ReactDOM.render(
 <X />, document.getElementById('root')
) */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
