import { define, WeElement } from 'omi'
import '../app-omil'

define('my-app', class extends WeElement {
  name = 'Omi'
  clickHandler = () => {
    this.name = 'Omio'
    this.update()
  }
  render() {
    return (
      <div style={{
        backgroundColor: '#f8f8f8'
      }} class="app">
        <app-omil />
      </div>
    )
  }
})
