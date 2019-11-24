import { Rating } from '.'
import { User } from '../user'

let user, rating

beforeEach(async () => {
  user = await User.create({ email: 'a@a.com', password: '123456' })
  rating = await Rating.create({ reviewer: user, related_object: 'test', kind: 'test', description: 'test', rate: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = rating.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(rating.id)
    expect(typeof view.reviewer).toBe('object')
    expect(view.reviewer.id).toBe(user.id)
    expect(view.related_object).toBe(rating.related_object)
    expect(view.kind).toBe(rating.kind)
    expect(view.description).toBe(rating.description)
    expect(view.rate).toBe(rating.rate)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = rating.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(rating.id)
    expect(typeof view.reviewer).toBe('object')
    expect(view.reviewer.id).toBe(user.id)
    expect(view.related_object).toBe(rating.related_object)
    expect(view.kind).toBe(rating.kind)
    expect(view.description).toBe(rating.description)
    expect(view.rate).toBe(rating.rate)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
