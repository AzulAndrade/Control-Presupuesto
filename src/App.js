import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pregunta from "./Components/Pregunta";
import Formulario from "./Components/Formulario";
import Listado from "./Components/Listado";
import ControlPresupuesto from "./Components/ControlPresupuesto";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  //gastos es un objeto
  const [gastos, guardarGastos] = useState([]);
  //gasto individual que va a servir para restar esa cantidad al presupuesto restante
  //es {} porque gasto es un objeto
  const [gasto, guardarGasto] = useState({});
  //useEffect que actualiza el presupuesto restante
  useEffect(() => {
    //agrega el nuevo presupuesto
    guardarGastos([...gastos, gasto]);
    //resta el nuevo gasto del presupuesto restante
    //para eso creamos una variable presupuestoRestante que actualizara cada vez que se agregue un nuevo gasto
    const presupuestoRestante = restante - gasto.cantidad;
    setRestante(presupuestoRestante);
  }, [gasto]);
  //Agregamos un nuevo gasto
  const agregarNuevoGasto = (gasto) => {
    guardarGastos([
      //trae todos los gastos guardados previamente, y ademas el nuevo gasto
      ...gastos,
      gasto,
    ]);
  };
  return (
    <div>
      <h2>E-Wallet</h2>
      <div className="abc">
        <div className="contenido-terciario contenido">
          <div className="row-1">
            <Pregunta
              //aca van las funciones para guardar el presupuesto y el restante
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
            />
          </div>
        </div>
      </div>
      <div className="abc">
        <div className="contenido-cuatro contenido">
          <div className="column1-restante">
            <h3 className="card-text-price">Cantidad Restante:</h3>
          </div>
          <div className="column2-restante">
            <h3 className="card-text-restante">$ 42000</h3>
          </div>
        </div>
      </div>
      <div className="abc">
        <div className="contenido-principal contenido">
          <Formulario
            guardarGasto={guardarGasto}
          />
        </div>
      </div>
      <div className="abc">
        <Listado gastos={gastos} />
      </div>
      <div className="abc">
        <ControlPresupuesto presupuesto={presupuesto} restante={restante} />
      </div>

      <div className="abc">
        <div className="abc-secundario">
          <div className="contenido-secundario contenido">
            <div className="column1">
              <img
                src="supermarket.png"
                alt="Avatar"
                className="logo-supermarket"
              ></img>
            </div>
            <div className="column2">
              <p className="card-text-title">Supermercado</p>
            </div>
            <div className="column3">
              <p className="card-text-price">$1500</p>
            </div>
          </div>
          <div className="contenido-secundario contenido">
            <div className="column1">
              <img
                src="supermarket.png"
                alt="Avatar"
                className="logo-supermarket"
              ></img>
            </div>
            <div className="column2">
              <p className="card-text-title">Supermercado</p>
            </div>
            <div className="column3">
              <p className="card-text-price">$1500</p>
            </div>
          </div>
          <div className="contenido-secundario contenido">
            <div className="column1">
              <img
                src="supermarket.png"
                alt="Avatar"
                className="logo-supermarket"
              ></img>
            </div>
            <div className="column2">
              <p className="card-text-title">Supermercado</p>
            </div>
            <div className="column3">
              <p className="card-text-price">$1500</p>
            </div>
          </div>
          <div className="contenido-secundario contenido">
            <div className="column1">
              <img
                src="supermarket.png"
                alt="Avatar"
                className="logo-supermarket"
              ></img>
            </div>
            <div className="column2">
              <p className="card-text-title">Supermercado</p>
            </div>
            <div className="column3">
              <p className="card-text-price">$1500</p>
            </div>
          </div>
        </div>
        <div className="abc-secundario">
          <div className="contenido-secundario contenido">
            <div className="column1">
              <img
                src="supermarket.png"
                alt="Avatar"
                className="logo-supermarket"
              ></img>
            </div>
            <div className="column2">
              <p className="card-text-title">Supermercado</p>
            </div>
            <div className="column3">
              <p className="card-text-price">$1500</p>
            </div>
          </div>
          <div className="contenido-secundario contenido">
            <div className="column1">
              <img
                src="supermarket.png"
                alt="Avatar"
                className="logo-supermarket"
              ></img>
            </div>
            <div className="column2">
              <p className="card-text-title">Supermercado</p>
            </div>
            <div className="column3">
              <p className="card-text-price">$1500</p>
            </div>
          </div>
          <div className="contenido-secundario contenido">
            <div className="column1">
              <img
                src="supermarket.png"
                alt="Avatar"
                className="logo-supermarket"
              ></img>
            </div>
            <div className="column2">
              <p className="card-text-title">Supermercado</p>
            </div>
            <div className="column3">
              <p className="card-text-price">$1500</p>
            </div>
          </div>
          <div className="contenido-secundario contenido">
            <div className="column1">
              <img
                src="supermarket.png"
                alt="Avatar"
                className="logo-supermarket"
              ></img>
            </div>
            <div className="column2">
              <p className="card-text-title">Supermercado</p>
            </div>
            <div className="column3">
              <p className="card-text-price">$1500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
