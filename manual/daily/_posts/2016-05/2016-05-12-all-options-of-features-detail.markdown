---
layout: daily_detail
title: DataTables初始化对照模板1（全部option - Features 特性） 《不定时一讲》 DataTable中文网
short: DataTables初始化对照模板1（全部option - Features 特性）
date: 2016-5-12
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
author: DataTable中文网
---
[所有option连接]({{site.url}}/reference/option/)

相关连接

[Data]({{site.url}}{% post_url 2016-05-12-all-options-of-data %})
[Callbacks]({{site.url}}{% post_url 2016-05-12-all-options-of-callbacks %})
[Columns]({{site.url}}{% post_url 2016-05-12-all-options-of-columns %})
[Options]({{site.url}}{% post_url 2016-05-12-all-options-of-options %})
[Internationalisation]({{site.url}}{% post_url 2016-05-12-all-options-of-internationalisation %})


PS：以下所谓的老版指的是1.9，新版指的是1.10

这里要说明下，到目前为止，DataTables的最新版为1.10.11，但是大部分的朋友在网络上搜索到的还是1.9版本的写法

为了防止新老混用造成不必要的麻烦，我在这里列出新版参数的列表，大家对照参考

虽然作者在1.10版中给出了兼容，为了规范起见，用新版的就写新版的写法，自己看着舒服，用着也放心

新版和老版很容易区分 [详见]({{site.url}}/upgrade/1.10-convert.html)

Features - 特性部分

下面每个属性的值为DataTables的默认值，对应的中文解释，请参考[options]({{site.url}}/reference/option/)
{% highlight javascript linenos %}
var table = $("#example").DataTable({
    "autoWidth":true,
    "deferRender":false,
    "info":true,
    "jQueryUI":true,
    "lengthChange":true,
    "ordering":true,
    "paging":true,
    "processing":false,
    "scrollX":false,
    "scrollY":false,
    "searching":true,
    "serverSide":false,
    "stateSave":false
});
{% endhighlight %}
这里提醒一点，代码可copy，但是最好弄懂意思，不懂的话，不要贴上就用，注意以下几点

    1. 默认为true的功能，不用再写了，这不是写作文，你不需要凑字数
    2. 需要什么写什么，有些小伙伴贴出的代码看着很累，看起来以为在翻译每个参数的意思，这里不需要撑场面，壮胆
    3. 先简单，后复杂，先出效果，再去想着封装
    4. 欢迎大家补充……

