const express = require("express");
const newsRouter = express.Router();

const {
  multerUploadImage,
  create,
  list,
  read,
  newsById,
  deleteNews,
  newsListType,
} = require("../../controllers/admin/news");

newsRouter.post(
  "/news/create",
  body("title", "length should be under 50").isLength({ max: 250 }),
  body("description", "length should be under 50").isLength({ max: 4000 }),
  body("type", "length should be under 50").isLength({ max: 50 }),
  multerUploadImage,
  create
);
newsRouter.get("/news", list);
newsRouter.delete("/news/delete/:id", deleteNews);
newsRouter.get("/news/show/:newsId", read);
newsRouter.get("/news/list/type", newsListType);

newsRouter.param("newsId", newsById);

module.exports = newsRouter;
