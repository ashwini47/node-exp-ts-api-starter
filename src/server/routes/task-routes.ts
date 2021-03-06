import express from 'express';
import {validate} from 'express-validation';
import taskCtrl from '../controllers/task-controllers';
import {payloadValidator} from '../request-validators/payload-validator';
import {payloadSchemas} from '../request-validators/payload-schemas';
const router = express.Router();

router.route('/')
  /** GET /api/tasks - Get list of tasks */
  .get(taskCtrl.list)

  /** POST /api/tasks - Create new task */
  .post(payloadValidator(payloadSchemas.TaskSchema),taskCtrl.create);
  //.post(taskCtrl.create);

router.route('/:taskId')
  /** GET /api/tasks/:taskId - Get task */
  .get(taskCtrl.get)

  /** PUT /api/tasks/:taskId - Update task */
  .put(taskCtrl.update)

  /** DELETE /api/tasks/:taskId - Delete task */
  .delete(taskCtrl.remove);

/** Load task when API with taskId route parameter is hit */
//router.param('taskId', validate(validations.getTask));
router.param('taskId', taskCtrl.load);

export default router;