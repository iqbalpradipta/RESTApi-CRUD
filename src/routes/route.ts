import * as express from "express"
import NationsController from "../controllers/Nations-controller"

const router = express.Router()

router.get('/nations', NationsController.find)
router.get('/nations/:id', NationsController.findById)
router.post('/nations', NationsController.create)
router.put('/nations/:id', NationsController.put)
router.delete('/nations/:id', NationsController.del)


export default router
