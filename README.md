# 项目介绍
>项目使用[create-react-app](https://github.com/facebook/create-react-app#creating-an-app)创建， 作为模板项目，仅保留必需内容，如需要加入其它配置请查看[create-react-app 文档](https://facebook.github.io/create-react-app/docs/getting-started)
>此外项目引入了 antd、styled-components 第三方组件库，方便快速开发项目 

    


---
# 技术与文档

1. [create-react-app 文档](https://facebook.github.io/create-react-app/docs/getting-started)
2. [React - 主架构](https://reactjs.org/)
3. [react-router - 路由](https://reacttraining.com/react-router/web/example/basic)
4. [styled-components - 封装样式组件](https://www.styled-components.com/)
5. [Ant Design - UI 组件](https://ant.design/index-cn)
6. [axios - http请求](https://github.com/axios/axios)


---
# 项目结构

```
react-template-web/
  node_modules/       // 项目依赖
  src/
    components        // 公共组件
    const             // 常量定义
    hoc/              // hoc
      withCatch.js    // 捕捉异常hoc
      withLoading.js  // loading hoc
    lib               // 依赖项
      request.js      // http请求
    pages/            // 页面
      Demo/
        index.js
    App.css         // App样式
    App.js          // 渲染主组件
    App.test.js     // 测试文件
    index.css       // 主入口css
    index.js        // 主入口js
    router.js       // 路由配置
  public/
    index.html      // 页面模板
    favicon.ico     // 网站图标
  config/     
    webpack.config.dev.js      // dev环境配置
    webpack.config.prod.js     // prod环境配置
    webpackDevServer.config.js // dev服务配置
  .env              // 环节变量配置
  .eslintrc         // eslint
  package.json
  README.md
```

以上为项目的大致目录结构，为了使用es7的Decorator，对项目进行了npm run eject，好处是可以自由更改环境配置与插件，坏处是不再有react-scripts的支持和更新




---
## public目录
```
public /
  index.html // 页面模板
  favicon.ico // 网站图标
```

| index.html | 渲染模板，我们可以再此处修改 Title 或添加静态依赖，编译完成的 js 文件是自动插入到这个文件中的，其实就是用的 webpack 的 html 插件 | 
|----|----|
>你可以把不需要 webpack 编译的文件放在 public 文件夹里面，react 为了达到最快速的代码重建，只有在 src 根目录下的文件会被 webpack 编译，如果需要引用 public 中的资源，在 html 中可以只用%PUBLIC_URL%，js 中使用 process.env.PUBLIC_URL,代替 public 的路径
## 


---
## config目录
```
config/     
  webpack.config.dev.js      // dev环境配置
  webpack.config.prod.js     // prod环境配置
  webpackDevServer.config.js // dev服务配置
```

| webpack.config.dev.js   | webpack在dev环境下的配置文件，在开发过程中，使用npm start 默认为dev环境     | 
|:----|:----|
| webpack.config.prod.js   | webpack在prod环境下的配置文件，使用npm run build时，打包后的环境是production     | 
| webpackDevServer.config.js   | webpack启动服务的配置文件，使用npm start时调整此文件，此配置文件内引入的是webpack.config.dev.js   | 



>目前已在webpack.config.dev.js和webpack.config.prod.js中加入alias配置，使用此配置可以简化路径，当你的文件嵌套太深时，方便直接饮用文件，不用关心当前文件的目录层级，如：
```
import xx from '../../hoc/withCatch'
//可以写成
import xx from '@catch'
```

>注：使用此配置引用会导致代码编辑器无法定位文件地址，导致不能通过快捷键进行访问引用文件

![图片](https://uploader.shimo.im/f/wcGrZG4UvyggnK9D.png!thumbnail)
![图片](https://images-cdn.shimo.im/wcGrZG4UvyggnK9D__thumbnail?e=1547542793&token=FYM7KChSxT-8Gcpg_aWrJfeQJeszI30W9RGXKyHO:HH7Sogri7NiGHnTFJaQ5AJOIx7Y=)



---
## src目录

```
src/
    components        // 公共组件
    const             // 常量定义
    hoc/              // hoc
      withCatch.js    // 捕捉异常hoc
      withLoading.js  // loading hoc
    lib               // 依赖项
      request.js      // http请求
    pages/            // 页面
      Demo/
        index.js
    App.css         // App样式
    App.js          // 渲染主组件
    App.test.js     // 测试文件
    index.css       // 主入口css
    index.js        // 主入口js
    router.js       // 路由配置
```


|  index.js   | 主入口文件，你可以在这里做一些组件渲染前的操作，如引入  第三方组件、样式、设置 theme...等等   | 
|:----|:----|
| router.js    | 路由配置文件，项目使用[react-router](https://reacttraining.com/react-router/web/guides/philosophy),更多的路由配置请参考文档   | 
| App.js   | 在 src/index.js 中渲染的组件，在此处可以渲染 layout 与 Router     | 
| App.test.js   | 测试文件，如果不使用可以删除，使用方法可查看[create-react-app running-tests](https://facebook.github.io/create-react-app/docs/running-tests)   | 
| App.css   | App 组件的样式，在 App.js 中使用import './App.css'进行引入, 你也可以选择 Sass 等样式语法，具体使用方法请参考[create-react-app 文档](https://facebook.github.io/create-react-app/docs/getting-started)，此处推荐使用styled-components编写组件样式   | 
| components   | 用于存放项目中抽离出来的公共组件   | 
| const   | 用于存放  定义的常量   | 
| hoc   | 用于存放项目中抽离出来的 hoc   | 
| services   | 在此处请求接口，根据不同的业务创建不同的 service，不要再 view 层直接请求接口，统一维护在此处，方便复用与处理业务逻辑   | 
| pages   | view 层，项目中的页面都放在此文件目录中，其中每一个子目录都代表着一个页面或功能组件   | 
| lib   | 用于存放项目中的依赖，如 http request、工具类，需要编译的第三方依赖，本项目在 lib 中默认存在request.js   | 
| lib/request.js   | 基于[axios](https://github.com/axios/axios)封装的 http requests 工具,根据环境变量process.env.NODE_ENV切换 development 与 production 的 baseURL，如需要自定义其他环境变量请在.env文件中设置   | 



---
## .env环境变量
在 npm run start和 npm run build时会将process.env.NODE_ENV设置为 development 与 production，如果需要使用自定义环境变量，请在此文件配置

> 注意  
>自定义  的环境变量必须以REACT_APP_开头,以其他开头的环境变量将会被忽略  
>更改环境变量需要重新启动服务才会生效

在 html 中使用自定义环境变量

```
   <small>{process.env.REACT_APP_TEST}</small>
```


在 js 中使用自定义环境变量

```
const test = process.env.REACT_APP_TEST
```


除了.env 你还可以使用以下文件

* .env  默认文件
* .env.local 本地设置 , 除 test 之外的所有环境都加载此文件
* .env.development, .env.test, env.production,特定环境的设置
* .env.development.local，.env.test.local，.env.production.local 特定环境的本地设置。

文件优先级

- npm start : .env.development.local > .env.development > .env.local > .env

- npm run build : .env.production.local > .env.production > .env.local > .env

- npm test : .env.test.local > .env.test > .env（.env.local 失效）
# 
# 项目运行


---
## 安装依赖
```
npm install
// or
yarn install
```



---
## 运行项目
```
npm start
// or 
yarn start
```

在开发模式下运行应用程序。打开[http://localhost:3000](http://localhost:3000)以在浏览器中查看



---
## 项目打包
```
npm run build
```


运行build后，项目根目录下  将会出现一个 build 文件夹,在 src 下的 js、css 和依赖将会打包到 static/中，并在 index.html 引入,具体结构如下

```

build/
  static/                   // 静态文件夹
    css/
      main.3437a171.css     // 打包后css
    js/
      main.7fdd8f7c.js      // 打包后的js
  favicon.ico          // 页面图标
  index.html           // 主页面
```





---
# Git代码管理

```
  master        // 主分支
  develop       // 开发分支
  feature/      // 功能开发分支
    xxxx
    xxxx
  fix/          // 修复分支
    xxxx
    xxxx
```

项目中的 git 分支大致如上,其中

* master 项目主分支，迭代开发结束后可将develop分支合并到master分支上
* develop 开发分支，正在开发中的代码统一合并到该分支
* feature 功能开发分支，根据个人分配到的功能，在该目录下创建个人分支， 开发完成后 merge 到develop分支中
* fix 修复分支 用于修复某  单个 Bug，常用于修复已发布的代码

这仅仅是一个简单的 git 代码分支管理，根据团队和项目的需求可对分支进行更改或拓展  




---
# 自动打包发布

>项目通过打tag进行自动打包发布流程，对于新创建的项目会自动初始化阿里云oss的bucket和kong的服务配置，使用此功能你需要了解一下配置
## Tag
在项目中，可以使用git tag进行自动打包发布，但需要遵守以下规则

```
git tag release描述[-指定版本]
```

1. tag必须以release开头，使用 - 指定上传版本，当使用releasexxx时，将会把build后的文件上传到oss中当前项目对应的bucket根目录下，如：项目名称/xxx，使用指定版本是将build后的文件已版本号为根目录上传到oss中对应的bucket中
2. 项目中的package.json中必须存在build命令，否则无法自动打包发布

## webhook配置
设置git lab中的webhook

1. 打开项目的gitlab
2. 选择Settings > Integrations
3. 填写URL：[http://jenkins.k8s.quancheng-ec.com/generic-webhook-trigger/invoke?token=yug78t6fg](http://jenkins.k8s.quancheng-ec.com/generic-webhook-trigger/invoke?token=yug78t6fg)
4. 勾选 Tag push events
5. 点击 Add webhook 进行保存

<!-- ![图片](https://uploader.shimo.im/f/QRB56rxLMhwpSrTI.png!thumbnail) -->
![图片](https://images-cdn.shimo.im/QRB56rxLMhwpSrTI__thumbnail?e=1547543202&token=FYM7KChSxT-8Gcpg_aWrJfeQJeszI30W9RGXKyHO:zEVEadWTFg4rDdfJCJY-uREhIMk=)


6. 在Webhooks中查看已添加的信息，点击Test按钮，选择 Tag push events

<!-- ![图片](https://uploader.shimo.im/f/g94EQ8V0gnItsYTe.png!thumbnail) -->
![图片](https://images-cdn.shimo.im/g94EQ8V0gnItsYTe__thumbnail?e=1547543232&token=FYM7KChSxT-8Gcpg_aWrJfeQJeszI30W9RGXKyHO:xxA4otXQ8tkfW-UeTESEhAeDY-U=)



7. 返回 http 200，配置成功

![图片](https://uploader.shimo.im/f/dJLhR3rbegYCRPT8.png!thumbnail)
<!-- ![图片](https://images-cdn.shimo.im/dJLhR3rbegYCRPT8__thumbnail?e=1547543242&token=FYM7KChSxT-8Gcpg_aWrJfeQJeszI30W9RGXKyHO:GwZmc4_CB0nnZjuObv0h6ytDzt8=) -->


## Git权限配置
在使用webhook时，jenkins会获取tag下代码然后安装依赖、打包、发布，一般项目都会默认私有或内部权限，jenkins无法读取到git的代码，这时你需要将已配置在jenkins的git用户加入到你的项目组中，并赋予读的权限

1. 打开项目的git lab
2. 选择Settings > Members
3. 在Add member中搜索用户 k8s-jenkins 并添加到项目组中

<!-- ![图片](https://uploader.shimo.im/f/K90pPSVZ6oo7wtHU.png!thumbnail) -->
![图片](https://images-cdn.shimo.im/K90pPSVZ6oo7wtHU__thumbnail?e=1547543253&token=FYM7KChSxT-8Gcpg_aWrJfeQJeszI30W9RGXKyHO:wCeCyH3URXPxW3nSR_OMXp3RnFM=)

## jenkins配置

>使用项目模板时不需要配置jenkins，因为jenkins已经配置好了，jenkins的配置如下


### 1、配置在Docker容器中运行构建


<!-- ![图片](https://uploader.shimo.im/f/HzSqSo94ntAP7Enh.png!thumbnail) -->
![图片](https://images-cdn.shimo.im/HzSqSo94ntAP7Enh__thumbnail?e=1547543264&token=FYM7KChSxT-8Gcpg_aWrJfeQJeszI30W9RGXKyHO:erEztV-p6lPPW-xVy8XcKpwvKD8=)
>
>docker image中的qc-oss-upload是用于上传文件到阿里云oss中并在第一次上传的时候初始化kong的服务
>github: [https://github.com/zhushiyao/oss-uploader-docker](https://github.com/zhushiyao/oss-uploader-docker)
>dockerhub: [https://hub.docker.com/r/shiyaodocker/qc-oss-upload](https://hub.docker.com/r/shiyaodocker/qc-oss-upload)


### 2、参数化构建过程

<!-- ![图片](https://uploader.shimo.im/f/JjoRLlPWMg8FRbmZ.png!thumbnail) -->
![图片](https://images-cdn.shimo.im/JjoRLlPWMg8FRbmZ__thumbnail?e=1547543278&token=FYM7KChSxT-8Gcpg_aWrJfeQJeszI30W9RGXKyHO:F_W7ZMKb5BEweCt420N92turzCQ=)
>此配置在使用tag自动打包发布时并不会用到，配置此项仅是为了方便通过jenkins对已打过tag的项目进行再次打包发布，配置的参数与webhook中配置的参数相同，可选配置项


### 3、源代码管理

<!-- ![图片](https://uploader.shimo.im/f/lncsTWO1yXMHag7n.png!thumbnail) -->
![图片](https://images-cdn.shimo.im/lncsTWO1yXMHag7n__thumbnail?e=1547543288&token=FYM7KChSxT-8Gcpg_aWrJfeQJeszI30W9RGXKyHO:x9a14OmGupUf7tMGacRU6ZgxmTE=)

>GIT_SERVICE 是git lab webhook发送的请求中或由用户在jenkins上手动触发build时填写的参数中获取，对应项目的git地址
>k8s-jenkins 是在jenkins中配置的git用户，用于拉去git地址下的代码

### 4、构建触发器

1、选择通过webhook触发构建操作
2、设置构建操作参数，解析请求中的参数数据
<!-- ![图片](https://uploader.shimo.im/f/12DG5EkEHn0jmiHi.png!thumbnail) -->
![图片](https://images-cdn.shimo.im/12DG5EkEHn0jmiHi__thumbnail?e=1547543299&token=FYM7KChSxT-8Gcpg_aWrJfeQJeszI30W9RGXKyHO:2fc5qXOE5XvikF965LNgrQ9IfwI=)
<!-- ![图片](https://uploader.shimo.im/f/5vUuHMBz7RAZIymZ.png!thumbnail) -->
![图片](https://images-cdn.shimo.im/5vUuHMBz7RAZIymZ__thumbnail?e=1547543329&token=FYM7KChSxT-8Gcpg_aWrJfeQJeszI30W9RGXKyHO:pRqWTMgyKy0Ue6F4QYOWPauXStI=)


3、设置token
4、设置过滤器，防止其他tag触发自动打包发布流程
<!-- ![图片](https://uploader.shimo.im/f/tFmhSuJPEogStyaI.png!thumbnail) -->
![图片](https://images-cdn.shimo.im/tFmhSuJPEogStyaI__thumbnail?e=1547543340&token=FYM7KChSxT-8Gcpg_aWrJfeQJeszI30W9RGXKyHO:6nCYC11BLYOyKgH9rN3F767axwY=)


5、使用shell构建

<!-- ![图片](https://uploader.shimo.im/f/40jKNW4mIZsY9zav.png!thumbnail) -->
![图片](https://images-cdn.shimo.im/40jKNW4mIZsY9zav__thumbnail?e=1547543349&token=FYM7KChSxT-8Gcpg_aWrJfeQJeszI30W9RGXKyHO:NExu_8mvlo6tDEyVLHeqwTTOlmY=)

