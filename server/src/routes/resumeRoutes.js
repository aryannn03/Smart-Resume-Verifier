const express = require("express");
const multer = require("multer");
const { uploadResume, getMyResumes } = require("../controllers/resumeController");
const { authenticate, authorize } = require("../middlewares/auth");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post(
  "/upload",
  authenticate,
  authorize("recruiter"),
  upload.single("resume"),
  uploadResume
);

router.get(
  "/my",
  authenticate,
  authorize("recruiter"),
  getMyResumes
);

module.exports = router;
