import Error404 from "../error/Error404.js";

function HandlerErrors404(req, res, next) {
  const error404 = new Error404();
  next(error404);
}

export default HandlerErrors404;