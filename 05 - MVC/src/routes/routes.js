const express = require('express'); 
const postsController = require('../controllers/postsController');
const adminController = require('../controllers/adminController');
const router = express.Router(); 

// Rotas Blog
router.get('/', postsController.index); 
router.get('/post/:id', postsController.show)

// Rotas do Adm 
router.get('/admin', adminController.index); 
router.get("/admin/create", adminController.create); 
router.get("/admin/edit/:id", adminController.edit);
router.post("/admin/create", adminController.save); 
router.post("/admin/delete/:id", adminController.delete);
router.post("/admin/update/:id", adminController.update); 


module.exports = router; 
