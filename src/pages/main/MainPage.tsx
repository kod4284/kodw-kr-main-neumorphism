import React from 'react';

import { MainContainer } from 'components/main/container';
import { NeuBox, NeuBoxContainer, NeuBoxText } from 'components/common/neu-button';

import { NeuBoxOption } from './types';

const newBoxOptions: Array<NeuBoxOption> = [
  { name: "Me" },
  { name: "Books" },
  { name: "Guacamole" },
  { name: "NPM" },
  { name: "Pass" },
  { name: "Photos" },
  { name: "Portainer" },
  { name: "Router" },
  { name: "Synology" },
];

const makeNeuBoxList = (options: Array<NeuBoxOption>) => options.map(
  ({name}) => (
    <NeuBox>
      <NeuBoxText href='naver.com'>
       {name} 
      </NeuBoxText>
    </NeuBox>
  )
);


function App() {
  return (
    <MainContainer>
      <NeuBoxContainer>
        {makeNeuBoxList(newBoxOptions)}
      </NeuBoxContainer>
    </MainContainer>
  );
}

export default App;
