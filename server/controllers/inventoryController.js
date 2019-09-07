const addProduct = (req, res, next) => {
  const dbInstance = req.app.get("db");
  // when destructuring off of req.body, you want to make sure the names are aligned or
  // setting them to the naming convention from sql
  const { imageURL: image_url, productName: product_name, price } = req.body;

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

const editProduct = (req, res, next) => {
  const dbInstance = req.app.get("db");

  const { params } = req;
  // always destucture req.body bc put
  const { image_url, product_name, price } = req.body;

  dbInstance
    .editProduct(image_url, product_name, price, params.id)
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

module.exports = {
  addProduct,
  getInventory,
  editProduct,
  deleteProduct
};
