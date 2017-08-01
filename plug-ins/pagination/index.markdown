---
layout: plugins
title: 分页插件（Plug-ins） Datatables中文网
from: /plug-ins/pagination/
short: 分页插件（Pagination plug-ins）
---

DataTables 有下列扩展的分页风格，通过{% include href/option/options/option.options param="pagingType" %}设置，以满足不同的需求，你也可以自己开发属于自己的分页插件。


### 如何使用？

要使用分页插件，您必须引入DataTables核心库和分页插件的js。当初始化DataTable时，必须通过将{% include href/option/options/option.options param="pagingType" %}设置为插件所需的值，告诉它使用此插件，而不是使用默认值。

如下所示，怎么使用分页插件：

{% highlight javascript linenos %}

<script type="text/javascript" src="jquery.dataTables.js"></script>
<script type="text/javascript" src="dataTables.scrollingPagination.js"></script>
<script type="text/javascript">
    $(document).ready(function() {
        $('#example').DataTable( {
            "pagingType": "scrolling"
        } );
    } );
</script>

{% endhighlight %}

### 插件

- [ellipses](/plug-ins/pagination/ellipses/index.html) - 当页数很多的时候，用省略号代替数字
- [extjs](/plug-ins/pagination/extjs/index.html) - ExtJS风格的分页方式
- [four_button](/plug-ins/pagination/four_button/index.html) - 显示向前、向后、首页和尾页四个按钮
- [full_numbers_no_ellipses](/plug-ins/pagination/full_numbers_no_ellipses/index.html) - 和DT默认的full_numbers一样，只是没有省略号
- [input](/plug-ins/pagination/input/index.html) - 显示可以输入跳转到指定页的输入框
- [scrolling]() - 滚动页面的方式翻页
- [select]()
- [simple_numbers_no_ellipses]() - 和DT自带的simple_numbers一样，只是没有省略号





