// import { useState } from 'react';
import './App.css';
// import Example from './componenets/Example';
import ChannelData from './componenets/Data/ChannelData';
import PlayButtons from './componenets/Play-Pause/PlayButtons';

function App() {
  // let name = "Mazhar"
  return (
    <div className="App">
      <h1>My_APP</h1>
      <ChannelData/>
      <PlayButtons  className="button" message="hi"  onPlay={()=>console.log("Play")} 
       onPause={()=>console.log("pause")}>Play</PlayButtons>
      {/* <PlayButtons className="button" message="hello" onPlay={()=>alert("pause")}>Pause</PlayButtons> */}
    </div>
  );
}

export default App;
