## Block定义

每个包目录导出一个Block数组，数组的每个元素为一个Block定义。
Block 定义格式为：

```
 {
    id: 'move',    // ID
    shape: 'slot',   // 图形形状
    category: 'motion',  // 类目
    draggable: true,  // 是否可拖动
    state: {  // 状态定义
      data: {  // 数据项定义
        sections: [  // 每个数据单元为一个section
          {
            type: 'text',  //  Text section类型
            text: '移动'  // 显示的文字
          },
          {
            type: 'argument',  // 可输入的参数 section
            datatype: 'number',  // 数据类型，分为string， number, boolean, enum
            data: {
              value: 1  // 参数值
            }
          },
          {
            type: 'text',
            text: '步'
          }
        ]
      }
    }
```
