## 围住神经猫

### 准备工作 
首先从网上下载了神经猫的全部图像资源，导入素材库中。 

![image](/img/orion2/demo/cat/step1.png)

神经猫的动画帧在一个图片中，因此需要对其进行分割处理，将动画帧提取出来。 

![image](/img/orion2/demo/cat/step2.png)

在动画编辑器中建立一个Cat动画精灵，包含2个动画序列：Default(正常状态)和Closed（被围住）；每个帧图像的锚点在图像底部 

![image](/img/orion2/demo/cat/step3.png)

再建立一个Grid动画精灵，用于实现神经猫走的格子，只有一个缺省动画序列，包含2帧：0为空格子，1表示非空格子。 

![image](/img/orion2/demo/cat/step4.png)

当游戏结束时还会弹出窗口，共有2个窗口：一个用于成功，另一个用于失败，将这个2个窗口图片也作为一个动画精灵SJCatBoard 

![image](/img/orion2/demo/cat/step5.png)

接下来利用工具建立2个游戏场景：开始场景和游戏场景。 
### 开始场景
开始场景由2个图片精灵组成，1个是背景图片，1个是显示“开始游戏”按钮的图片 

![image](/img/orion2/demo/cat/step6.png)

开始场景的脚本实现如下： 
a)初始化，居中显示 

![image](/img/orion2/demo/cat/step7.png)

b)进入游戏，点击开始按钮图片进入游戏场景 

![image](/img/orion2/demo/cat/step8.png)


### 游戏场景
游戏场景由背景图片、神经猫精灵、格子精灵、结果窗口精灵、结果文本对象和再来一次界面精灵组成。神经猫走个格子为9X9大小，这里采用脚本来实现格子地图的生成，因此在场景中看不到格子地图。 

![image](/img/orion2/demo/cat/step9.png)

游戏场景的脚本实现如下： 
a)初始化，这个场景的初始化的工作有些多，采用顺序执行模块来分步实现； 

![image](/img/orion2/demo/cat/step10.png)

首先对定义的变量初始化，主要是定义了格子地图的偏移位置、格子大小、开始游戏时地图上的障碍（非空格子）数目等。 
 
 ![image](/img/orion2/demo/cat/step11.png)


为了记录9X9格子地图的状态（格子是否为空，神经猫在那个格式上），这里使用一个插件对象Array（数组），是一个最高3维的数组（例如设置深度为1，则变为2维数组）。

![image](/img/orion2/demo/cat/step12.png)

生成9X9的格子地图数组，每个格子状态定义：0=空，1=非空，2=神经猫； 

![image](/img/orion2/demo/cat/step13.png)

根据初始化障碍数目，在地图上随机生成障碍； 

![image](/img/orion2/demo/cat/step14.png)

在地图中心创建神经猫精灵； 

![image](/img/orion2/demo/cat/step15.png)

根据格子地图数组生成整个格子地图（由于神经猫所在图层位于格子地图之上，所以先创建神经猫不会发生遮挡问题）； 

![image](/img/orion2/demo/cat/step16.png)

b)玩家点击处理 
当玩家点击一个格子时，标记该格子被占，同时神经猫也要移动一格；判断神经猫是否被围或逃跑成功则游戏结束显示结果界面；
由于神经猫的寻路算法采用图形化脚本实现会非常繁琐，图形化脚本主要用于高层逻辑的实现，因此这里将神经猫的寻路算法封装为一个精灵行为插件sjcat：插件定义了一个动作FindPath来计算逃跑路线，2个条件用来判断神经猫是否为围住或者是逃跑成功，3个表达式用来获取神经猫下一步移动位置和状态值； 

![image](/img/orion2/demo/cat/step17.png)

当玩家点击一个非空格子，同时神经猫的状态为0（0=正常，1=逃跑成功，2=被围住）时 

![image](/img/orion2/demo/cat/step18.png)

将被点击的格子标记为非空，计算神经猫下一步移动位置； 

![image](/img/orion2/demo/cat/step19.png)

如果下一步格子有效，将神经猫移动到该格子上； 

![image](/img/orion2/demo/cat/step20.png)

判断神经猫的状态（逃跑成功或者被围住），则游戏结束，显示结果窗口 

![image](/img/orion2/demo/cat/step21.png)

c)重玩 
当玩家点击“再来一次”按钮图片时，重新开始游戏；只需要调用“重新启动场景”即可 

![image](/img/orion2/demo/cat/step22.png)

（3）发布游戏 
目前Orion工具除了可以发布HTML5版本以外，还支持基于NW.js的跨平台发布，将游戏打包成面向Windows、Linux和MacOSX的可执行程序（文件大小会变得很大）； 

![image](/img/orion2/demo/cat/step23.png)
 
可以配置应用程序的窗口样式； 

![image](/img/orion2/demo/cat/step24.png)
 
以win64为例，导出的文件目录格式， 

![image](/img/orion2/demo/cat/step25.png)
 
运行界面为 

![image](/img/orion2/demo/cat/step26.png)