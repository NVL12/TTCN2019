import { Image } from '.'

let image

beforeEach(async () => {
  image = await Image.create({ originalname: 'test', encoding: 'test', mimetype: 'test', destination: 'test', filename: 'test', path: 'test', size: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = image.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(image.id)
    expect(view.originalname).toBe(image.originalname)
    expect(view.encoding).toBe(image.encoding)
    expect(view.mimetype).toBe(image.mimetype)
    expect(view.destination).toBe(image.destination)
    expect(view.filename).toBe(image.filename)
    expect(view.path).toBe(image.path)
    expect(view.size).toBe(image.size)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = image.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(image.id)
    expect(view.originalname).toBe(image.originalname)
    expect(view.encoding).toBe(image.encoding)
    expect(view.mimetype).toBe(image.mimetype)
    expect(view.destination).toBe(image.destination)
    expect(view.filename).toBe(image.filename)
    expect(view.path).toBe(image.path)
    expect(view.size).toBe(image.size)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
