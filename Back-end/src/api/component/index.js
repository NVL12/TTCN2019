import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
import { token } from '../../services/passport';
export Component, { schema } from './model';

const router = new Router()
const { title, description, images } = schema.tree

/**
 * @api {post} /components Create component
 * @apiName CreateComponent
 * @apiGroup Component
 * @apiHeader {String} Authorization Baerer Auth with the token user
 * @apiParam title The title of the component.
 * @apiParam description This is the body of the component.
 * @apiParamExample input is something like this:
 * {
	"title": "Đà nẵng đẹp lắm Sài Gòn ơi Sài Gòn ơi",
	"description": "Đà nẵng là một thành phố đáng sống nhất VN",
	"images": ["5dcecdde82b14a2db0aca8e9", "5dcece8b6e539a1368c7d6f8"]
}
 * @apiParam images List `ID` of the Image object.
 * @apiSuccess {Object} component Component's data.
 * @apiSuccessExample response is something like this:
 * {
    "id": "5dced0838284f12da4559d6e",
    "title": "Đà nẵng đẹp lắm Sài Gòn ơi Sài Gòn ơi",
    "description": "Đà nẵng là một thành phố đáng sống nhất VN",
    "images": [
        "5dcecdde82b14a2db0aca8e9",
        "5dcece8b6e539a1368c7d6f8"
    ],
    "createdAt": "2019-11-15T16:21:23.622Z",
    "updatedAt": "2019-11-15T16:21:23.622Z"
}
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Component not found.
 */
router.post('/',
  token({ required: true }),
  body({ title, description, images }),
  create)

/**
 * @api {get} /components Retrieve components
 * @apiName RetrieveComponents
 * @apiGroup Component
 * @apiHeader {String} Authorization Baerer Auth with the token user
 * @apiUse listParams
 * @apiSuccess {Object[]} components List of components.
 * @apiSuccessExample response is something like this:
 * {
    "results": [
        {
            "id": "5dced0838284f12da4559d6e",
            "title": "Đà nẵng đẹp lắm Sài Gòn ơi Sài Gòn ơi",
            "description": "Đà nẵng là một thành phố đáng sống nhất VN",
            "images": [
                {
                    "keywords": [
                        "710894 jpg"
                    ],
                    "originalname": "710894.jpg",
                    "encoding": "7bit",
                    "mimetype": "image/jpeg",
                    "destination": "./src/uploads",
                    "filename": "1573834206556-710894.jpg",
                    "path": "src\\uploads\\1573834206556-710894.jpg",
                    "size": 3347409,
                    "createdAt": "2019-11-15T16:10:06.659Z",
                    "updatedAt": "2019-11-15T16:10:06.659Z",
                    "__v": 0,
                    "id": "5dcecdde82b14a2db0aca8e9"
                },
                {
                    "keywords": [
                        "hinh 1 jpg"
                    ],
                    "originalname": "Hinh1.jpg",
                    "encoding": "7bit",
                    "mimetype": "image/jpeg",
                    "destination": "./src/uploads",
                    "filename": "1573834379787-Hinh1.jpg",
                    "path": "src\\uploads\\1573834379787-Hinh1.jpg",
                    "size": 17355,
                    "createdAt": "2019-11-15T16:12:59.816Z",
                    "updatedAt": "2019-11-15T16:12:59.816Z",
                    "__v": 0,
                    "id": "5dcece8b6e539a1368c7d6f8"
                }
            ],
            "createdAt": "2019-11-15T16:21:23.622Z",
            "updatedAt": "2019-11-15T16:21:23.622Z"
        }
    ],
    "count": 1
}
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /components/:id Retrieve component
 * @apiName RetrieveComponent
 * @apiGroup Component
 * @apiHeader {String} Authorization Baerer Auth with the token user
 * @apiSuccess {Object} component Component's data.
 * @apiSuccessExample response is something like this:
 * {
    "id": "5dced0838284f12da4559d6e",
    "title": "Đà nẵng đẹp lắm Sài Gòn ơi Sài Gòn ơi",
    "description": "Đà nẵng là một thành phố đáng sống nhất VN",
    "images": [
        {
            "keywords": [
                "710894 jpg"
            ],
            "originalname": "710894.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "destination": "./src/uploads",
            "filename": "1573834206556-710894.jpg",
            "path": "src\\uploads\\1573834206556-710894.jpg",
            "size": 3347409,
            "createdAt": "2019-11-15T16:10:06.659Z",
            "updatedAt": "2019-11-15T16:10:06.659Z",
            "__v": 0,
            "id": "5dcecdde82b14a2db0aca8e9"
        },
        {
            "keywords": [
                "hinh 1 jpg"
            ],
            "originalname": "Hinh1.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "destination": "./src/uploads",
            "filename": "1573834379787-Hinh1.jpg",
            "path": "src\\uploads\\1573834379787-Hinh1.jpg",
            "size": 17355,
            "createdAt": "2019-11-15T16:12:59.816Z",
            "updatedAt": "2019-11-15T16:12:59.816Z",
            "__v": 0,
            "id": "5dcece8b6e539a1368c7d6f8"
        }
    ],
    "createdAt": "2019-11-15T16:21:23.622Z",
    "updatedAt": "2019-11-15T16:21:23.622Z"
}
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Component not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /components/:id Update component
 * @apiName UpdateComponent
 * @apiGroup Component
 * @apiHeader {String} Authorization Baerer Auth with the token user
 * @apiParam component Component's component.
 * @apiParam name Component's name.
 * @apiSuccess {Object} component Component's data.
 * @apiSuccessExample response is something like this:
 * {
    "id": "5dced0838284f12da4559d6e",
    "title": "Đà nẵng đẹp lắm Sài Gòn ơi Sài Gòn ơi",
    "description": "Đà nẵng là một thành phố đáng sống nhất VN",
    "images": [
        {
            "keywords": [
                "710894 jpg"
            ],
            "originalname": "710894.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "destination": "./src/uploads",
            "filename": "1573834206556-710894.jpg",
            "path": "src\\uploads\\1573834206556-710894.jpg",
            "size": 3347409,
            "createdAt": "2019-11-15T16:10:06.659Z",
            "updatedAt": "2019-11-15T16:10:06.659Z",
            "__v": 0,
            "id": "5dcecdde82b14a2db0aca8e9"
        },
        {
            "keywords": [
                "hinh 1 jpg"
            ],
            "originalname": "Hinh1.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "destination": "./src/uploads",
            "filename": "1573834379787-Hinh1.jpg",
            "path": "src\\uploads\\1573834379787-Hinh1.jpg",
            "size": 17355,
            "createdAt": "2019-11-15T16:12:59.816Z",
            "updatedAt": "2019-11-15T16:12:59.816Z",
            "__v": 0,
            "id": "5dcece8b6e539a1368c7d6f8"
        }
    ],
    "createdAt": "2019-11-15T16:21:23.622Z",
    "updatedAt": "2019-11-15T16:21:23.622Z"
}
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Component not found.
 */
router.put('/:id',
  token({ required: true }),
  body({ title, description, images }),
  update)

/**
 * @api {delete} /components/:id Delete component
 * @apiName DeleteComponent
 * @apiGroup Component
 * @apiHeader {String} Authorization Baerer Auth with the token user
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Component not found.
 */
router.delete('/:id',
  token({ required: true }),
  destroy)

export default router
