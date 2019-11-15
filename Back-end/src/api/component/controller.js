import { success, notFound } from '../../services/response/'
import { Component } from '.'

const populate = [{
  path: 'images'
}]

export const create = ({ bodymen: { body } }, res, next) =>
  Component.create(body)
    .then((component) => component.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Component.find(query, select, cursor).populate(populate)
    .then(async (components) => {
      const results = components.map(component => component.view(true));
      const count = await Component.countDocuments(query);
      return { results: results, count: count }
    })
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Component.findById(params.id).populate(populate)
    .then(notFound(res))
    .then((component) => component ? component.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Component.findById(params.id).populate(populate)
    .then(notFound(res))
    .then((component) => component ? Object.assign(component, body).save() : null)
    .then((component) => component ? component.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Component.findById(params.id)
    .then(notFound(res))
    .then((component) => component ? component.remove() : null)
    .then(success(res, 204))
    .catch(next)
