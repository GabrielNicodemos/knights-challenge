import ErroBase from "./ErrorBase.js";

class IncorrectRequest extends ErroBase {
  constructor() {
    super("One or more data provided is incorrect", 400);
  }
}

export default IncorrectRequest;