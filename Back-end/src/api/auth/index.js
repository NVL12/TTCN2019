import { Router } from 'express'
import { login } from './controller'
import { password, master } from '../../services/passport'

const router = new Router()

/**
 * @api {post} /auth Authenticate
 * @apiName Authenticate
 * @apiGroup Auth
 * @apiPermission master
 * @apiHeader {String} Authorization Basic authorization with email and password.
 * @apiParamExample input is something like this (in body)
 * {
	"access_token": "masterKey",
	"role": "admin"
}
 * @apiParam {String} access_token Master access_token.
 * @apiParam {String=user,admin} role The role of user that log in to.
 * @apiSuccess (Success 201) {String} token User `access_token` to be passed to other requests.
 * @apiSuccess (Success 201) {Object} user Current user's data.
 * @apiSuccessExample response is something like this:
 * {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkY2VjNmZkMGM4NDAyMWRhNGEyZWNjOSIsImlhdCI6MTU3MzgzMjc4N30.yb4SUMM_ERJLNIRZamc-Ra6Cw_i1X2h5A0EMcRkErP4",
    "user": {
        "id": "5dcec6fd0c84021da4a2ecc9",
        "name": "huy ho",
        "email": "admin@gmail.com",
        "createdAt": "2019-11-15T15:40:45.055Z"
    }
}
 * @apiError 401 Master access only or invalid credentials.
 */
router.post('/',
  master(),
  password(),
  login)

export default router
