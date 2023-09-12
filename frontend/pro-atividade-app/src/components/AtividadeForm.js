import React, { useEffect, useState } from "react";

const atividadeInicial = {
  id: 0,
  titulo: "",
  prioridade: 0,
  descrição: "",
};

export default function AtividadeForm(props) {
  const [atividade, setAtividade] = useState(atividadeAtual());

  useEffect(() => { 
    if (props.atividadeSelecionada.id !== 0)
      setAtividade(props.atividadeSelecionada);
  }, [props.atividadeSelecionada]);

  const inputTextHandler = (e) => {
    const { name, value } = e.target;

    setAtividade({ ...atividade, [name]: value });
  };

  const handleCancelar = (e) => {
    e.preventDefault();
    props.cancelarAtividade()

    setAtividade(atividadeInicial);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if (props.atividadeSelecionada.id !== 0)
      props.atualizarAtividade(atividade)
    else 
      props.addAtividade(atividade)
    setAtividade(atividadeInicial)
  }

  function atividadeAtual() {
    if (props.atividadeSelecionada.id !== 0) {
      return props.atividadeSelecionada;
    } else {
      return atividadeInicial;
    }
  }

  return (
    <>
      <h1>
        Atividade {atividade.id !== 0 ? atividade.id : ""}
      </h1>
      <form className="row g-3" onSubmit={handleSubmit}>
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
          {atividade.id === 0 ? (
            <button className="btn btn-outline-primary" type="submit">
              <i className="fas fa-plus me-2"></i>
              Enviar
            </button>
          ) : (
            <>
              <button className="btn btn-outline-success me-2" type="submit">
                <i className="fa-solid fa-check me-2"></i>
                Atualizar
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={handleCancelar}
              >
                <i className="fa-solid fa-arrow-rotate-left me-2"></i>
                Desfazer
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
}
