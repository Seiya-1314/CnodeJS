# CnodeJS

在学习 Vue 的过程中，由于缺乏实际项目经验，所以虽然自觉掌握了 Vue 的基础知识，但还是有一种雾里看花的感觉，想独立开发项目却又不知道从何处入手。为了弥补自己的不足，以及熟悉 Vue 全家桶的使用，模仿了GitHub上的项目（[原地址](https://github.com/shuiRong/VueCnodeJS/tree/master/vuexVersion)），独立完成了整个项目的重构。

<br>
<br>

## 技术栈

- `Vue`：用于构建用户界面的渐进式框架

- `vue-router`：官方的路由管理器

- `vuex`：集中式中状态管理

- `SCSS`：css 预编译处理器

- `ES6`：JavaScript 语言的新一代标准 

<br>
<br>

## 开发思路

### 一、vue 项目构建

由于缺少 webpack 的相关了解，所以使用了 vue-cli 脚手架工具搭建了一个简单的项目：

```bash
vue init webpack-simple CnodeJS
```

<br>

1. 最终项目结构如下：

```npm
├── README.md
├── index.html
├── package.json            # 项目配置文件
├── src
│   ├── App.vue             # 根 vue 组件
│   ├── assets              # 静态资源
│   ├── commponents
│   ├── main.js             # 入口文件
│   ├── plugins             # 引入的插件
│   │   └── element-ui.js
│   ├── router              # router 配置
│   │   └── index.js
│   ├── store               # Vue store模块
│   │   ├── action.js       # 根级别的 action
│   │   ├── getters.js      # 属性接口
│   │   ├── index.js        #
│   │   ├── mutations.js    # 根级别的 mutation
│   │   └── state.js        # 根级别的 state
│   ├── utils               # 工具类
│   │   └── api.js
│   └── views               # 视图组件
│       ├── Home.vue
│       ├── Topic.vue
│       └── User.vue
├── static                  # 静态资源
└── webpack.config.js       # webpack 配置文件
```

<br>

2. 引入 ESlint ：

- 本地安装 ESlint ，并安装依赖

```
# 本地安装
npm install eslint babel-eslint eslint-loader eslint-config-standard eslint-friendly-formatter eslint-plugin-html eslint-plugin-promise eslint-plugin-standard --save-dev

# 设置一个配置文件
./node_modules/.bin/eslint --init
```

<br>

- 修改 ESlint 配置文件

```js
module.exports = {
    // 默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
    root: true,

    // 此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
    parser: 'babel-eslint',

    // 此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
    parserOptions: {
        // 设置 script(默认) 或 module，如果代码是在 ECMASCRIPT 中的模块
        sourceType: 'module'
    },

    // 此项指定环境的全局变量，下面的配置指定为浏览器环境
    env: {
        browser: true,
        node: true
        // "commonjs": true,
        // "es6": true,
        // "amd": true
    },

    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
    extends: 'standard',

    // required to lint *.vue files
    // 此项是用来提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范html的
    plugins: [
        'html'
    ],
    // add your custom rules here
    /*
    下面这些RULES是用来设置从插件来的规范代码的规则，使用必须去掉前缀ESLINT-PLUGIN-
    主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
    "OFF" -> 0 关闭规则
    "WARN" -> 1 开启警告规则
    "ERROR" -> 2 开启错误规则
    */
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
```

<br>

- 在 webpack.conf.js 添加如下代码：(基于vue-cli构建的完整项目，需要在 webpack.base.conf.js 中配置)

```
{
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [path.resolve(__dirname, '../src')],
    options: {
        formatter: require('eslint-friendly-formatter')
    }
},
```













## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
