import { defineController, defineModule } from '@yorjs/core'
import { cookie } from '../../providers/cookie.provider'
import { request } from '../../providers/request.provider'

export const utilsModule = defineModule({
  controller: defineController().setup(() => ({})),
  exports: [cookie, request]
})
