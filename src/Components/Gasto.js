import React from "react";
import PropTypes from "prop-types";

const Gasto = ({ gasto }) => (
  <div className="abc-secundario">
    <div className="contenido-secundario contenido">
      <div className="column1">
        <img
          src="rich.png"
          alt="Avatar"
          className="logo-supermarket"
        ></img>
      </div>
      <div className="column2">
        <p className="card-text-title"> {gasto.tipo}</p>
      </div>
      <div className="column3">
        <p className="card-text-price">$ {gasto.cantidad}</p>
      </div>
    </div>
  </div>
);
Gasto.propTypes = {
  gasto: PropTypes.object.isRequired,
};
export default Gasto;
