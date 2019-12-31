import { render, h } from 'omis'
import Todo from './components/todo'
import Emoji from './components/emoji'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  render(<Emoji />, '#app')
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
