import { defineModule } from '@yorjs/core'
import { request } from '../../providers/request.provider'
import { state } from '../../providers/state.provider'
import { userController } from './user.controller'
import { userRepository } from './user.repository'
import { userService } from './user.service'

export const userModule = defineModule({
  controller: userController,
  providers: [state, userService, userRepository, request],
  exports: [userService]
})
