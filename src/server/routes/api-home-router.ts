import express from 'express';

const router = express.Router();


/** GET /api-status - Check service status **/
router.get('', (req, res) =>
res.redirect(301, "/api")
);

export default router;