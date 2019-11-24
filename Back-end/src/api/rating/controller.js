import { success, notFound, authorOrAdmin } from '../../services/response/'
import { Rating } from '.'

export const create = ({ user, bodymen: { body } }, res, next) =>
  Rating.create({ ...body, reviewer: user })
    .then((rating) => rating.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Rating.find(query, select, cursor)
    .populate('reviewer')
    .then((ratings) => ratings.map((rating) => rating.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Rating.findById(params.id)
    .populate('reviewer')
    .then(notFound(res))
    .then((rating) => rating ? rating.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ user, bodymen: { body }, params }, res, next) =>
  Rating.findById(params.id)
    .populate('reviewer')
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'reviewer'))
    .then((rating) => rating ? Object.assign(rating, body).save() : null)
    .then((rating) => rating ? rating.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ user, params }, res, next) =>
  Rating.findById(params.id)
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'reviewer'))
    .then((rating) => rating ? rating.remove() : null)
    .then(success(res, 204))
    .catch(next)
