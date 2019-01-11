
## 自行扩展

中文诗歌
![image](/img/yuchang/chinese.png)

机器学习Keras
![image](/img/yuchang/keras.png)

```
    from keras.models import Sequential
    from keras.layers.core import Dense, Activation
    model = Sequential()
    model.add(Dense(128, input_shape=(16,)))
    model.add(Activation('relu'))
    model.add(Dense(128))
    model.add(Activation('relu'))
    model.add(Dense(10))
    model.add(Activation('softmax'))
    model.summary()
```

MarkDown流程图
![image](/img/yuchang/flow.png)

 ```
    st8=>start: 开始:> https://www.baidu.com
    op9=>operation: 程序
    c10=>condition: 条件
    op11=>operation: 程序
    e12=>end: 结束
    op13=>operation: 程序
    op14=>operation: 程序
    st8->op9(bottom)->c10
    c10(no)->op14(bottom)->op11
    c10(yes, right)->op13(bottom)->op11
    op11(bottom)->e12
 ```