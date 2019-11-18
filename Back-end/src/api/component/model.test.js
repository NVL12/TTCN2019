import { Component } from '.'

let component

beforeEach(async () => {
  component = await Component.create({ component: 'test', name: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = component.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(component.id)
    expect(view.component).toBe(component.component)
    expect(view.name).toBe(component.name)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = component.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(component.id)
    expect(view.component).toBe(component.component)
    expect(view.name).toBe(component.name)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
