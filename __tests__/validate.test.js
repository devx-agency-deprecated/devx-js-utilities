import { validateEmail } from '../lib/validate'

describe('validate tests', () => {
  describe('validateEmail', () => {
    it('should validateEmail latin true', () => {
      expect(validateEmail('foo@bar.agency')).toBeTruthy()
      expect(validateEmail('foo.bar@bar.agency')).toBeTruthy()
    })
    it('should validateEmail latin false', () => {
      expect(validateEmail('foo@bar://&.agency')).toBeFalsy()
    })
    it('should validateEmail arabic true', () => {
      expect(validateEmail('د@الدوحة.قطر')).toBeTruthy()
      expect(validateEmail('نيت@أشوكا.الهند')).toBeTruthy()
    })
  })
})
