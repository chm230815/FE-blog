## 1. [css] 圣杯布局和双飞翼布局的理解和区别，并用代码实现
这两个都是三栏布局 都是中间自适应 两边固定 核心是驱赶部分在最上边 最先显示
区别:
1. 圣杯布局 在一个盒子内部 通过padding + 浮动 + 位置变化 将整个三栏挤到一行中
2. 双飞翼布局和上边一样 不同的是 位置调整是通过 margin-left

```html
// 圣杯布局
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
  div{
    height: 100px;
  }
  .main{
    height: auto;
    overflow: hidden;
    padding: 0 100px;
  }
  .main div{
    float: left;
  }
  .main-body{
    background: red;
    width: 100%;
  }
  .left{
    width: 100px;
    background: #10dd21;
    position: relative;
    margin-left: -100%;
    right: 100px;
  }
  .right{
    width: 100px;
    background: #940baf;
    margin-left: -100px;
    position: relative;
    left: 100px;
  }
  .floot{
    background: #6d0a44;
  }
</style>
<body>
  <div class="header"> header </div>
  <div class="main"> 
    <div class="main-body"> body </div>
    <div class="left"> left </div>
    <div class="right"> right </div>  
  </div>
  <div class="floot"> floot </div>
</body>
</html>
```

```html
// 双飞翼布局
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
  div{
    height: 100px;
  }
  .main{
    background: #df4d09;
    width: 100%;
    float: left;
    padding: 0 100px;
    box-sizing: border-box;
  }
  .left{
    background: #0de430;
    float: left;
    width: 100px;
    margin-left: -100%
  }
  .right{
    background: #1e09d8;
    float: left;
    width: 100px;
    margin-left: -100px
  }
  .floot{
    background: #db0b0b;
    clear: both;
  }
  .demo{
    width: 100%;
    border: 1px solid red;
  }
</style>
<body>
  <div class="header"> header </div>
  <div class="main"> 
    <div class="demo">
      body
    </div>
  </div>
  <div class="left"> left </div>
  <div class="right"> right </div>  
  <div class="floot"> floot </div>
</body>
</html>
```
