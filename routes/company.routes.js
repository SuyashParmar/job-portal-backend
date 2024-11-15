import express from 'express';
import { deleteCompany, getCompany, getCompanyById, registerCompany, updateCompany } from '../controllers/company.controller.js';

import isAuthenticated from '../middleware/isAuthenticated.js';
import { singleUpload } from '../middleware/multer.js';



const router = express.Router();

router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getCompanyById);
router.route("/update/:id").put(isAuthenticated,singleUpload,updateCompany);
router.route('/delete/:id').delete(isAuthenticated,deleteCompany);
export default router;
