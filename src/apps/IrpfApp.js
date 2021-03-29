import { useState } from "react";

import { usePerson } from '../hooks/usePerson.hook';


import IrpfView from "../views/IrpfView";
import IrpfForm from "../views/forms/IrpfForm";
import IrpfController from "../controllers/IrpfController";
import Person from "../domain/Person";

import "./IrpfApp.css";

function IrpfApp() {
  const [,setPerson] = usePerson();
  const [controller,] = useState(new IrpfController());
 
  const calculateIrpf = async (totalSalary, dependentsNumber) => {
    var newPerson = new Person(parseFloat(totalSalary),parseInt(dependentsNumber));

    const calculatedPerson = await controller.calculate(newPerson.toObject());
    setPerson(calculatedPerson);
  };

  return (
    <div className="container">
      <div className="data">
        <div className="form"> 
          <IrpfForm onSubmit={calculateIrpf} />
        </div>
      </div>
      <hr />
      <IrpfView class="data" />
    </div>
  );
}

export default IrpfApp;
