import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './global-styles';
import { useState } from 'react';

const BaseTheme = {
  color: '#222',
  background: '#fff',
};
const DarkTheme = {
  color: '#fff',
  background: '#222',
};

const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${({ theme }) => theme.background};
`;

function App() {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme ? BaseTheme : DarkTheme}>
      <GlobalStyles />
      <Container>
        <h1>hello world</h1>
        <button className="btn" onClick={toggleTheme}>
          toggle me
        </button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
