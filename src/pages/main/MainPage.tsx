import React from 'react';

import { MainContainer } from 'components/main/container';
import { NeuBox, NeuBoxContainer, NeuBoxText } from 'components/common/neu-button';

import { NeuBoxOption } from './types';

const newBoxOptions: Array<NeuBoxOption> = [
  { name: "Me", url: "https://kodw.netlify.app/", primary: true },
  { name: "B" , url: "https://books.kodw.kr"},
  { name: "G" , url: "https://kodw.synology.me/"},
  { name: "N" , url: "https://npm.kodw.kr/"},
  { name: "Pa", url: "https://pass.kodw.kr/"},
  { name: "Ph", url: "https://photos.kodw.kr/"},
  { name: "Po", url: "https://portainer.kodw.kr/"},
  { name: "R" , url: "http://kodw.synology.me:3012"},
  { name: "S" , url: "https://nas.kodw.kr/"},
];

const makeNeuBoxList = (options: Array<NeuBoxOption>) => options.map(
  ({name, primary, url}) => (
    <NeuBox>
      <NeuBoxText href={url} primary={primary}>
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
