
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
  const [atividade, setAtividade] = useState({})

  function addAtividade(e) {
    e.preventDefault();

    const atividade = {
      id: Math.max.apply(
          Math,
          atividades.map((item) => item.id)
        ) + 1,
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

  function pegarAtividade(id) {
    const atividade = atividades.filter(atividades => atividades.id === id)
    setAtividade(atividade[0])
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
          atividadeSelecionada={atividade}
        />
        <AtividadesCards
          atividades={atividades}
          deletarAtividades={deletarAtividades}
          rostoPrioridade={rostoPrioridade}
          prioridadeLabel={prioridadeLabel}
          pegarAtividade={pegarAtividade}
        />
      </div>
    </>
  )
}

export default App;
