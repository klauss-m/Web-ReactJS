import styled from 'styled-components';

const StyledAvatar = styled.img`
  width: ${(props) => props.size || '100px'};
  height: ${(props) => props.size || '100px'};
  border-radius: 50%;
  border: 1px solid #fff;
  margin: 0 auto;
  display: block;
  margin-bottom: 20px;
`;

const StyledH1 = styled.h1`
  font-size: ${(props) => props.size || '1.5rem'};
  font-weight: bold;
  text-align: center;
  margin: 5px;
`;

const StyledBio = styled.p`
  font-size: ${(props) => props.size || '1.5rem'};
  text-align: center;
  margin: 5px;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export { StyledAvatar, StyledH1, StyledBio, StyledRow };
