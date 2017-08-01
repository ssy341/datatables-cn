---
layout: plugins
title: 省略号 分页插件（Plug-ins） Datatables中文网
from: /plug-ins/pagination/ellipses
short: 省略号
tags: [省略号,插件,分页插件]
tour: ['<li><a href="/">首页</a></li>','<li><a href="/plug-ins">插件</a></li>','<li><a href="/plug-ins/pagination">分页插件</a></li>','<li class="active">省略号</li>']
---

该插件在1.10.+的版本已经内置，如果你要实现如下效果，不需要额外引入插件的js，只需要更新到最新的DT即可。使用1.9版本的用户任然可以继续使用此插件，
使用方法如下代码所示：


<div class="bs-docs-example">
{% include iframe.html src="ellipses_example.html" iframe_id="iframe1" %}
</div>
<pre class="prettyprint linenums">

&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;/assets/datatables/1.9.4/css/jquery.dataTables.css&quot;&gt;
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;/plug-ins/pagination/ellipses/ellipses.css&quot;&gt;

&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;/assets/datatables/1.9.4/js/jquery.dataTables.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;/plug-ins/pagination/ellipses/ellipses.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
    $(document).ready(function () {
       $(&#39;#example&#39;).dataTable({
            &#39;sPaginationType&#39;: &#39;ellipses&#39;
       });
   });
&lt;/script&gt;

</pre>





