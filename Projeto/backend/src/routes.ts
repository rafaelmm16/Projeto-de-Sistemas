import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import PointsController from './controllers/PointsController';
import UsersController from './controllers/UsersController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/points', PointsController.index);
routes.get('/points/:id', PointsController.show);

// Create Point
routes.post(
  "/points/create",
  upload.array("images"),
  PointsController.create
);

// Get a specified Point
routes.get("/points/:id", PointsController.show);

// Get all Point
routes.get("/points", PointsController.index);

// Get accepted Point
//routes.get("/points/list/accepted", PointsController.accepted);

// Get Pendents Point
//routes.get("/points/list/pendents", PointsController.pendents);

// Edit Point
routes.post(
  "/points/edit",
  upload.array("images"),
  //PointsController.editOrphanage
);

// Delete Point
//routes.delete("/points/delete/:id", PointsController.deleteOrphanage);

// Accept Point
//routes.post("/points/accept/:id", PointsController.acceptOrphanage);

// Register an User
routes.post("/register", UsersController.register);

// Login an User
routes.post("/login", UsersController.login);

// Get an User
routes.get("/user/:email", UsersController.show);

// Forgot Password
routes.post("/forgot-password", UsersController.forgotPassword);

// Change Password
routes.post("/change-password", UsersController.changePassword);

export default routes;