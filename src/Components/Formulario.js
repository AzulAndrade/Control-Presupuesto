import React, { Fragment, useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";

const Formulario = ({ guardarGasto }) => {
  const [tipo, setTipo] = useState("");
  const [cantidad, setCantidad] = useState(0);
  let [error, setError] = useState(false);

  let agregarGasto = (e) => {
    e.preventDefault();
    //validamos el gasto
    if (cantidad < 1 || isNaN(cantidad) || tipo.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    //construimos el gasto
    const gasto = {
      tipo,
      cantidad,
      id: shortid.generate(),
    };

    console.log(gasto);

    //pasamos el nuevo gasto al componente
    guardarGasto(gasto);
    setTipo("");
    setCantidad(0);
  };
  return (
    <Fragment>
      <form onSubmit={agregarGasto}>
        <div className="title-gastos">
          <h3>Gastos</h3>
          {error ? <Error mensaje="Presupuesto incorrecto" /> : null}
        </div>
        <div className="row-1">
          <select
            className="custom-select"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option selected>Tipo de compra</option>
            <option value="1">Alquiler</option>
            <option value="2">Expensas</option>
            <option value="3">Gas</option>
            <option value="4">Luz</option>
            <option value="5">Agua</option>
            <option value="6">Supermercado</option>
            <option value="7">Restaurantes</option>
            <option value="8">Oscio</option>
          </select>
        </div>
        <div className="row-1">
          <div className="col-md-14 mb-7">
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              placeholder="$ Cantidad"
              required
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            ></input>
          </div>
        </div>

        <div className="row-1">
          <input
            type="submit"
            className="button-primary u-full-width"
            value="Agregar gasto"
          />
        </div>
      </form>
    </Fragment>
  );
};
Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired
};
export default Formulario;
