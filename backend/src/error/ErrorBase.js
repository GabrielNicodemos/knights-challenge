class ErroBase extends Error {
    constructor(mensagem="Internal Server Error", status=500) {
      super();
      this.message = mensagem;
      this.status = status;
    }

    sendResponse(res) {
      res.status(this.status).send({
        message: this.message,
        status: this.status,
      });
    }
  }

  export default ErroBase;