import { Router } from "express";
import passport from "passport";
import passengerController from "./passenger.controller";

const router = Router();

const jwt_auth = passport.authenticate("jwt", { session: false });

router.get("/users", jwt_auth, passengerController.get);
router.get("/users/:id", [jwt_auth], passengerController.getById);
router.get("/users/phone/:phone", [jwt_auth], passengerController.getByPhone);

router.post("/users", [jwt_auth], passengerController.post);

router.put("/users", jwt_auth, passengerController.put);

router.delete("/admin/users/:id", [jwt_auth], passengerController.delete);

module.exports = router;
