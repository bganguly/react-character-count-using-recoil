import React from 'react';
import {
  RecoilRoot,
} from 'recoil';
import CharacterCounter from './components/CharacterCounter';

const App =() => {
  return (
    <div  class='wrapper'>
      <h2>React Recoil Demo</h2>
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>
    </div>
  );
}


export default App;
