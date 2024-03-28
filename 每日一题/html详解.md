## 1. [html] 页面导入样式时，使用link和@import有什么区别？
1. 加载顺序
   1. link是可以与html资源并行加载的 而@import却不行 需要页面加载完再加载css文件 意味着@import可能会阻塞渲染
2. 兼容性
   1. link兼容所有 
3. 引入方式
4. 预加载
5. 覆盖规则
6. dom操作

## 2. [html]html的元素有哪些（包含H5）？
// 太多了

## 3. [html]HTML全局属性(global attribute)有哪些（包含H5）？
1. accesskey 将元素绑定快捷键
   缺点
   - 每个浏览器快捷键实现方式不同 比如说谷歌浏览器就是alt + key
   - 容易引发冲突
   - 需要额外的通知
   - 不建议在元素上使用accesskey将快捷键绑定
2. autocapitalize 能自动输入大写(没用)
3. autofocus 自动聚焦
   1. 自动聚焦可能会使页面发生滚动
   2. 在某些设备上会打开虚拟键盘
4. class (过)
5. contenteditable 是否可以编辑
6. data-* 可以通过data-*在html中存储数据 并通过js来读取 目前感觉没有什么太大用处(问前端存储的时候可以提一嘴)
7. dir 文本的排列方向
8. draggable 是否可以拖动
9. hidden 与display none 一样可以隐藏属性
10.  id(过)
11.  enterkeyhint 移动端键盘的回车样式(有用)
12.  exportparts 影子树 没看懂过后研究 记得有这个东西就行
13.  
