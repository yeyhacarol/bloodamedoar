import Input from "../../../../form/Input/Input";
import Submit from "../../../../form/Submit/Submit";

const BloodcenterAccount = () => {
  return (
    <>
      <h3>Contato</h3>
      <Input
        mask="(00) 00000-0000"
        placeholder="Número de telefone" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} */
      />
      <Input
        type="email"
        placeholder="E-mail" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} */
      />

      <h3>Conta</h3>
      <Input
        type="password"
        placeholder="Senha" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} */
      />
      <Input
        type="password"
        placeholder="Confirmação de senha" /* error={} errorMessage={} name="bloodcenterName" value={} handleOnChange={} */
      />

      <Submit
        action="Cadastrar"
        instruction="Já possui cadastro?"
        link="Entrar"
        to="/login"
      />
    </>
  );
};

export default BloodcenterAccount;
