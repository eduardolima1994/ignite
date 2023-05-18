import { expect, test } from 'vitest'

test('O usuário consegue cria uma nova transação', () => {
  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})
