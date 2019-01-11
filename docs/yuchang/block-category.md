## 类目定义

Block定义文件位于项目目录/client/src/scratch/blockDefs/packages目录下。Block按包（package）进行管理，
每个包为一个独立目录，其中base目录为基础Block，其余目录为扩展Block。

每个Block指定一个类目，类目目前主要用来定义颜色属性，类目定义文件位于项目目录/client/src/scratch/blockDefs/categorires.js
，可以自行进行扩展。

类目定义格式为：

```
  {
    'internal': {   // 类目ID
      name: '内部',  // 名称
      display: 'none',  // 是否可见
      state: {
        background: {   // 背景颜色定义
          stroke: '#000000',
          fill: '#000000',
          opacity: '0.2'
        }
      }
    }
  }
```