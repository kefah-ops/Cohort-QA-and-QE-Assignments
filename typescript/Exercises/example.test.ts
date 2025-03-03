it('should return true for valid usernames', () => {
  expect(validateUsername('Matt1234')).toBe(true)

  expect(validateUsername('Alice')).toBe(false)

  expect(validateUsername('Bob')).toBe(false)
})