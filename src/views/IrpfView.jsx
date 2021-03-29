import { usePerson } from '../hooks/usePerson.hook';

function IrpfView({ className }) {

  const [person] = usePerson();

  return (
    <div className={className}>
      Seu IMPOSTO  &eacute; <span id="irpf">{person.irpf}</span> ==>{" "}
      <strong>{person.irpfDescription}</strong>
    </div>
  );
}

export default IrpfView;
