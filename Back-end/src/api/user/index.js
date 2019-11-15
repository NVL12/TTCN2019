import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { password as passwordAuth, master, token } from '../../services/passport'
import { index, showMe, show, create, update, updatePassword, destroy } from './controller'
import { schema } from './model'
export User, { schema } from './model'

const router = new Router()
const { email, password, name, picture, role } = schema.tree

/**
 * @api {get} /users Retrieve users
 * @apiName RetrieveUsers
 * @apiGroup User
 * @apiPermission admin
 * @apiHeader {String} Authorization Bearer authorization with access_token after logging.
 * @apiParam {String} access_token User access_token (using Bearer header or using this in body).
 * @apiUse listParams
 * @apiSuccess {Object[]} users List of users.
 * @apiSuccessExample response is something like this:
 * {
    "results": [
        {
            "id": "5dcec6fd0c84021da4a2ecc9",
            "name": "huy ho",
            "email": "admin@gmail.com",
            "createdAt": "2019-11-15T15:40:45.055Z"
        },
        {
            "id": "5db7121b9ac36d49508179e3",
            "name": "huy ho",
            "email": "user@gmail.com",
            "createdAt": "2019-10-28T16:06:51.828Z"
        }
    ],
    "count": 2
}
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Admin access only.
 */
router.get('/',
  token({ required: true, roles: ['admin'] }),
  query({
    role: String
  }),
  index)

/**
 * @api {get} /users/me Retrieve current user
 * @apiName RetrieveCurrentUser
 * @apiGroup User
 * @apiPermission user
 * @apiParam {String} access_token User access_token.
 * @apiSuccess {Object} user User's data.
 * @apiSuccessExample response is something like this:
 * {
    "id": "5dcec6fd0c84021da4a2ecc9",
    "name": "huy ho",
    "email": "admin@gmail.com",
    "createdAt": "2019-11-15T15:40:45.055Z"
}
 */
router.get('/me',
  token({ required: true }),
  showMe)

/**
 * @api {get} /users/:id Retrieve user
 * @apiName RetrieveUser
 * @apiGroup User
 * @apiPermission user
 * @apiParam {String} access_token User access_token.
 * @apiSuccess {Object} user User's data.
 * @apiSuccessExample response is something like this:
 * {
    "id": "5dcec6fd0c84021da4a2ecc9",
    "name": "huy ho",
    "email": "admin@gmail.com",
    "createdAt": "2019-11-15T15:40:45.055Z"
}
 * @apiError 404 User not found.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {post} /users Create user
 * @apiName CreateUser
 * @apiGroup User
 * @apiPermission master
 * @apiParamExample input is something like this:
 * {
	"access_token": "masterKey",
    "email": "admin@gmail.com",
    "password": "123456",
    "name": "huy ho",
    "role": "admin"
}
 * @apiParam {String} access_token Master access_token.
 * @apiParam {String} email User's email.
 * @apiParam {String{6..}} password User's password.
 * @apiParam {String} [name] User's name.
 * @apiParam {String} [picture] This is an `ID` of the Image object.
 * @apiParam {String=user,admin} [role=user] User's role.
 * @apiSuccess (Sucess 201) {Object} user User's data.
 * @apiSuccessExample: response is something like this:
 * {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkY2VjNmZkMGM4NDAyMWRhNGEyZWNjOSIsImlhdCI6MTU3MzgzMjQ0NX0.v6Qu-mYtLBF11Y7l8WnE905vxuwAen8PicytuiX9lOA",
    "user": {
        "id": "5dcec6fd0c84021da4a2ecc9",
        "name": "huy ho",
        "email": "admin@gmail.com",
        "createdAt": "2019-11-15T15:40:45.055Z"
    }
}
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Master access only.
 * @apiError 409 Email already registered.
 */
router.post('/',
  master(),
  body({ email, password, name, picture, role }),
  create)

/**
 * @api {put} /users/:id Update user
 * @apiName UpdateUser
 * @apiGroup User
 * @apiPermission user
 * @apiParam {String} access_token User access_token.
 * @apiParam {String} [name] User's name.
 * @apiParam {String} [picture] User's picture.
 * @apiSuccess {Object} user User's data.
 * @apiSuccessExample response is something like this:
 * {
    "id": "5dcec6fd0c84021da4a2ecc9",
    "name": "huy ho",
    "email": "admin@gmail.com",
    "createdAt": "2019-11-15T15:40:45.055Z"
}
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Current user or admin access only.
 * @apiError 404 User not found.
 */
router.put('/:id',
  token({ required: true }),
  body({ name, picture }),
  update)

/**
 * @api {put} /users/:id/password Update password
 * @apiName UpdatePassword
 * @apiGroup User
 * @apiHeader {String} Authorization Basic authorization with email and password.
 * @apiParam {String{6..}} password User's new password.
 * @apiSuccess (Success 201) {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Current user access only.
 * @apiError 404 User not found.
 */
router.put('/:id/password',
  token({ required: true }),
  passwordAuth(),
  body({ password }),
  updatePassword)

/**
 * @api {delete} /users/:id Delete user
 * @apiName DeleteUser
 * @apiGroup User
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 401 Admin access only.
 * @apiError 404 User not found.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
