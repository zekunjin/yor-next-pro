import { defineModule } from '@yorjs/core'
import { proxy } from '../../providers/proxy.provider'
import { userController } from './user.controller'
import { userService } from './user.service'

export const userModule = defineModule({
  controller: userController,
  providers: [proxy, userService]
})
