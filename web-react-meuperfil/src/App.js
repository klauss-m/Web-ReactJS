import React from 'react';
import data from './utils/data';
import { StyledAvatar, StyledBio, StyledH1, StyledRow } from './styles/styles';

export default function App() {
  return (
    <div>
      <StyledAvatar src={data.img} alt="avatar" />
      <StyledRow>
        <StyledH1>Nome:</StyledH1>
        <StyledBio>{data.name}</StyledBio>
      </StyledRow>
      <StyledRow>
        <StyledH1>Educação:</StyledH1> <StyledBio>{data.education}</StyledBio>
      </StyledRow>
      <StyledRow>
        <StyledH1>Hobbies:</StyledH1> <StyledBio>{data.hobbies}</StyledBio>
      </StyledRow>
      <StyledRow>
        <StyledH1>Experiência:</StyledH1>{' '}
        <StyledBio>{data.experience}</StyledBio>
      </StyledRow>
      <StyledRow>
        <StyledH1>Projetos:</StyledH1> <StyledBio>{data.projects}</StyledBio>
      </StyledRow>
    </div>
  );
}
