import styled from 'styled-components';

export const DefaultButton = styled.button`
  background: #645cff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  margin: 1rem auto;
  display: block;
  padding: ${({ large }) => large && '2rem'};
  width: 200px;
  font-weight: 400;
`;

export const HipsterButton = styled(DefaultButton)`
  width: 150px;
  background: transparent;
  color: #645cff;
  border: 1px solid #645cff;
  padding: 1rem;
  display: inline-block;
  margin-right: 1rem;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
`;
