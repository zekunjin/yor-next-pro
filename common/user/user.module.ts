import { defineModule } from '@yorjs/core'
import { proxy } from '../providers/proxy.provider'
import { userController } from './user.controller'

export const userModule = defineModule({
  controller: userController,
  providers: [proxy]
})
