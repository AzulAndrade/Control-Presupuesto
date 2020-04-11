import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Pregunta = ({ setPresupuesto, setRestante }) => {
  //definimos el state
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //funcion que lee el presupuesto
  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
  };
  return (
    <Fragment>
      <h3>Coloca tu presupuesto</h3>
      {error ? <Error mensaje="El presupuesto es inválido" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <div className="row-1">
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            placeholder="$ Presupuesto"
            required
            onChange={definirPresupuesto}
          ></input>
        </div>
        <div className="row-1">
          <input
            type="submit"
            className="button-primary u-full-width"
            value="Definir Presupuesto"
          />
        </div>
      </form>
    </Fragment>
  );
};
Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired
};
export default Pregunta;
