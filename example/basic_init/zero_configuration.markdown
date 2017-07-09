---
layout: extensions_example
title: 0配置 基本初始化 博客 DataTables中文网
short: 0配置
caption: DataTables 官方例子
tags: [例子,基本初始化]
from: /examples/basic_init/zero_configuration
tour: ['<li><a href="/">首页</a></li>','<li><a href="/example">示例</a></li>','<li class="active">0配置</li>']
css: >

    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css">
    	
script: >

    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script>
    
    <script>
        $(document).ready(function () {
           $('#example').DataTable();
       });
    </script>
---

#### DataTables 默认情况已启用一些功能，搜索、 排序、 分页等功能已经开启，如本示例所示。
        

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
           $(&#39;#example&#39;).DataTable();
      });
&lt;/script&gt;
</pre>