import { API_HOST } from '../config'
import doorkeeper from '../doorkeeper'

export function setupLogoutBtn() {
  $('#logout').click(function(e) {
    e.preventDefault()
    doorkeeper.clear()
    chrome.tabs.create({ url: API_HOST + '/session/end' })
  })
}
