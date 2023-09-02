
import { useState } from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import AtividadesCards from './components/AtividadesCards';


let initialState = [
  {
    id: 1,
    prioridade: '',
    titulo: 'Primeira atividade',
    descrição: 'Descreva aqui a atividade',
  },
]

function App() {
  const [atividades, setAtividades] = useState(initialState)

  function addAtividade(e) {
    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').value,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
      descrição: document.getElementById('descrição').value,

    }
    console.log(atividades);
    setAtividades([...atividades, { ...atividade }]);
  }

  function deletarAtividades(id) {
    const atividadesFiltradas = atividades.filter(atividades => atividades.id !== id)
    setAtividades([...atividadesFiltradas])
  }

  function prioridadeLabel(param) {
    switch (param) {
      case '1':
        return 'Baixa'
      case '2':
        return 'Normal'
      case '3':
        return 'Alta'
      default:
        return 'Não Definido'
    }
  }

  function rostoPrioridade(param, icone) {
    switch (param) {
      case '1':
        return icone ? 'smile' : 'success'
      case '2':
        return icone ? 'meh' : 'dark'
      case '3':
        return icone ? 'frown' : 'warning'
      default:
        return 'Não Definido'
    }
  }


  return (
    <>
      <div className="div justify-content-center ms-5 me-5 pt-5">
        <AtividadeForm
          addAtividade={addAtividade}
          atividades={atividades}
        />
        <AtividadesCards
          atividades={atividades}
          deletarAtividades={deletarAtividades}
          rostoPrioridade={rostoPrioridade}
          prioridadeLabel={prioridadeLabel}
        />
      </div>
    </>
  )
}

export default App;
