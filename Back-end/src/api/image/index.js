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
 * @apiHeader {String} Authorization Baerer Auth with the token user
 * @apiParam {File} that is a file in `form-data` matched `.png` or `.jgp`
 * @apiSuccess {Object} image Image's data.
 * @apiSuccessExample response is something like this:
 * {
    "id": "5dcecdde82b14a2db0aca8e9",
    "originalname": "710894.jpg",
    "encoding": "7bit",
    "mimetype": "image/jpeg",
    "destination": "./src/uploads",
    "filename": "1573834206556-710894.jpg",
    "path": "src\\uploads\\1573834206556-710894.jpg",
    "size": 3347409,
    "createdAt": "2019-11-15T16:10:06.659Z",
    "updatedAt": "2019-11-15T16:10:06.659Z"
}
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Image not found.
 */
router.post('/',
  token({ required: true }),
  body({ originalname, encoding, mimetype, destination, filename, path, size }),
  upload.array('files'),
  create)

/**
 * @api {get} /images Retrieve images
 * @apiName RetrieveImages
 * @apiGroup Image
 * @apiUse listParams
 * @apiHeader {String} Authorization Baerer Auth with the token user
 * @apiSuccess {Object[]} images List of images.
 * @apiSuccessExample response is something like this:
 * {
    "results": [
        {
            "id": "5dcece8b6e539a1368c7d6f8",
            "originalname": "Hinh1.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "destination": "./src/uploads",
            "filename": "1573834379787-Hinh1.jpg",
            "path": "src\\uploads\\1573834379787-Hinh1.jpg",
            "size": 17355,
            "createdAt": "2019-11-15T16:12:59.816Z",
            "updatedAt": "2019-11-15T16:12:59.816Z"
        },
        {
            "id": "5dcecdde82b14a2db0aca8e9",
            "originalname": "710894.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "destination": "./src/uploads",
            "filename": "1573834206556-710894.jpg",
            "path": "src\\uploads\\1573834206556-710894.jpg",
            "size": 3347409,
            "createdAt": "2019-11-15T16:10:06.659Z",
            "updatedAt": "2019-11-15T16:10:06.659Z"
        }
    ],
    "count": 2
}
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
 * @apiHeader {String} Authorization Baerer Auth with the token user
 * @apiSuccess {Object} image Image's data.
 * @apiSuccessExample response is something like this:
 * {
    "id": "5dcecdde82b14a2db0aca8e9",
    "originalname": "710894.jpg",
    "encoding": "7bit",
    "mimetype": "image/jpeg",
    "destination": "./src/uploads",
    "filename": "1573834206556-710894.jpg",
    "path": "src\\uploads\\1573834206556-710894.jpg",
    "size": 3347409,
    "createdAt": "2019-11-15T16:10:06.659Z",
    "updatedAt": "2019-11-15T16:10:06.659Z"
}
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
 * @apiHeader {String} Authorization Baerer Auth with the token user
 * @apiParam originalname Image's originalname.
 * @apiParam encoding Image's encoding.
 * @apiParam mimetype Image's mimetype.
 * @apiParam destination Image's destination.
 * @apiParam filename Image's filename.
 * @apiParam path Image's path.
 * @apiParam size Image's size.
 * @apiSuccess {Object} image Image's data.
 * @apiSuccessExample response is something like this:
 * {
    "id": "5dcecdde82b14a2db0aca8e9",
    "originalname": "710894.jpg",
    "encoding": "7bit",
    "mimetype": "image/jpeg",
    "destination": "./src/uploads",
    "filename": "1573834206556-710894.jpg",
    "path": "src\\uploads\\1573834206556-710894.jpg",
    "size": 3347409,
    "createdAt": "2019-11-15T16:10:06.659Z",
    "updatedAt": "2019-11-15T16:10:06.659Z"
}
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
