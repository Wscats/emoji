import { h } from 'omis'
import css from './_index.css'
import emojis from './emojis'



const Emoji = (props, { title, emojis, selectEmoji }) => {
  return (
    <div class="container">
      <div class="title">{title}</div>
      <div class="weui-grids">
        {
          emojis.map((item) => {
            return (<a style={{
              background: `url(${item.emoji}) no-repeat center`,
            }} onClick={selectEmoji.bind(this, item.type)} class="weui-grid">
              {/*<div class="weui-grid__icon">
                  <img src={item.emoji} alt={item.type} />
                </div>
              <p class="weui-grid__label">{item.toggle ? '真' : '假'}</p>*/}
            </a>)
          })
        }
      </div>
    </div>
  )
}

Emoji.store = _ => {
  return {
    title: '选取下面两个相同的表情消除',
    name: 'Eno Yao',
    // 表情
    emojis,

    install() {
      // 设置表情开关，选中打开开关
      this.emojis = this.emojis.map((item) => {
        item.toggle = false
        return item
      })
      // _.randomEmojis()
      let randomEmojis = this.randomEmojis(_.store.emojis, 15)
      // _.update()
      // console.log('install')
    },
    installed() {
      console.log(_)
    },

    selectEmoji(type, e) {
      // console.log(this)
      // e.stopPropagation()
      // e.preventDefault()
      // console.log(e)

      // console.log(type)
      // 筛选对应的表情
      let selectEmoji = _.store.emojis.filter((item) => {
        return item.type === type
      })
      if (selectEmoji.length > 0) {
        let { toggle } = selectEmoji[0]
        console.log(toggle)
        switch (toggle) {
          case true:
            _.store.emojis.filter((item) => {
              if (item.type === type) {
                return item.toggle = false
              }
            })
            e.target.style.backgroundColor = ''
            break
          default:
            _.store.emojis.filter((item) => {
              if (item.type === type) {
                return item.toggle = true
              }
            })
            e.target.style.backgroundColor = '#cacbcc'
            break
        }
      }
      // this.inputText = evt.target.value
    },

    // 随机生成15个表情并在里面拿其中一个复制并插入任意位置
    randomEmojis(arr, count) {
      let shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index
      while (i-- > min) {
        index = Math.floor((i + 1) * Math.random())
        temp = shuffled[index]
        shuffled[index] = shuffled[i]
        shuffled[i] = temp
      }
      return shuffled.slice(min)
    },
    // 使用arr数组，随机生成长度为count的新数组
    getRandomEmojis(arr, count) {

    }
  }

}

Emoji.css = css

export default Emoji
