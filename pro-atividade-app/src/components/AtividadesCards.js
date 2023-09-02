import React from "react";

export default function AtividadesCards(props) {
  return (
    <div className="mt-3">
      {props.atividades.map((ativ, index) => (
        <div
          key={index}
          className={
            "card mb-2 shadow-sm border-" + props.rostoPrioridade(ativ.prioridade)
          }
        >
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-tittle">
                <span className="badge bg-secondary me-1">{ativ.id}</span>-{" "}
                {ativ.titulo}
              </h5>
              <h6>
                Prioridade:
                <span className="ms-1 text-black">
                  <i
                    className={
                      "me-1 far fa-" + props.rostoPrioridade(ativ.prioridade, true)
                    }
                  ></i>
                  {props.prioridadeLabel(ativ.prioridade)}
                </span>
              </h6>
            </div>
            <p className="card-text">{ativ.descrição}</p>
            <div className="d-flex justify-content-end pt-2 m-0 border-top">
              <button className="btn btn-sm btn-outline-primary me-2">
                <i className="fas fa-pen me-2"></i>
                Editar
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => {
                  props.deletarAtividades(ativ.id);
                }}
              >
                <i className="fas fa-trash me-2"></i>
                Deletar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
