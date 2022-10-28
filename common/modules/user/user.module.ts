import { defineModule } from '@yorjs/core'
import { state } from '../../providers/state.provider'
import { userController } from './user.controller'
import { userService } from './user.service'

export const userModule = defineModule({
  controller: userController,
  providers: [state, userService]
})
