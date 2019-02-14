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

## 需求分析

<br>

### 一、界面构成

整个应用分成三个主页面，如下：

- `【首页】`：内容列表页

- `【详情】`：内容详情页

- `【用户中心】`：个人用户中心页

<br>

### 二、跳转关系

- 点击左上角 logo 即可跳转到【首页】

- 点击右上角“关于”按钮出现弹层，展示信息

- 【首页】点击 table 标签切换不同的内容列表，点击列表标题进入【详情页】，点击列表用户头像进入【用户中心】

- 【详情】页点击“用户头像”和“作者名”进入【用户中心】,点击“话题标题”进入对应的【详情】

- 【用户中心】点击“话题标题”进入对应的【详情】

<br>

### 三、数据分析

**用户数据：**
```
- 用户ID
- 用户头像
- 用户名
- 用户积分
- 注册时间
- GitHub账户
- 创建的话题
- 参与的话题
```

<br>

**话题数据:**
```
- 话题ID
- 标题
- 类型
- 发布时间
- 作者
- 浏览量
- 评论数
  - 评论序号
  - 评论人
  - 评论人头像
  - 评论内容
  - 评论时间
  - 点赞数
- 话题内容
```

<br>
<br>

## 开发准备

<br>

- 图片等静态资源准备

- reset.css 文件准备

- web字体文件准备

<br>
<br>

## 开发历程

### 一、vue 项目构建

由于缺少 webpack 的相关了解，所以使用了 vue-cli 脚手架工具搭建了一个简单的项目：

```bash
vue init webpack-simple CnodeJS
```

<br>

1. 最终项目结构如下：

```
├── README.md
├── index.html
├── package.json                          # 项目配置文件
├── src
│   ├── App.vue                           # 根 vue 组件
│   ├── assets                            # 静态资源
│   ├── commponents
│   ├── main.js                           # 入口文件
│   ├── plugins                           # 引入的插件
│       └── element-ui.js
│   ├── router                            # router 配置
│       └── index.js
│   ├── store                             # Vue store模块
│       ├── action.js                     # 根级别的 action
│       ├── getters.js                    # 属性接口
│       ├── index.js                      
│       ├── mutations.js                  # 根级别的 mutation
│       └── state.js                      # 根级别的 state
│   ├── utils                             # 工具类
│       └── api.js
│   └── views                             # 视图入口组件
│       ├── Home.vue
│       ├── Topic.vue
│       └── User.vue
├── static                                # 静态资源
└── webpack.config.js                     # webpack 配置文件
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

    // 此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
    parserOptions: {
        // 设置 script(默认) 或 module，如果代码是在 ECMASCRIPT 中的模块
        sourceType: 'module',
        // 此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
        parser: 'babel-eslint'
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
    下面这些rules是用来设置从插件来的规范代码的规则，使用必须去掉前缀eslint-plugin-
    主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
    "off" -> 0 关闭规则
    "warn" -> 1 开启警告规则
    "error" -> 2 开启错误规则
    */
    'rules': {
        /*eslint no-new: "off"*/
        'no-new': 0,
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

<br>

3. 完整引入 Element-ui ：

- 安装 Element-ui

```
cnpm i element-ui -S        # -S 即 -save，表示写入到 dependencies 对象中
```

<br>

- plugins 中新建 element-ui.js 文件，引入 element-ui ：

```js
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';        # 样式必须引入

Vue.use(ElementUI);                                   # 全局注册 element ui
```

<br>

- main.js 文件中写入一下内容:

```js
import './plugins/element-ui.js';
```

<br>

- 由于 elment-ui 的css中运用了饿了么的字体库，即.wtff文件，所以需要引入一个解析器，在webpack.conf.js 添加如下代码：

```js
{
  test: /\.(eot|svg|ttf|woff|woff2)$/,
  loader: 'file-loader'
}
```

<br>

### 二、vue 组件设计

```
└─App.vue                                     # 挂载整个应用
    ├─Home.vue                                # 首页
    │   ├─HomeTopicTable.vue                  # 话题table
    │   └─HomeTopicList.vue                   # 话题列表
    └─Article.vue                             # 详情页
    │   ├─ArticleUserPanel.vue                # 作者面板
    │   ├─ArticleTopicPanel.vue               # 话题面板
    │   └─ArticleReplyPanel.vue               # 评论面板
    └─User.vue                                # 用户中心
    │   ├─UserPanel.vue                       # 用户面板
    │   └─UserTopicPanel.vue                  # 话题面板
    └─common                
        └─Header                
        │   └─VHeader.vue                     # 公共头部组件
        ├─AlertTip.vue                        # 弹出框组件
        └─Divider.vue                         # 分割线组件
```

<br>

### 三、路由配置

1. 路由安装：

```
npm install vue-router --save
```

<br>

2. 在router/index.js文件导入路由：

```js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
```

3. 按照之前的跳转关系配置路由信息

```js
export default new Router({
  model: 'history',
  routes: [
    {
      path: '/',
      redirect: '/all',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'all',
          component: HomeTopicList
        },
        {
          path: 'good',
          component: HomeTopicList
        },
        {
          path: 'share',
          component: HomeTopicList
        },
        {
          path: 'ask',
          component: HomeTopicList
        },
        {
          path: 'job',
          component: HomeTopicList
        }
      ]
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    }
  ]
});
```








## bug 问题解决

1. **ESlint 配置问题**：

按上面的步骤配置完 ESlint 后，报错：Adjacent JSX elements must be wrapped。意思是 Vue 文件被识别成了jsx文件，但是我这里并没有使用jsx的相关配置，于是参考了这个链接进行了修改（[参考链接](https://github.com/vuejs/eslint-plugin-vue/issues/186)），更改如下：

```js
{
    "root": true,
-   "parser": "babel-eslint",
    "parserOptions": {
+       "parser": "babel-eslint"
    }

}
```

修改完后，产生了新的报错：Unexpected token /。最终通过安装 eslint-plugin-vue ，并进行了相关配置，运行成功。


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
