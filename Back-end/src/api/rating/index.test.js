import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Rating } from '.'

const app = () => express(apiRoot, routes)

let userSession, anotherSession, rating

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const anotherUser = await User.create({ email: 'b@b.com', password: '123456' })
  userSession = signSync(user.id)
  anotherSession = signSync(anotherUser.id)
  rating = await Rating.create({ reviewer: user })
})

test('POST /ratings 201 (user)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: userSession, related_object: 'test', kind: 'test', description: 'test', rate: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.related_object).toEqual('test')
  expect(body.kind).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.rate).toEqual('test')
  expect(typeof body.reviewer).toEqual('object')
})

test('POST /ratings 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /ratings 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
  expect(typeof body[0].reviewer).toEqual('object')
})

test('GET /ratings 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /ratings/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${rating.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(rating.id)
  expect(typeof body.reviewer).toEqual('object')
})

test('GET /ratings/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${rating.id}`)
  expect(status).toBe(401)
})

test('GET /ratings/:id 404 (user)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: userSession })
  expect(status).toBe(404)
})

test('PUT /ratings/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${rating.id}`)
    .send({ access_token: userSession, related_object: 'test', kind: 'test', description: 'test', rate: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(rating.id)
  expect(body.related_object).toEqual('test')
  expect(body.kind).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.rate).toEqual('test')
  expect(typeof body.reviewer).toEqual('object')
})

test('PUT /ratings/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${rating.id}`)
    .send({ access_token: anotherSession, related_object: 'test', kind: 'test', description: 'test', rate: 'test' })
  expect(status).toBe(401)
})

test('PUT /ratings/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${rating.id}`)
  expect(status).toBe(401)
})

test('PUT /ratings/:id 404 (user)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: anotherSession, related_object: 'test', kind: 'test', description: 'test', rate: 'test' })
  expect(status).toBe(404)
})

test('DELETE /ratings/:id 204 (user)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${rating.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(204)
})

test('DELETE /ratings/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${rating.id}`)
    .send({ access_token: anotherSession })
  expect(status).toBe(401)
})

test('DELETE /ratings/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${rating.id}`)
  expect(status).toBe(401)
})

test('DELETE /ratings/:id 404 (user)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: anotherSession })
  expect(status).toBe(404)
})
