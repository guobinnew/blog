# Orion2简介

Orion2是一个快速H5游戏制作工具，目标是用来开发小游戏、互动电子书/杂志等H5应用，可导出为H5应用、PC/移动端应用程序，工具采用Qt开发，支持跨平台。

Orion2工具主要模块包括：
场景编辑模块，可编辑单元均为插件模块，可方便通过插件SDK进行扩展；目前包括精灵、文字、九宫格、Tile地图、光照、键盘、鼠标、触摸屏等输入设备插件、数组、字典、XML、WebStorage等数据存储插件。

场景编辑
![image](/img/orion2/mainui.png)

动画帧编辑模块
![image](/img/orion2/sprite.png)

图形化脚本编辑模块，采用事件-动作机制，适合顶层逻辑实现；脚本API可通过插件进行扩展；也可以将已有的js代码封装为插件模块导入； 
![image](/img/orion2/script.png)

工程发布模块 
![image](/img/orion2/publish.png)

插件管理模块
![image](/img/orion2/plugin.png)

素材库管理模块
![image](/img/orion2/gfx.png)