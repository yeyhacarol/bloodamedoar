import Input from "../../../../form/Input/Input";
import Submit from "../../../../form/Submit/Submit";

const BloodcenterAddress = () => {
  return (
    <>
      <h3>Endereço</h3>
      <Input
        placeholder="CEP" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} */
      />
      <Input
        placeholder="Logradouro" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} */
      />
      <Input
        placeholder="Número" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} */
      />
      <Input
        placeholder="Bairro" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} */
      />
      <Input
        placeholder="Estado" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} */
      />
      <Input
        placeholder="Cidade" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} */
      />
      <Input
        placeholder="Ponto de referência" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} */
      />
      <Submit
        action="Próximo"
        instruction="Já possui cadastro?"
        link="Entrar"
        to="/login"
      />
    </>
  );
};

export default BloodcenterAddress;
