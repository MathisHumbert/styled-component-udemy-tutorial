import styled from 'styled-components';
import ComplexTitle from './components/ComplexTitle';
import AlternativeTitle from './components/AlternativeTitle';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <ComplexTitle title="more complex title" />
      <AlternativeTitle title="alternative title" />
    </div>
  );
}

export default App;
