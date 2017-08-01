---
layout: plugins
title: 跳转指定页面 分页插件（Plug-ins） Datatables中文网
from: /plug-ins/pagination/input
short: 跳转指定页面
tags: [跳转指定页面,插件,分页插件]
tour: ['<li><a href="/">首页</a></li>','<li><a href="/plug-ins">插件</a></li>','<li><a href="/plug-ins/pagination">分页插件</a></li>','<li class="active">跳转指定页面</li>']
---

该插件允许用户输入页码直接跳转到指定页面，同时还提供首页，尾页，上一页，下一页四个按钮
使用方法如下代码所示：


<div class="bs-docs-example">
{% include iframe.html src="input_example.html" iframe_id="iframe1" %}
</div>
<pre class="prettyprint linenums">

&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;/assets/datatables/1.10.5/css/jquery.dataTables.css&quot;&gt;

&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;/assets/datatables/1.10.5/js/jquery.dataTables.min.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;/plug-ins/pagination/input/input.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
    $(document).ready(function () {
       $(&#39;#example&#39;).DataTable({
            &#39;pagingType&#39;: &#39;input&#39;
       });
   });
&lt;/script&gt;

</pre>





