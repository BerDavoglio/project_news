import { Router } from 'express';
import newController from '../../controllers/Newsletter/newsletter_controller';

import loginRequired from '../../middlewares/login_required';

const router = new Router();

router.post('/', loginRequired, newController.store); // Create a Newsletter
router.put('/:id', loginRequired, newController.update); // Update a Newsletter
router.delete('/:id', loginRequired, newController.delete); // Delete a Newsletter

router.get('/news/:id', newController.index); // Get one Newsletters
router.get('/all/', newController.show); // Get all Newsletters
router.get('/search/:message', newController.showSearch); // Get all Newsletters Search
router.get('/daily/:ischoosen', newController.showDaily); // Get all Newsletters Daily
router.get('/weekly/:ischoosen', newController.showWeekly); // Get all Newsletters Weekly
router.get('/monthly/:ischoosen', newController.showMonthly); // Get all Newsletters Monthly
router.get('/globaly/:ischoosen', newController.showGlobaly); // Get all Newsletters Globaly

export default router;
