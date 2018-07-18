const router = require("express").Router();
const postsController = require("../controllers/postsController");

// Matches with "/api/posts"
router.route("/api/posts")
  .get(postsController.findAll)
  .post(postsController.create);

// Matches with "/api/post/:id"
router
  .route("/api/posts/:id")
  .get(postsController.findById)
  .put(postsController.update)
  .delete(postsController.remove);

module.exports = router;
