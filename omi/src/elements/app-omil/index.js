import { WeElement, define, h } from "omi";
import weui from "weui";
import style from "./_index.css";
import emojis from "./emojis.json";

class AppOmil extends WeElement {
  render(props) {
    return h(
      "div",
      null,
      h(
        "div",
        {
          class: "page__hd"
        },
        h(
          "h1",
          {
            class: "page__title"
          },
          "Emoji"
        ),
        h(
          "p",
          {
            class: "page__desc"
          },
          h("span", null, this.data.category)
        )
      ),
      h(
        "div",
        {
          class: "page__bd page__bd_spacing"
        },
        h(
          "div",
          {
            class: "weui-cells__title"
          },
          "Type"
        ),
        h(
          "div",
          {
            class: "weui-cells"
          },
          h(
            "div",
            {
              class: "weui-cell weui-cell_select weui-cell_select-before"
            },
            h(
              "div",
              {
                class: "weui-cell__hd"
              },
              h(
                "select",
                {
                  class: "weui-select",
                  name: "select2",
                  onChange: this.selectCategory.bind(this)
                },
                this.data.categories.map(item => {
                  return h(
                    "option",
                    {
                      value: item
                    },
                    item
                  );
                })
              )
            ),
            h(
              "div",
              {
                class: "weui-cell__bd"
              },
              h("input", {
                id: "emojiCode",
                class: "weui-input",
                type: "text",
                placeholder: "The emoji code",
                value: this.data.emoji
              })
            ),
            h(
              "div",
              {
                class: "weui-cell__ft"
              },
              h(
                "button",
                {
                  class: "weui-vcode-btn",
                  onClick: this.copyCode.bind(this)
                },
                "\u590D\u5236\u4EE3\u7801"
              )
            )
          )
        ),
        h(
          "div",
          {
            class: "weui-cells__title"
          },
          "Zoom(Moving dot right or left)"
        ),
        h(
          "div",
          {
            class: "weui-cells__title"
          },
          "Choose(\u9F20\u6807\u9009\u62E9\u8868\u60C5\u7136\u540E\u590D\u5236\u4EE3\u7801)"
        ),
        h(
          "div",
          null,
          h(
            "p",
            {
              class: "page__bd page__bd_spacing_top"
            },
            (() => {
              let arr = [];
              Object.keys(this.data.emojis).forEach(key => {
                if (this.data.category === "all") {
                  arr.push(
                    h(
                      "span",
                      {
                        onClick: this.chooseEmoji.bind(this, key),
                        alias: "smile",
                        "ios-version": "6.0"
                      },
                      this.data.emojis[key].char
                    )
                  );
                } else if (
                  this.data.emojis[key].category === this.data.category
                ) {
                  arr.push(
                    h(
                      "span",
                      {
                        onClick: this.chooseEmoji.bind(this, key),
                        alias: "smile",
                        "ios-version": "6.0"
                      },
                      this.data.emojis[key].char
                    )
                  );
                }
              });
              return arr;
            })()
          )
        )
      ),
      h(
        "div",
        {
          id: "toast",
          style: {
            display: this.data.isShowToast ? "block" : "none"
          }
        },
        h("div", {
          class: "weui-mask_transparent"
        }),
        h(
          "div",
          {
            class: "weui-toast"
          },
          h("i", {
            class: "weui-icon-success-no-circle weui-icon_toast"
          }),
          h(
            "p",
            {
              class: "weui-toast__content"
            },
            "\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F"
          )
        )
      ),
      h(
        "div",
        {
          class: "weui-footer",
          style: {
            paddingTop: "30px"
          }
        },
        h(
          "p",
          {
            class: "weui-footer__links"
          },
          h(
            "a",
            {
              href: "https://github.com/Wscats",
              class: "weui-footer__link"
            },
            "Wscats"
          ),
          h(
            "a",
            {
              href: "https://github.com/windiest",
              class: "weui-footer__link"
            },
            "Windiest"
          )
        ),
        h(
          "p",
          {
            class: "weui-footer__text"
          },
          "Copyright \xA9"
        )
      )
    );
  }

  install() {
    this.data = {
      isShowToast: false,
      emojis,
      emoji: "😊",
      categories: [
        "all",
        "people",
        "animals_and_nature",
        "food_and_drink",
        "activity",
        "travel_and_places",
        "objects",
        "symbols",
        "flags"
      ],
      category: "all"
    };
  }

  copyCode() {
    let input = document.getElementById("emojiCode");
    input.select();
    document.execCommand("Copy");
    this.data.isShowToast = true;
    this.update();
    setTimeout(() => {
      this.data.isShowToast = false;
      this.update();
    }, 800);
  }

  chooseEmoji(key) {
    this.data.emoji = this.data.emojis[key].char;
    this.update();
    console.log(this.data.emojis[key].char);
  }

  selectCategory(e) {
    console.log(e.target.value);
    this.data.category = e.target.value;
    this.update();
  }
}

AppOmil.css =
  `

` +
  style +
  weui;
define("app-omil", AppOmil);
