import express from 'express';
import userCtrl from '../controllers/user-controller';
import jwtAuthCtrl from '../controllers/Jwt-controllers';
const router = express.Router();

router.route('/')
  /** GET /api/users - Get list of users */
  .get(jwtAuthCtrl,userCtrl.list)

  /** POST /api/users - Create new user */
  .post(userCtrl.create);

router.route('/:userId')
  /** GET /api/users/:userId - Get user */
  .get(userCtrl.get)

  /** PUT /api/users/:userId - Update user */
  .put(userCtrl.update)

  /** DELETE /api/users/:userId - Delete user */
  .delete(userCtrl.remove);

/** Load user when API with userId route parameter is hit */
router.param('userId', userCtrl.load);

export default router;