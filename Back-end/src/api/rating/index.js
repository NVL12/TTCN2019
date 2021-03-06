import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Rating, { schema } from './model'

const router = new Router()
const { related_object, kind, description, rate } = schema.tree

/**
 * @api {post} /ratings Create rating
 * @apiName CreateRating
 * @apiGroup Rating
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam related_object Rating's related_object.
 * @apiParam kind Rating's kind.
 * @apiParam description Rating's description.
 * @apiParam rate Rating's rate.
 * @apiSuccess {Object} rating Rating's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Rating not found.
 * @apiError 401 user access only.
 */
router.post('/',
  token({ required: true }),
  body({ related_object, kind, description, rate }),
  create)

/**
 * @api {get} /ratings Retrieve ratings
 * @apiName RetrieveRatings
 * @apiGroup Rating
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} ratings List of ratings.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only.
 */
router.get('/',
  token({ required: true }),
  query(),
  index)

/**
 * @api {get} /ratings/:id Retrieve rating
 * @apiName RetrieveRating
 * @apiGroup Rating
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} rating Rating's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Rating not found.
 * @apiError 401 user access only.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {put} /ratings/:id Update rating
 * @apiName UpdateRating
 * @apiGroup Rating
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam related_object Rating's related_object.
 * @apiParam kind Rating's kind.
 * @apiParam description Rating's description.
 * @apiParam rate Rating's rate.
 * @apiSuccess {Object} rating Rating's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Rating not found.
 * @apiError 401 user access only.
 */
router.put('/:id',
  token({ required: true }),
  body({ related_object, kind, description, rate }),
  update)

/**
 * @api {delete} /ratings/:id Delete rating
 * @apiName DeleteRating
 * @apiGroup Rating
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Rating not found.
 * @apiError 401 user access only.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
