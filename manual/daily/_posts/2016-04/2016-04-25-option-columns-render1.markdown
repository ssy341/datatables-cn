---
layout: daily
title: option columns.render 渲染列(1) 添加checkbox 《不定时一讲》 DataTable中文网
short: option columns.render 渲染列(1) 添加checkbox
date: 2016-4-25
group: 2016-4
caption: 《不定时一讲》
categories: manual daily
author: DataTable中文网
---
参数详解连接{% include href/option/columns.render.dt %}

说到这个参数，可以说是明星参数了，他几乎能解决群友们问到的问题，几乎啊！废话不说我先简单介绍下这个参数到底能解决那些常见问题。

1. 在第一列添加checkbox，radio

2. 在最后一列添加操作按钮

3. 把url变成超链接、把图片路径显示为图片

4. 时间格式化

5. 内容太多用。。。。表示、内容不换行，鼠标移上去显示详情

6. 替换字符，1显示是，0显示否

7. 同时显示多个列的内容

8. ……

太多了，我一下子列不玩了，欢迎大家补充说明，下面我就一个一个的讲解，这些常见的问题怎么解决

有如下格式的数据（注：以下数据均以最简单的格式来解释说明）：
{% highlight javascript linenos %}
{
    data:[
        {"name":"datatable中文网","age":2,"id":1},
        {"name":"datatable中文网2","age":3,"id":2}
    ]
}
{% endhighlight %}
首先解决第一个问题，**怎么在首列添加checkbox**

js部分代码：
{% highlight javascript linenos %}
var table = $("#tableid").DataTable({
    ajax: {
        url: "data.json",
        type: "POST"
    },
    columns: [{
        data: null,
        title: "<input type='checkbox' name='checklist' id='checkall' />"
    },
    {
        data: "name",
        title: "名称"
    },
    {
        data: "age",
        title: "年龄"
    }],
    columnDefs: [{
        //   指定第一列，从0开始，0表示第一列，1表示第二列……
        targets: 0,
        render: function(data, type, row, meta) {
            return '<input type="checkbox" name="checklist" value="' + row.id + '" />'
        }
    }]
});
{% endhighlight %}
这里同时使用了columns和columnDefs，可以说后者是前者的补充说明，两个属性的用法也比较多，这里不再进一步说明，以后的讲解中会一一讲到

render方法有四个参数

* data表示的是，就本例来说 由于columns里第一列data指定的为null，所以render里data也是null，这个是相对应的
* type，表示数据类型，与如下值：display，filter，sort，type这一节先不讲具体意思，先提一下
* row，包含了整行的数据，所以在return里可以使用row.id 获取数据集里每条数据的id数据
* meta，这个目前自己用的比较少，感觉暂时没有什么用处，先不说，如果有知道的欢迎补充

render从单词的意思上讲 就是渲染，所以这里 retrun 一个 checkbox的字符串就替换了最终表格显示，那么这样就实现我们需要的效果了，在第一列加上了复选框

html部分代码：
{% highlight HTML linenos %}
<table id="tableid">
        <!-- 由于我在dt初始化代码里配置了columns.title属性，所以在html里不用再书写th标签-->
</table>
{% endhighlight %}
今天关于columns.render 就讲到这里，明天接着讲其他的