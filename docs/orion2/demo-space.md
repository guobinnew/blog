## 太空大战

下面介绍如何使用Orion2开发一个简单的H5飞行射击游戏
游戏包含2个界面场景：

+ 开始界面
![image](/img/orion2/demo/space/start.png)

+ 游戏场景 
![image](/img/orion2/demo/space/game.png)

## 制作过程

### 开始界面开发

游戏场景设计功能与大多游戏编辑类似，这里不做太多介绍，主要介绍脚本设计部分。首先新建一个场景Start，排放好背景图片和“开始游戏”文字 

![image](/img/orion2/demo/space/step1.png)

开始界面的功能比较简单，在界面中用户点击屏幕（或点击鼠标）就进入游戏界面。下面开始脚本设计： 
a) 居中显示：在进入场景时，将屏幕中心移动到场景的中心位置。 

![image](/img/orion2/demo/space/step2.png)

b) 文字闪烁：在每1秒中，前0.3秒隐藏StartGame文字，后0.7秒显示文字。 

![image](/img/orion2/demo/space/step3.png)

c) 输入处理：当按下空格键、鼠标点击（在PC设备上使用鼠标输入模拟触摸输入）或触摸屏幕任意位置时进入游戏场景TMallCity。 

![image](/img/orion2/demo/space/step4.png)

这样开始界面就制作完成了。通过预览可以看到 

![image](/img/orion2/demo/space/step5.png)

### 游戏场景开发

与前面类型，首先排放好背景图片，然后向场景中添加玩家飞机、敌机、子弹和爆炸动画等对象。

![image](/img/orion2/demo/space/step6.png)

每个游戏精灵的设计包含以下几个方面： 
（1）动画序列，例如玩家飞机包含正常飞行、向左倾斜和向右倾斜3个动画序列。 

![image](/img/orion2/demo/space/step7.png)
 
玩家飞机需要与子弹进行碰撞检测，因此需要定义动画帧的碰撞网格 

![image](/img/orion2/demo/space/step8.png)
 
（2）行为，例如玩家飞机必须始终在场景边界内，进行需要给玩家飞机添加“Bound”行为，确保飞机不会跑到场景之外； 

![image](/img/orion2/demo/space/step9.png)
 
当场景设计开之后，开始脚本设计（跟前面比，就有些复杂），这里挑一部分介绍： 
a）场景初始化：将视口移动到场景底部，初始化得分变量和StartTime（进入场景的逻辑时间）。

![image](/img/orion2/demo/space/step10.png)
 
b）玩家飞机控制：用鼠标控制飞机在场景中移动；当飞机向左移动，播放向左倾斜动画；反之，向右运动播放向右倾斜动画。松开鼠标后，飞机恢复到缺省动画。 

![image](/img/orion2/demo/space/step11.png)
 
c）玩家自动开火：当敌机出现在视口中并且位于玩家上方时，则每0.1秒发射1个子弹，子弹直线向上运动；否则，停止发射子弹。 

![image](/img/orion2/demo/space/step12.png)
 
d）子弹碰撞处理：玩家子弹碰上敌机，敌机血量减1，得1分；敌机血量为0，则播放爆炸动画，得50分；玩家碰上敌机子弹，血量减10；所有子弹发射碰撞，播放子弹爆炸动画。 

![image](/img/orion2/demo/space/step13.png)
… 
下面是整个脚本的画面 

![image](/img/orion2/demo/space/step14.png)

整个游戏设计好之后，通过发布模块，配置导出参数，例如缺省游戏视口大小，画面质量、是否启动WebGL等等, 导出到指定目录中 

 ![image](/img/orion2/demo/space/step15.png)

导出目录中内容如下 

![image](/img/orion2/demo/space/step16.png)

最终游戏画面为 

![image](/img/orion2/demo/space/step17.png)