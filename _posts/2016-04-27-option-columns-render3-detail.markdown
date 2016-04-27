---
layout: daily_detail
title: option columns.render url变超链接或者图片显示 《不定时一讲》 DataTable中文网
short: option columns.render url变超链接或者图片显示
date: 2016-4-27
caption: 《不定时一讲》
categories: manual daily
author: DataTable中文网
---
参数详解连接{% include href/option/columns.render.dt %}

今天由4群的小伙伴- **雨吴**  给大家讲解`columns.render` 的用法，先看个代码片段：
{% highlight javascript linenos %}
render: function(data, type, row, meta) {
    //若下面有异议，可以提出
    //个人理解  --以及参数的应用场景
    //data:当前cell的值  --主要是操作这个参数来做渲染
    //type:数据类型,枚举类型dt内置定义的  --用处不大
    //row:当前行的所有数据  --可以做来用级联(没办法更改其他cell的渲染)
    //meta:它下面有三个参数
    //   //row,col 是当前cell的横纵坐标(相对于左上角) --可以结合上个参数row做更加复杂的级联
    //   //settings:dt的api实例,动态所有的参数信息都在里面  --这个很强大,获取参数信息就好,新手不要随便更改里面的参数信息
    var node = "<label ";
    if (data == "男") {
        node += "style='color:red;'"
    } else if (data == "女") {
        node += "style='color:green;'"
    } else {
        node += "style='color:#000;'"
    }
    node += ">" + (data ? "": data) + "</label>"
    return node;
}
{% endhighlight %}
上面这段代码的效果就是把对应的值加上不同的颜色予以区分开来

提一点 `columns.render()` 是在row里面的cell渲染时触发的，它的执行也是相对于cell，所以每个cell的渲染都会触发一次render

渲染和创建还是有区别，有兴趣的可以看看 `cereatedCell` 回调方法 ，可以达到同样的效果

大家在看DataTable的API时要注意看对应api的return和options里面的方法需要return的东西，对应的`columns.render()`需要的return是

> Returns:
  The return value from the function is what will be used for the data requested.

看不懂的可以去看中文网的翻译

> 返回：方法返回的数据被用作Datatables最终使用的数据

DataTable会直接把大家return的内容解析成对应的html标签或者文本

DataTable里面的下拉框、文本框、按钮、图片、超链接、文本等，大家进行逻辑判断，把最后的内容return

大家使用`column.render`可能也会需要自己传参数进去：

{% highlight javascript linenos %}
  render: function (data, type, row, meta) {
        //render 里面想引入自定义参数信息,两种方式:
        //一、让自定义参数的作用域大于render的作用域(全局变量、缓存等);
        //二、修改源码( ** 慎用 **,一般不做考虑)
        //级联问题后面几期再讲,没有找到很好的素材
        var custom = window.sessionStorage.getItem("custom");//这里就可以获取到提前存在缓存的数据
        return data;
    }
{% endhighlight %}
明天会给大家讲解一些具体的应用场景，大家可以把一些和`columns.render`有关的有特点的问题发给群主(thxopen@datatables.club)

下面是全部代码：
{% highlight javascript linenos %}
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>DataTable中文网 不定时一讲 columns.render url变超链接或者图片显示</title>
  <link href="DataTables/css/jquery.dataTables.min.css" rel="stylesheet" />
 </head>
 <body>
  <script src="DataTables/js/jquery.dataTables.min.js"></script>
  <table id="example">
  </table>
  <script>
        var id = "";
        var oTable = $("#example").DataTable({
            "serverSide": true,//分页，取数据等等的都放到服务端去
            "deferRender": true,//当处理大数据时，延迟渲染数据，有效提高Datatables处理能力
            "destory": true,
            "ajax": {
                "dataType": 'json',
                "type": "POST",
                "url": "/GridSheet/dataGridData",
                "data": function (d) {
                    d.id = id;
                },
                "async": false
            },
            "columns": [
                {
                    "data": "id",
                    "width": "100px",
                    "title": "id"
                }, {
                    "data": "name",
                    "width": "150px",
                    "title": "姓名"
                }, {
                    "data": "sex",
                    "width": "100px",
                    "title": "性别",
                    render: function (data, type, row, meta) {
                        //个人理解  --以及参数的应用场景
                        //data:当前cell的值  --主要是操作这个参数来做渲染
                        //type:数据类型,枚举类型dt内置定义的  --用处不大
                        //row:当前行的所有数据  --可以做来用级联(没办法更改其他cell的渲染)
                        //meta:它下面有三个参数
                        //   //row,col 是当前cell的横纵坐标(相对于左上角)
                        //         --可以结合上个参数row做更加复杂的级联
                        //   //settings:dt的api实例,动态所有的参数信息都在里面
                           //  --这个很强大,获取参数信息就好,新手不要随便更改里面的参数信息
                        var node = "<label ";
                        if (data == "男") {
                            node += "style='color:red;'"
                        } else if (data == "女") {
                            node += "style='color:green;'"
                        } else {
                            node += "style='color:#000;'"
                        }
                        node += ">" + data ? "" : data + "</label>"
                        return node;
                    }
                }, {
                    "data": "img",
                    "width": "200px",
                    "title": "头像",
                    render: function (data, type, row, meta) {
                         //这里是主题  把url变成超链接、把图片路径显示为图片
                        //return "<a href='" + data + "'>" + data + "</a>";
                        return "<img src='" + data + "' />";

                    }
                }, {
                    "data": "mark",
                    "width": "300px",
                    "title": "备注",
                    render: function (data, type, row, meta) {
                        //render 里面想引入自定义参数信息,两种方式:
                        //一、让自定义参数的作用域大于render的作用域(全局变量、缓存等);
                        //二、修改源码(慎用)
                        //级联问题后面几期再讲,没有找到很好的素材
                        var custom = window.sessionStorage.getItem("custom");//这里就可以获取到提前存在缓存的数据
                        return data;
                    }
                }
            ]
        });

    </script>
 </body>
</html>
{% endhighlight %}

### 最后感谢 雨吴 的贡献，如果大家也有小的技巧，欢迎给我发邮件 thxopen@datatables.club