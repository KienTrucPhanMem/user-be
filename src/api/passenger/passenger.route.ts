import { Router } from "express";
import { validateToken } from "../../middlewares/authen";
// import passport from "passport";
import passengerController from "./passenger.controller";

const router = Router();

const authenMiddleware = validateToken("USER");
// const jwt_auth = passport.authenticate("jwt", { session: false });

router.get("/passengers", authenMiddleware, passengerController.get);
router.get("/passengers/:id", authenMiddleware, passengerController.getById);
router.get(
  "/passengers/phone/:phone",
  authenMiddleware,
  passengerController.getByPhone
);

router.post("/passengers", authenMiddleware, passengerController.post);
router.post(
  "/passengers/push-notification",
  authenMiddleware,
  passengerController.pushNotification
);

router.put("/passengers/:id", authenMiddleware, passengerController.put);

router.delete("/passengers/:id", authenMiddleware, passengerController.delete);

module.exports = router;
