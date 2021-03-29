import { useInput } from "../../hooks/useInput.hook";
import { usePerson } from '../../hooks/usePerson.hook';

function IrpfForm({ onSubmit }) {
  const [person] = usePerson();

  const [totalSalary, , salaryProps] = useInput(0.0);
  const [dependentsNumber, , dependentsProps] = useInput(0);

  const submit = (evt) => {
    evt.preventDefault();
    onSubmit(totalSalary, dependentsNumber);
  };

  return (
    <form onSubmit={submit}>
      <div className="row">
        <label>Salário</label>
        <input id="salario" placeholder="0.00" {...salaryProps} />
      </div>
      <div className="row">
        <label>Dependentes</label>
        <input id="dependentes" placeholder="0" {...dependentsProps} />
      </div>
      <button type="submit" className="action">
        Calcular
      </button>
      <hr />
      <label>
        <strong>Salário:</strong>
        <span>{person.totalSalary}</span>
      </label>
      <label>
        <strong>Dependentes:</strong>
        <span>{person.dependentsNumber}</span>
      </label>
    </form>
  );
}

export default IrpfForm;
