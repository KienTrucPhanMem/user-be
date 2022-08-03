import { Router } from "express";
import passport from "passport";
import passengerController from "./passenger.controller";

const router = Router();

const jwt_auth = passport.authenticate("jwt", { session: false });

router.get("/passengers", jwt_auth, passengerController.get);
router.get("/passengers/:id", [jwt_auth], passengerController.getById);
router.get(
  "/passengers/phone/:phone",
  [jwt_auth],
  passengerController.getByPhone
);

router.post("/passengers", [jwt_auth], passengerController.post);

router.put("/passengers", jwt_auth, passengerController.put);

router.delete("/passengers/:id", [jwt_auth], passengerController.delete);

module.exports = router;
