import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Component } from '.'

const app = () => express(apiRoot, routes)

let component

beforeEach(async () => {
  component = await Component.create({})
})

test('POST /components 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ component: 'test', name: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.component).toEqual('test')
  expect(body.name).toEqual('test')
})

test('GET /links 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /links/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${link.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(link.id)
})

test('GET /links/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /links/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${link.id}`)
    .send({ link: 'test', name: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(link.id)
  expect(body.link).toEqual('test')
  expect(body.name).toEqual('test')
})

test('PUT /links/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ link: 'test', name: 'test' })
  expect(status).toBe(404)
})

test('DELETE /links/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${link.id}`)
  expect(status).toBe(204)
})

test('DELETE /links/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
