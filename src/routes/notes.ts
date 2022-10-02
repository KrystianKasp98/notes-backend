import {Router} from "express";
import ControllerNotes from "../controllers/notes";

const router = Router();

router.get("/", ControllerNotes.getAll);
router.get("/:id", ControllerNotes.getById);


export default router;
