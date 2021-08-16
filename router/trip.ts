import * as express from "express";
import { insertSpot } from "@tripController/insertSpot";
import { listPost } from "@tripController/list";
import { listGet } from "@tripController/list";
import { recommend } from "@tripController/recommend";
import { searchPost, searchGet } from "@tripController/search";
import { dbPost } from "@tripController/db";
import { planGet, planPost } from "@tripController/plan";
import { viewGet } from "@tripController/view";
import { planSearchPost } from "@tripController/planSearch";

const router = express.Router();

router.post("/insertSpot", insertSpot);
router.post("/list", listPost);
router.get("/list", listGet);
router.post("/recommend", recommend);
router.post("/search", searchPost);
router.get("/search", searchGet);
router.post("/db", dbPost);
router.post("/plan", planPost);
router.get("/plan", planGet);
router.get("/view", viewGet);
router.post("/planSearch", planSearchPost);

export = router;
