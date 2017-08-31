---
layout: extensions_example
title: 不同的分页样式 基本初始化 博客 DataTables中文网
short: 不同的分页样式
caption: DataTables 官方例子
tags: [例子,基本初始化]
from: /examples/basic_init/alt_pagination
tour: ['<li><a href="/">首页</a></li>','<li><a href="/example">示例</a></li>','<li class="active">不同的分页样式</li>']
css: >

    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css">
    	
script: >

    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script>
    
    <script>
       $(document).ready(function () {
           $('#example').DataTable({
               "pagingType": "full_numbers"
           });
       });
    </script>
---

默认情况下 Datatables 的分页就是上一页、下一页和6个页数按钮，这适合大部分情况。不过也有用户不喜欢这样，Datatables提供了四个模式供用户选择，通过设置`pagingType`选项来配置
                                  
- `numbers` - 只有只有数字按钮 
- `simple` - 只有上一页、下一页两个按钮 
- `simple_numbers` - 除了上一页、下一页两个按钮还有页数按钮，Datatables默认是这个 
- `full` - 有四个按钮首页、上一页、下一页、末页 
- `full_numbers` - 除首页、上一页、下一页、末页四个按钮还有页数按钮
- `first_last_numbers` - 除首页、末页两个按钮还有页数按钮

更多分页插件，参考 [这里](/plug-ins)。

ps:DataTables中文网总结了问的最多的是指定页面跳转[传送门](https://datatables.net/plug-ins/pagination/extjs)

下面的例子展示了full_numbers类型的分页

       
        

<div class="bs-docs-example">
    {% include example/table_eaxmple.html %}
</div>
<pre class="prettyprint linenums">
&lt;!--引入css--&gt;
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css&quot;&gt;

&lt;!--引入JavaScript--&gt;
&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;//code.jquery.com/jquery-1.12.4.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js&quot;&gt;&lt;/script&gt;

&lt;!--初始化代码--&gt;
&lt;script&gt;
     $(document).ready(function() {
           $(&#39;#example&#39;).DataTable({
                 &quot;pagingType&quot;:   &quot;full_numbers&quot;
           });
      });
&lt;/script&gt;
</pre>