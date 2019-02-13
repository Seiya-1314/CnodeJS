module.exports = {
    // 默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
    root: true,

    // 此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
    parserOptions: {
        // 此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
        "parser": "babel-eslint",
        "sourceType": "module"
    },

    // 此项指定环境的全局变量，下面的配置指定为浏览器环境
    env: {
        browser: true
        // node: true
        // "commonjs": true,
        // "es6": true,
        // "amd": true
    },

    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
    extends: 'plugin:vue/recommended',


    // required to lint *.vue files
    // 此项是用来提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范html的
    plugins: [
        'vue'
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
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // 'vue/max-attributes-per-line': 0,
        // "vue/html-self-closing": 0,
        // 'vue/html-indent': 0,
        // 'vue/attributes-order': 0,
        'semi': ['error', 'always']
        // 'indent': 0,
        // 'space-before-function-paren': 0
    }
}
