import React from 'react';
import {
  RecoilRoot,
} from 'recoil';
import CharacterCounter from './components/CharacterCounter';
import Header2Text from './components/Header2Text';

const App =() => {
  return (
    <div class='wrapper'>
      <Header2Text/>
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>
    </div>
  );
}


export default App;
