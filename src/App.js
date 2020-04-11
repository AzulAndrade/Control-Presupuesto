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
  const [creargasto, guardarCrearGasto] = useState(false);

  useEffect(() => {
    if (creargasto) {
      //agrega el nuevo presupuesto
      guardarGastos([...gastos, gasto]);
      //resta el nuevo gasto del presupuesto restante
      //para eso creamos una variable presupuestoRestante que actualizara cada vez que se agregue un nuevo gasto
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);
      guardarCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante]);
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
        <ControlPresupuesto 
        presupuesto={presupuesto} 
        restante={restante} />
      </div>
      <div className="abc">
        <div className="contenido-principal contenido">
          <Formulario
            guardarGasto={guardarGasto}
            guardarCrearGasto={guardarCrearGasto}
          />
        </div>
      </div>
      <div className="abc">
        <Listado gastos={gastos} />
      </div>

      <div className="abc">
        <div className="abc-secundario"></div>
      </div>
    </div>
  );
}

export default App;
