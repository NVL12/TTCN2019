import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { upload } from '../../services/image'
import { schema } from './model'
import { token } from '../../services/passport';
export Image, { schema } from './model'

const router = new Router()
const { originalname, encoding, mimetype, destination, filename, path, size } = schema.tree

/**
 * @api {post} /images Create image
 * @apiName CreateImage
 * @apiGroup Image
 * @apiParam originalname Image's originalname.
 * @apiParam encoding Image's encoding.
 * @apiParam mimetype Image's mimetype.
 * @apiParam destination Image's destination.
 * @apiParam filename Image's filename.
 * @apiParam path Image's path.
 * @apiParam size Image's size.
 * @apiSuccess {Object} image Image's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Image not found.
 */
router.post('/',
  token({ required: true }),
  body({ originalname, encoding, mimetype, destination, filename, path, size }),
  upload.single('file'),
  create)

/**
 * @api {get} /images Retrieve images
 * @apiName RetrieveImages
 * @apiGroup Image
 * @apiUse listParams
 * @apiSuccess {Object[]} images List of images.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  token({ required: true }),
  query(),
  index)

/**
 * @api {get} /images/:id Retrieve image
 * @apiName RetrieveImage
 * @apiGroup Image
 * @apiSuccess {Object} image Image's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Image not found.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {put} /images/:id Update image
 * @apiName UpdateImage
 * @apiGroup Image
 * @apiParam originalname Image's originalname.
 * @apiParam encoding Image's encoding.
 * @apiParam mimetype Image's mimetype.
 * @apiParam destination Image's destination.
 * @apiParam filename Image's filename.
 * @apiParam path Image's path.
 * @apiParam size Image's size.
 * @apiSuccess {Object} image Image's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Image not found.
 */
router.put('/:id',
  token({ required: true }),
  body({ originalname, encoding, mimetype, destination, filename, path, size }),
  update)

/**
 * @api {delete} /images/:id Delete image
 * @apiName DeleteImage
 * @apiGroup Image
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Image not found.
 */
router.delete('/:id',
  token({ required: true }),
  destroy)

export default router
