---
layout: daily
title: option columns.render 渲染列(4) 时间格式化、内容太多优化显示、一列显示多列值 《不定时一讲》 DataTables中文网
short: option columns.render 渲染列(4) 时间格式化、内容太多优化显示、一列显示多列值
date: 2016-4-28
group: 2016-4
caption: 《不定时一讲》
categories: blog
tags: [不定时一讲]
author: 雨吴
redirect_from: /manual/daily/2016/04/28/option-columns-render4.html
---
参数详解连接{% include href/Options.html param="columns.render" %}{% include href/option/columnDefs.targets.dt %}

今天继续由4群的小伙伴- **雨吴**  给大家讲解`columns.render` 的用法
<!--more-->

### 第一个问题：时间格式化这个问题主要是代表一类需要自己写额外的js的问题：
{% highlight javascript linenos %}
Date.prototype.Format = function(fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1,
        //月份
        "d+": this.getDate(),
        //日
        "h+": this.getHours(),
        //小时
        "m+": this.getMinutes(),
        //分
        "s+": this.getSeconds(),
        //秒
        "q+": Math.floor((this.getMonth() + 3) / 3),
        //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}
{% endhighlight %}
然后大家直接在 `columns.render` 里面调用这个方法就好(代码里面的注释是告诉大家问题归类的思路，因为很多人不知道自己的问题出在那里)
{% highlight javascript linenos %}
render: function(data, type, row, meta) {
    //先讲 时间格式化
    //这类问题主要给大家讲逻辑，因为都是类似的问题，类似的解决方案
    //最基础的解决方案： 一、直接在数据源就格式化为常见的格式（sql或者后台代码格式化）;二、在dt里面格式化;
    //在js格式化时间的三种方式，我这里示范一种
    //具体方法的链接：http://www.cnblogs.com/zhangpengshou/archive/2012/07/19/2599053.html
    return (new Date(data)).Format("yyyy-MM-dd hh:mm:ss"); //date的格式 Thu Apr 26 2016 00:00:00 GMT+0800
}
{% endhighlight %}

### 第二个问题：内容太多用省略号代替、内容不换行，鼠标移上去显示详情 这个问题主要是代表一些需要用css解决的问题：
{% highlight javascript linenos %}
render: function(data, type, row, meta) {
    //然后是 内容太多用。。。。表示、内容不换行，鼠标移上去显示详情
    //这类问题最简单的肯定是使用css解决
    //    //1. table-layout: fixed 由于table-layout的默认值是auto，
    //即table的宽高将取决于其内容的多寡，如果内容的体积无法估测，那么最终表格的呈现形式也无法保证了，
    //fixed一下就好了。（注意：此样式是关键）
    //    //2. white-space: nowrap 是为了保证无论单元格（TD）中文本内容有多少，
    //都不会自动换行，此时多余的内容会在水平方向撑破单元格。
    //    //3. overflow: hidden 隐藏超出单元格的部分。
    //    //4. text-overflow: ellipsis 将被隐藏的那部分用省略号代替。
    //这4个css样式都可以百度出来的,第一个是写在table标签里面的,2、3、4写在td里面
    //假设这个tomuchcontent 就是本列的值 data
    var tomuchcontent = "asdasdaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd";
    //我这里做个简单的示范
    return '<div id="a" style="width:100px;height:100px;overflow: hidden;text-overflow: ellipsis;" '+
        'title="‘+tomuchcontent +’">‘+tomuchcontent +’</div>';
}
{% endhighlight %}
找到这个问题怎么解决就好解决了，直接就可以百度找到解决方案了

### 第三个问题：同时显示多个列的内容  这个问题其实昨天已经讲过了，自己通过一些简单的逻辑判断然后返回自己需要的结果就好
{% highlight javascript linenos %}
render: function(data, type, row, meta) {
    //最后一个 同时显示多个列的内容
    //我对这个问题的理解是 比方我有两个字段需要同时显示在一个td里面，或者一个td里面有两个按钮
    //这个columns.data就完全可以给null了,相应的columns.render().data这里就也是null
    //按钮的就是自己在里面拼click事件以及对应的按钮样式了
    //return '<a href="javascript:void(0);" onclick="del("'+row.id+'")">' + 删除
    //            + '</a><a href="javascript:void(0);" onclick="mod("'+row.id+'","'+row.name+'")">' + 编辑 + '</a>';
    return '<label>' + row.id + '</label>  <label>' + row.name + '</label>';
}
{% endhighlight %}

### 最后给大家讲解下`columns.render`和`columnDefs.render`的区别：

其实这个的区别，归根到底是columns和columndefs的区别，它们两个的区别就有

  1. `columns`先执行，`columnDefs`后执行
  2. `columnDefs`比`columns`多一个属性 {% include href/option/columnDefs.targets.dt %}

有了这个属性就可以做很多`columns`做不到的事情

希望大家可以补充下，大家一起学习

**针对第一点**:

每一次 DataTables 的是重绘或者重载都会后台执行很多回调函数  [更多参考](/reference/option/)

`columns.render`是在`createdRow`前执行的
`columnDefs.render`是在`rowCallback`后执行的

就会导致`columnDefs.render`执行的时候其实`tr`已经全部渲染出来的，大家就可以对全局做一些操作了，
如合并单元格、根据某个`tr`里面`td`改变另一个`tr`里面的`td`的渲染了等等

**针对第二点**：

就可以使一个`columnDefs.render`对应多个列了，或者在没有创建`columns`的时候使用，更加灵活，`columns.render`一对一的更加有针对性

两个option都有自己的特点，各有千秋，大家根据自己需求使用对应的option，祝大家对dt使用的更加得心应手！

下面是本节的完整代码：
{% highlight javascript linenos %}
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title></title>
  <link href="DataTables/css/jquery.dataTables.min.css" rel="stylesheet" />
 </head>
 <body>
  <script src="DataTables/js/jquery.js"></script>
  <script src="DataTables/js/jquery.dataTables.min.js"></script>
  <table id="example">
  </table>
  <script>
        Date.prototype.Format = function (fmt) { //author: meizz
            var o = {
                "M+": this.getMonth() + 1, //月份
                "d+": this.getDate(), //日
                "h+": this.getHours(), //小时
                "m+": this.getMinutes(), //分
                "s+": this.getSeconds(), //秒
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                "S": this.getMilliseconds() //毫秒
            };
           if (/(y+)/.test(fmt)) {
               fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
           }
           for (var k in o) {
               if (new RegExp("(" + k + ")").test(fmt)) {
                   fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
               }
           }
           return fmt;
        }

        var id = "";
        var oTable = $("#example").DataTable({
            "serverSide": true,
            //分页，取数据等等的都放到服务端去
            "deferRender": true,
            //当处理大数据时，延迟渲染数据，有效提高Datatables处理能力
            "destory": true,
            "ajax": {
                "dataType": 'json',
                "type": "POST",
                "url": "/GridSheet/dataGridData",
                "data": function(d) {
                    d.id = id;
                },
                "async": false
            },
            "columns": [{
                "data": "id",
                "width": "100px",
                "title": "id"
            },
            {
                "data": "name",
                "width": "150px",
                "title": "姓名"
            },
            {
                "data": "birthday",
                "width": "200px",
                "title": "生日",
                render: function(data, type, row, meta) {
                    //先讲 时间格式化
                    //这类问题主要给大家讲逻辑，因为都是类似的问题，类似的解决方案
                    //最基础的解决方案： 一、直接在数据源就格式化为常见的格式（sql或者后台代码格式化）;二、在dt里面格式化;
                    //在js格式化时间的三种方式，我这里示范一种
                    //具体方法的链接：http://www.cnblogs.com/zhangpengshou/archive/2012/07/19/2599053.html
                    return (new Date(data)).Format("yyyy-MM-dd hh:mm:ss"); //date的格式 Thu Apr 26 2016 00:00:00 GMT+0800
                }
            },
            {
                "data": "a",
                "width": "350px",
                "title": "a",
                render: function(data, type, row, meta) {
                    //然后是 内容太多用。。。。表示、内容不换行，鼠标移上去显示详情
                    //这类问题最简单的肯定是使用css解决
                    //    //1. table-layout: fixed 由于table-layout的默认值是auto，
                    //即table的宽高将取决于其内容的多寡，如果内容的体积无法估测，那么最终表格的呈现形式也无法保证了，
                    //fixed一下就好了。（注意：此样式是关键）
                    //    //2. white-space: nowrap 是为了保证无论单元格（TD）中文本内容有多少，
                    //都不会自动换行，此时多余的内容会在水平方向撑破单元格。
                    //    //3. overflow: hidden 隐藏超出单元格的部分。
                    //    //4. text-overflow: ellipsis 将被隐藏的那部分用省略号代替。
                    //这4个css样式都可以百度出来的,第一个是写在table标签里面的,2、3、4写在td里面
                    //假设这个tomuchcontent 就是本列的值 data
                    var tomuchcontent = "asdasdaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd";
                    //我这里做个简单的示范
                     return '<div id="a" style="width:100px;height:100px;overflow: hidden;text-overflow: ellipsis;" '+
                            'title="‘+tomuchcontent +’">‘+tomuchcontent +’</div>';
               }
            },
            {
                "data": null,
                "width": "350px",
                "title": "b",
                render: function(data, type, row, meta) {
                    //最后一个 同时显示多个列的内容
                    //我对这个问题的理解是 比方我有两个字段需要同时显示在一个td里面，或者一个td里面有两个按钮
                    //这个columns.data就完全可以给null了,相应的columns.render().data这里就也是null
                    //按钮的就是自己在里面拼click事件以及对应的按钮样式了
                    //return '<a href="javascript:void(0);" onclick="del("'+row.id+'")">' + 删除
                    //            + '</a><a href="javascript:void(0);" onclick="mod("'+row.id+'","'+row.name+'")">' + 编辑 + '</a>';
                    return '<label>' + row.id + '</label>  <label>' + row.name + '</label>';
                }
            }]
        });
    </script>
 </body>
</html>
{% endhighlight %}

### 最后感谢 雨吴 的贡献