import request from '../lib/request'

export default {
  async testHttpRequest() {
    return await request.get('/api/test')
  }
}
