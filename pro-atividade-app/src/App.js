
import { useState } from 'react';
import './App.css';


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
    setAtividades([...atividades, {...atividade}]);
  }

  function deletarAtividades(id) {
    const atividadesFiltradas = atividades.filter(atividades => atividade.id !== id )
  }

  function prioridadeLabel(param) {
    switch(param) {
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
    switch(param) {
      case '1':
        return icone ? 'smile': 'success'
      case '2':
        return icone ? 'meh': 'dark'
      case '3':
        return icone ? 'frown': 'warning'
      default:
        return 'Não Definido'
    }
  }
  
  
  return (
    <>
      <div className="div justify-content-center ms-5 me-5 pt-5">
        <form className='row g-3'>
          <div className="col-md-6">
            <label className="form-label">
              ID:
            </label>
            <input 
              id="id"
              type="text" 
              className="form-control"
              readOnly
              placeholder='Nº Id...'
              value= {
                Math.max.apply(
                  Math, 
                  atividades.map((item) => item.id)) +1
              }
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">
              Título: 
            </label>
            <input 
              id="titulo" 
              type="text" 
              className="form-control" 
              placeholder='Título'
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">
              Descrição: 
            </label>
            <input 
              id="descrição" 
              type="text" 
              className="form-control" 
              placeholder='Descrição'
            />
          </div>
          <div className="col-md-6">
              <label className="form-label">Prioridade:</label>
              <select id="prioridade" className="form-select">
                <option defaultValue="0">Selecione...</option>
                <option value="1">Baixa</option>
                <option value="2">Normal</option>
                <option value="3">Alta</option>
              </select>
          </div>
          <hr />
          <div className='col-12'>
            <button 
              className='btn btn-outline-primary' 
              onClick={addAtividade}
            > 
              Enviar
            </button>  
          </div>
        </form>

        <div className="mt-3"  >
            {atividades.map((ativ,index) => (
              <div key={index} className={"card mb-2 shadow-sm border-"+ rostoPrioridade(ativ.prioridade)}>
                <div className="card-body">
                  <div className= "d-flex justify-content-between">
                    <h5 className='card-tittle'>
                    <span className="badge bg-secondary me-1">{ativ.id}</span>
                    - {ativ.titulo}
                    </h5>
                    <h6>
                      Prioridade: 
                      <span className='ms-1 text-black'>
                        <i 
                          className={
                            'me-1 far fa-' + 
                            rostoPrioridade(ativ.prioridade, true) 
                          }
                        ></i>
                        {prioridadeLabel(ativ.prioridade)}
                      </span>
                    </h6>
                  </div>
                  <p className="card-text">{ativ.descrição}</p>
                  <div className="d-flex justify-content-end pt-2 m-0 border-top">
                    <button className="btn btn-sm btn-outline-primary me-2">
                      <i className='fas fa-pen me-2'></i>
                      Editar
                    </button>
                    <button className="btn btn-sm btn-outline-danger" onClick={}>
                      <i className='fas fa-trash me-2'></i>
                      Deletar
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default App;
