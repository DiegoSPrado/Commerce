import ButtonInputs from "../ButtonInputs";
import InputsForm from "../InputsForm";
import LoginHeader from "../LoginHeader";

export function ConfirmTokenFormComponent(
  token: string,
  setToken: (token: string) => void,
  handleRegister: (evt: React.FormEvent) => void
) {
  return (
    <>
    <LoginHeader
        title="Confirme seu Email"
        parag="O token foi enviado para o seu email"
      />
      <form action="" onSubmit={handleRegister}>
        <InputsForm
          onChange={(evt) => setToken(evt.target.value)}
          value={token}
          type="text"
          id="token"
          placeholder="Token"
        />
        <ButtonInputs text="Confirmar" />
        <button className="divWhite">Não recebi, enviar novamente</button>
      </form>
    </>
  );
}