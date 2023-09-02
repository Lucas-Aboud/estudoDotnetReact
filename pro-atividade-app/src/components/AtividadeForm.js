import React from 'react'

export default function AtividadeForm(props) {
  return (
    <div>
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
                  props.atividades.map((item) => item.id)) +1
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
              onClick={props.addAtividade}
            > 
              Enviar
            </button>  
          </div>
        </form>
    </div>
  )
}
