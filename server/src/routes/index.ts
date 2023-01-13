import { Router } from "express";
import { authController } from "../controller";

const router = Router();

router.post("/auth", authController);

export {
    router
}