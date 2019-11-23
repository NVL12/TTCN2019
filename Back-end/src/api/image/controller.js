import { success, notFound } from '../../services/response/'
import { Image } from '.'

export const create = ({ files }, res, next) =>
  Image.create(files)
    .then((image) => image.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Image.find(query, select, cursor)
    .then(async (images) =>{
      const results = images.map(image => image.view(true));
      const count = await Image.countDocuments(query);
      return { results: results, count: count }
    })
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Image.findById(params.id)
    .then(notFound(res))
    .then((image) => image ? image.view(true) : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Image.findById(params.id)
    .then(notFound(res))
    .then((image) => image ? Object.assign(image, body).save() : null)
    .then((image) => image ? image.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Image.findById(params.id)
    .then(notFound(res))
    .then((image) => image ? image.remove() : null)
    .then(success(res, 204))
    .catch(next)
