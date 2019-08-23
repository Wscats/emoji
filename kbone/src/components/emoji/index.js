import { h } from 'omis'
import css from './_index.css'
import emojis from './emojis'



const Emoji = (props, { name, emojis, selectEmoji }) => {
  return (
    <div class="container">
      <div class="title">{name}</div>
      <div class="weui-grids">
        {
          emojis.map((item) => {
            return (<a onClick={selectEmoji.bind(this, item.type)} class="weui-grid">
              <div class="weui-grid__icon">
                <img src={item.emoji} alt={item.type} />
              </div>
              <p class="weui-grid__label">{item.toggle ? '真' : '假'}</p>
            </a>)
          })
        }
      </div>
    </div>
  )
}

Emoji.store = _ => {
  return {
    name: 'Eno Yao',
    // 表情
    emojis,

    install() {
      // 设置表情开关，选中打开开关
      this.emojis = this.emojis.map((item) => {
        item.toggle = false
        return item
      })
      // console.log(this.emojis)
      // _.update()
      // console.log('install')
    },

    selectEmoji(type, e) {
      console.log(e)
      e.style.border = '1px solid red'
      console.log(type)
      // 筛选对应的表情
      let selectEmoji = _.store.emojis.filter((item) => {
        return item.type === type
      })
      if (selectEmoji.length > 0) {
        let { toggle } = selectEmoji[0]
        console.log(toggle)
        switch(toggle){
          case true:
              _.store.emojis.filter((item) => {
                return item.type === type
              })
              
            break
          default:
            break
        }
      }

      // this.inputText = evt.target.value
    }
  }

}

Emoji.css = css

export default Emoji
