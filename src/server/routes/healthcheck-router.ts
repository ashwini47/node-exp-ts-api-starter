import express from 'express';

const router = express.Router();


/** GET /api-status - Check service status **/
router.get('/', (req, res) =>
  res.json({
    message:"welcome to API home",
    status: "ok"
  })
);
router.get('/status', (req, res) =>
  res.json({
    status: "ok",
    message:"API running normally"
  })
);

export default router;