import styled from 'styled-components';
const BasicTitle = styled.h1`
  text-transform: uppercase;
  text-align: center;
  /* color: ${(props) => props.special && 'red'}; */
  /* color: ${({ special }) => special && 'red'}; */
  color: ${({ special }) => (special ? 'red' : 'blue')};
`;

export default BasicTitle;
