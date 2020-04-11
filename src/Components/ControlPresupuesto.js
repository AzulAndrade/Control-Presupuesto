import React, { Fragment } from "react";
import PropTypes from "prop-types";
// import {revisarPresupuesto} from '../helpers';

const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <Fragment>
      <div className="contenido-cuatro contenido">
        <div className="column1-restante">
          <h3 className="card-text-price">Presupuesto:</h3>
        </div>
        <div className="column2-restante">
          <h3 className="card-text-restante">$ {presupuesto}</h3>
        </div>
      </div>
      <div className="contenido-cinco contenido">
        <div className="column1-restante">
          <h3 className="card-text-price">Cantidad Restante:</h3>
        </div>
        <div className="column2-restante">
          <h3 className="card-text-restante">$ {restante}</h3>
        </div>
      </div>
    </Fragment>
  );
};
ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};
export default ControlPresupuesto;
