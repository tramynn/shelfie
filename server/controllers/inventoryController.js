const products = [
  {
    id: 1,
    imageURL: "",
    productName: "",
    price: ""
  }
];

const addProduct = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { image_url, product_name, price } = req.body;

  dbInstance
    .addProduct([image_url, product_name, price])
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          "Oops! Something went wrong. Our engineers have been informed."
      });
      console.log(err);
    });
};

const getInventory = (req, res, next) => {
  const dbInstance = req.app.get("db");
  dbInstance
    .getInventory()
    .then(products => {
      res.status(200).json(products);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          "Oops! Something went wrong. Our engineers have been informed."
      });
      console.log(err);
    });
};

const getOneProduct = (req, res, next) => {
  const dbInstance = req.app.get("db");

  const { id } = req.params;

  dbInstance
    .getOneProduct(id)
    .then(product => {
      res.status(200).json(product);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          "Oops! Something went wrong. Our engineers have been informed."
      });
      console.log(err);
    });
};

const editProduct = (req, res, next) => {
  const dbInstance = req.app.get("db");

  const { params, query } = req;

  dbInstance
    .editProduct([params.id, query])
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          "Oops! Something went wrong. Our engineers have been informed."
      });
      console.log(err);
    });
};

const deleteProduct = (req, res, next) => {
  const dbInstance = req.app.get("db");

  const { id } = req.params;

  dbInstance
    .deleteProduct(id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          "Oops! Something went wrong. Our engineers have been informed."
      });
      console.log(err);
    });
};

module.exports = {
  addProduct,
  getInventory,
  getOneProduct,
  editProduct,
  deleteProduct
};
