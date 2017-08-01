---
layout: plugins
title: 四个按钮没有省略号 分页插件（Plug-ins） Datatables中文网
from: /plug-ins/pagination/full_numbers_no_ellipses
short: 四个按钮没有省略号
tags: [四个按钮,插件,分页插件]
tour: ['<li><a href="/">首页</a></li>','<li><a href="/plug-ins">插件</a></li>','<li><a href="/plug-ins/pagination">分页插件</a></li>','<li class="active">四个按钮没有省略号</li>']
---

该插件在1.10.+的版本已经内置，类似 `full_numbers` (参考 {% include href/option/options/option.options param="pagingType" %})
最多一次性显示7个分页按钮
使用方法如下代码所示：


<div class="bs-docs-example">
{% include iframe.html src="four_button_no_ellipses_example.html" iframe_id="iframe1" %}
</div>
<pre class="prettyprint linenums">

&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;/assets/datatables/1.10.5/css/jquery.dataTables.css&quot;&gt;

&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;/assets/datatables/1.10.5/js/jquery.dataTables.min.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;/plug-ins/pagination/full_numbers_no_ellipses/full_numbers_no_ellipses.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
    $(document).ready(function () {
       $(&#39;#example&#39;).dataTable({
            &#39;pagingType&#39;: &#39;full_numbers_no_ellipses&#39;
       });
   });
&lt;/script&gt;

</pre>





