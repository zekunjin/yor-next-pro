import { defineController, defineModule } from '@yorjs/core'
import { cookie } from '../../providers/cookie.provider'
import { request } from '../../providers/request.provider'
import { state } from '../../providers/state.provider'

export const utilsModule = defineModule({
  controller: defineController().setup(() => ({})),
  exports: [cookie, request, state]
})
