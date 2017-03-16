## PSD对比工具

> 前言：因为某些原因，公司的视觉设计师们并没有提供sketch之类的视觉稿，像前端输出的全为PSD,这就会带来一个问题，当页面上线的时候，设计师们要对原有版本进行微调，
PS并没有提供良好的对2张图片对比的工具或者方法，一切只能通过沟通来解决，通过这个工具，可以简单的发现2张PSD的不同之处


### 使用方法

- 下载工具
> npm install psd-compare

- 将PSD图片放入psd目录下，或通过参数指定目录
 
 - 在项目目录下执行 
 > node index.js
 
### 相关参数

|   参数  |   全称  |       描述          |  默认值  |               用法                         |
|:------:|:-------:|:------------------:|:-------:|:------------------------------------------:|
|   p    |  path   |  设置psd文件目录地址 |  ./psd   | node index -p somewhere (--path somewhere) |
|   P    |  port   |  设置对比服务器端口  |   9813   | node index -P 1234 (--port 1234)           |
|   h    |  help   |        帮助        |          | node index -h  (--help)                    |