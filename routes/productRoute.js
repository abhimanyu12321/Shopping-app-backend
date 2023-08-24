const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReview, getAdminProducts } = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();




router.get("/products", getAllProducts)
router.post("/admin/product/new", isAuthenticatedUser, authorizeRoles("admin"), createProduct)
router.put("/admin/product/:id", isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
router.delete("/admin/product/:id", isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)
router.get("/product/:id", getProductDetails)
router.put("/review", isAuthenticatedUser, createProductReview)
router.get("/reviews", getProductReviews)
router.delete("/reviews", isAuthenticatedUser, deleteReview)
router.get("/admin/products", isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);


module.exports = router;