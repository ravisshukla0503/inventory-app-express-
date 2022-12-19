/** @format */

const configMongoose = require("../model/configModel");
const itemsModel = require("../model/itemsModel");

const routesControllers = {
  renderAddItems: (req, res, next) => {
    res.render("addItems");
    next();
  },

  addItems: async (req, res) => {
    let data = new itemsModel(req.body);
    data = await data.save();
    res.send(data);
  },

  readItems: async (req, res) => {
    let data = await itemsModel.find();
    res.send(data);
  },

  searchItem: async (req, res) => {
    let data = await itemsModel.find({
      $or: [
        { item: { $regex: req.params.key } },
        { category: { $regex: req.params.key } },
        { price: { $regex: req.params.key } },
      ],
    });
    res.send(data);
  },

  updateItem: async (req, res) => {
    let data = await itemsModel.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send(data);
  },

  renderHomePage: async (req, res) => {
    let data = await itemsModel.find();
    res.render("home", { data });
  },
};

module.exports = routesControllers;

