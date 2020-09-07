# 建立一个react+typescript+webpack项目

<a href="https://hackernoon.com/react-with-typescript-and-webpack-654f93f34db6">参考教程</a>

开始

```shell
mkdir react-ts-webpack # 建立一个空文件夹
cd react-ts-webpack
code . # vscode打开这个文件夹
```

> Create file **webpack.config.js**: This is for webpack configurations
> Create file **tsconfig.json**: This is for typescript configurations
> Create file **server.js**: This is your server to start up the application
> Create folder **src**.
> Create folder **app** inside **src**.
> Create a file **index.html** inside **app** and folder **components**
> Create files **App.tsx** inside **app** and **Hello.tsx** inside components

```shell
|-src
  |-app
    |-components
      |-Hello.tsx
    |-App.tsx
    |-index.html
|-package.json
|-package-lock.json
|-server.js
|-tsconfig.json
|-webpack.config.js
```

下载产品依赖：
```shell
npm i react react-dom express typescript --save-dev
npm i @types/react @types/react-dom webpack webpack-cli ts-loader webpack-dev-middleware webpack-hot-middleware html-webpack-plugin source-map-loader -D
```

对webpack的一些简要介绍：

- **entry：**The way webpack works is you provide it an entry and it claws its way up to build your app looking into what your entry imports and creates a dependency graph accordingly, the more properties you provide to this object, the same amount of bundles it is going to create, so by looking into the *entry* and *output* config, you can guess that it is going to create *app.bundles.js* and *vendor.bundles.js*. The reason for having separate bundles is because your react and react-dom code is unlikely to be changed, so having them as separate bundle (called vendor) makes sense for your browser to be able to cache it for performance. The webpack-hot-middleware/client in the app property is present for enabling the app code to be live reloaded.

    为了加强理解给出我的翻译：webpack的工作方式是：你提供一个entry，它会以抓取方式来构建你的应用，查看你的条目import了什么，并相应地创建一个依赖图，提供给该对象的属性越多，它将创建的bundle（这里指包）数量就越多；因此，通过查看entry和output 的配置，您可以猜测它将创建app.bundle.js 和vendor.bundles.js ；使用separate bundles(独立捆绑包)的原因是，您的react和react-dom代码不太可能被更改，因此将它们作为独立捆绑包(称为vendor)对于您的浏览器能够缓存它们以**提高性能**是有意义的。app属性中的webpack-hot-middleware/client是用于实时重新加载应用代码的。
    
- **output:** Webpack looks at this configuration when it has to emit the bundled code from your app to the disk. *path* is the output directory for the code to be written and *filename* is as the name suggests the name of the file to be given to the output code.

    指出输出路径以及文件名。

- **devtool:** Webpack looks at this config to add certain tools for development. Here source-map is added so that the code is source-mapped in the browser so that debugging can be made easy in development time.

    Webpack通过这个配置为开发添加特定的工具。在这里添加了源代码映射，以便在浏览器中对代码进行源代码映射，以便在开发时便于调试。

- **resolve**: Webpack looks here to decide whether to consider this file for bundling or leave it, so in our app it considers files with extensions ‘*js*’, ‘*jsx*’, ‘*json*’, ‘*ts*’, ‘*tsx*’ for bundling.

    resolve：解析，Webpack在这里决定是考虑这个文件进行绑定还是保留它，所以在我们的应用中，它考虑扩展名为' *js* '， ' *jsx* '， ' *json* '， ' *ts* '， ' *tsx* '的文件进行绑定。

- **module:** This configuration enables webpack to load a particular file when requested by the app with the help of loaders. In our app we are using ts-loader and source-map-loader. source-map-loader is already covered above. So, without *ts-loader*, webpack would not be able to understand this import in the *App.tsx* file since *Hello* component is a ‘*tsx*’ file understood by your editor but not by webpack when the import actually occurs.

    模块:这个配置允许webpack在app请求时通过加载器的帮助加载特定文件。在我们的应用程序中，我们使用ts-loader和source-map-loader。source-map-loader上面已经说过了。因此，如果没有ts加载器，webpack将无法理解App.tsx文件中的这个导入，因为Hello组件是一个' tsx '文件，可以被编辑器理解，但当导入实际发生时webpack不能理解。

    总结：一句话，使webpack可以使用加载器加载相应的组件，并理解相应的代码，以便于webpack使用。

- **plugins**: Webpack cannot do everything and it is kind of wrong for us to expect it to do everything. So, it overcomes its limitation by providing plugins to let it be extended beyond its capabilities like the *html-webpack-plugin* creates a template file to be served to the browser from our *index.html* file in the *src* folder and the *HotModuleReplacement* plugin enables our code to be hot reloaded removing the need to stop the server and run it again every time a change is made to the app.

    通过插件扩展webpack的能力。

```shell
npm run build
```

解决实时同步问题：

```js
declare let module: any
if (module.hot) {
   module.hot.accept();
}
```

通过在App.tsx中添加代码解决了实时同步的问题。虽然还有另一种方法通过修改webpack.config.js中的watch属性来同步，但这里先不研究了。这里主要通过第一遍操作实践，对整个项目脚手架的搭建有一个初步的认识~