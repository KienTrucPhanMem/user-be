import { Router } from "express";
// import passport from "passport";
import passengerController from "./passenger.controller";

const router = Router();

// const jwt_auth = passport.authenticate("jwt", { session: false });

router.get("/passengers", passengerController.get);
router.get("/passengers/:id", passengerController.getById);
router.get(
  "/passengers/phone/:phone",

  passengerController.getByPhone
);

router.post("/passengers", passengerController.post);

router.put("/passengers", passengerController.put);

router.delete("/passengers/:id", passengerController.delete);

module.exports = router;
