
import { useEffect, useState } from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import AtividadesCards from './components/AtividadesCards';
import api from './API/atividade'

/* atividades.length <= 0 ? setIndex(1) :
      setIndex(Math.max.apply(
        Math,
        atividades.map((item) => item.id)) + 1)

 */

function App() {
  const [index] = useState(0)
  const [atividades, setAtividades] = useState([])
  const [atividade, setAtividade] = useState({id: 0})

  const pegaTodasAtividades = () => {
    const response = api.get('atividade')
    return response.data
  }

  useEffect(() => {
    const getAtividades = () => {
      const todasAtividades = pegaTodasAtividades()
      if (todasAtividades) setAtividades(todasAtividades)
    }
    getAtividades()
  }, [atividades])

  function addAtividade(ativ) {
    setAtividades([...atividades, { ...ativ, id: index }]);
  }

  function cancelarAtividade() {
    setAtividade({ id: 0 })

  }

  function atualizarAtividade(ativ) {
    setAtividades(atividades.map((item) => (item.id === ativ.id ? ativ : item)))
    setAtividade({ id: 0 })
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
          atualizarAtividade={atualizarAtividade}
          cancelarAtividade={cancelarAtividade}
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
