import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
// import Footer from './components/Footer';
import React from 'react';
import Login from './components/Login';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
class App extends React.Component{
  render(){
    return <div class='All-page'>
      {/* <Login/> */}
      <Header />
      {/* <Footer /> */}
    </div>
  }
}

export default App;
