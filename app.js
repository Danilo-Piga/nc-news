const express = require("express");
const { getTopics } = require("./Controllers/getTopics.controller");
const { getEndPoints } = require("./Controllers/getEndpoint.controller");
const { getArticles, getArticleId } = require("./Controllers/getArticle.controller");
const { errorHandler } = require("./Controllers/errors.controller");

const app = express();

app.get("/api/topics", getTopics);
app.get("/api", getEndPoints);
app.get("/api/articles/:article_id", getArticleId);
app.get("/api/articles", getArticles);

app.use(errorHandler);

module.exports = app;