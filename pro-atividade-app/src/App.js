
import { useState } from 'react';
import './App.css';


let initialState = [
  {
    id: 1,
    descrição: 'Primeira atividade',
  },
]

function App() {
  const [atividades, setAtividades] = useState(initialState)

  function addAtividade(e) {
    e.preventDefault();
    
    const atividade = {
      id: document.getElementById('id').value,
      descrição: document.getElementById('descrição').value,
    }
    console.log(atividades);
    setAtividades([...atividades], {...atividade});
  }

  return (
    <>
      <form>
        <input id="id" type='text' placeholder='Id' />
        <input id='descrição' type='text' placeholder='descrição' />
        <button onClick={addAtividade}> + Atividade</button>  
      </form>

      <div className="mt-3">
        <ul className="list-group" >
          {atividades.map(ativ => (
            <li key={ativ.id} className="list-group-item">
              {ativ.id} - {ativ.descrição}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
