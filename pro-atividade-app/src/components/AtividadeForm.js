import React, { useEffect, useState } from "react";

export default function AtividadeForm(props) {
  const [atividade, setAtividade] = useState({});

  useEffect(() => {
    
  })

  const inputTextHandler = (e) => {
    const { name, value } = e.target;

    setAtividade({ ...atividade, [name]: value });
  };

  

  return (
    <div>
      <form className="row g-3">
        {/* <div className="col-md-6">
          <label className="form-label">ID:</label>
          <input
            name="id"
            id="id"
            onChange={inputTextHandler}
            type="text"
            className="form-control"
            placeholder="Nº Id..."
            value={atividade.id}
          />
        </div> */}
        <div className="col-md-6">
          <label className="form-label">Título:</label>
          <input
            name="titulo"
            id="titulo"
            onChange={inputTextHandler}
            type="text"
            className="form-control"
            placeholder="Título"
            value={atividade.titulo}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Prioridade:</label>
          <select
            name="prioridade"
            id="prioridade"
            onChange={inputTextHandler}
            className="form-select"
            value={atividade.prioridade}
          >
            <option defaultValue="0">Selecione...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>
        <div className="col-md-12">
          <label className="form-label">Descrição:</label>
          <textarea
            name="descrição"
            id="descrição"
            onChange={inputTextHandler}
            type="text"
            className="form-control"
            placeholder="Descrição"
            value={atividade.descrição}
          />
        </div>
        <hr />
        <div className="col-12">
          <button
            className="btn btn-outline-primary"
            onClick={props.addAtividade}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
