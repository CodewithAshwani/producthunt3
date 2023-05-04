const products = async (req, res) => {
  res.stats(200).json({ message: "i am get all the products" });
};
module.exports = {
  products,
};
