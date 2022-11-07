import { defineModule } from '@yorjs/core'
import { utilsModule } from '../utils/utils.module'
import { userController } from './user.controller'
import { userRepository } from './user.repository'
import { userService } from './user.service'

export const userModule = defineModule({
  controller: userController,
  providers: [userService, userRepository],
  imports: [utilsModule],
  exports: [userService]
})
