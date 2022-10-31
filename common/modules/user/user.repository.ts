import { defineProvider } from '@yorjs/core'
import { RequestMethod } from '../../enums/request-method.enum'
import { IRequest } from '../../providers/request.provider'
import { IUserRepository } from './user.interface'

export const userRepository = defineProvider().implements(IUserRepository).inject(IRequest).setup(req => ({
  signIn(data) {
    return req({
      url: '/api/sign-in',
      method: RequestMethod.POST,
      data
    })
  }
}))
