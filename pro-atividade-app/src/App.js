import logo from './logo.svg';
import './App.css';

function App() {
  const atividade = [
    {
      'id':1,
      'descrição': 'Primeira atividade',
    },
    {
      'id':2,
      'descrição': 'Segunda atividade',
    },
    {
      'id':3,
      'descrição': 'Terceira atividade',
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>{atividade[0].id} {atividade[0].descrição}</li>
          <li>{atividade[1].id} {atividade[1].descrição}</li>
          <li>{atividade[2].id} {atividade[2].descrição}</li>
          <li>Quarta Atividade</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
