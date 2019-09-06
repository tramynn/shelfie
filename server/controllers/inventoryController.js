const addProduct = () => {
  const dbInstance = req.app.get("db");
  const { image_url, product_name, price } = req.body;
};

const getAllProducts = () => {
  const dbInstance = req.app.get("db");
};

const getOneProduct = () => {
  const dbInstance = req.app.get("db");
};

const editProduct = () => {
  const dbInstance = req.app.get("db");
};

const deleteProduct = () => {
  const dbInstance = req.app.get("db");
};

module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
  editProduct,
  deleteProduct
};
