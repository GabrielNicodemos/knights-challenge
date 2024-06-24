import ErroBase from "./ErrorBase.js";

class ValidationError extends ErroBase {
  constructor(erro) {
    const msgError = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ");

    super(`The following errors were found: ${msgError}`, 400);
  }
}

export default ValidationError;