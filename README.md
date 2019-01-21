# cnode-js

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

项目结构如下：

```bash
├── README.md
├── index.html
├── package.json
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   └── main.js
└── webpack.config.js
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