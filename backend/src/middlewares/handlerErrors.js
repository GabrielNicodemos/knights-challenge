
import mongoose from "mongoose";
import IncorrectRequest from "../error/IncorrectRequest.js";
import ErroBase from "../error/ErrorBase.js";
import ValidationError from "../error/ValidationError.js";
import Error404 from "../error/Error404.js";

function handlerErrors(erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
      new IncorrectRequest().sendResponse(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
      new ValidationError(erro).sendResponse(res);
    } else if (erro instanceof Error404) {
      erro.sendResponse(res);
    } else {
      new ErroBase().sendResponse(res);
    }
  }

export default handlerErrors;1