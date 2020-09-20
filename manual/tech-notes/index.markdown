---
layout: manual
toc: true
title: 技术说明 Technical notes
author: /manual/tech-notes/
---

以下的技术说明包含有关Datatables提示的错误信息，这些错误不是由JavaScript直接产生的，而是有关错误状态的的一些信息。

## 技术说明（Technical notes）

- ### 1，[Warning: Invalid JSON response][1]

来自Datatables的警告，指出“无效的JSON响应”，这个是Datatables最常见的错误之一。该技术说明准确解释了其含义以及如何诊断导致问题的原因。[更多 »][1]

- ### 2，[Warning: Non-table node initialisation][2]

Datatables只会在{% include href/HtmlTags.html param="table" %}元素上初始化。在任何其他元素上使用Datatables都会导致此错误。[更多 »][2] 

- ### 3，[Warning: Cannot reinitialise DataTable][3]

Datatables初始化后，不能再通过向构造器里传入其他属性来添加功能，Datatables不能动态更改。创建表格之后，你只能通过[API][api]来操作表格，向其传入新的选项，将会得到此错误。[更多 »][3] 

- ### 4，[Warning: Requested unknown parameter][4]

当Datatables尝试向数据源里获取指定属性数据，而数据源里不包含则会弹出该警告。[更多 »][4] 

- ### 5，[Warning: Unknown paging action][5]

如果使用Datatables未知的操作调用{% include href/APIs.html param="page()" %}方法，则会弹出此警告。 [更多 »][5] 

- ### 6，[Warning: Possible column misalignment][6]

启动滚动条功能后，Datatables会将一个表分为两个单独的{% include href/HtmlTags.html param="table" %}，然后会尝试匹配两个表之间的列宽。当Datatables无法匹配两个表之间的列宽时，会弹出此警告。[更多 »][6] 

- ### 7，[Warning: Ajax error][7]

当Datatables在发出Ajax请求时遇到的一般错误或未知错误时，会弹出此警告。这个需要查看Ajax的请求信息以了解失败的原因。[更多 »][7] 

[1]: {{ site.baseurl }}/manual/tech-notes/1
[2]: {{ site.baseurl }}/manual/tech-notes/2
[3]: {{ site.baseurl }}/manual/tech-notes/3
[4]: {{ site.baseurl }}/manual/tech-notes/4
[5]: {{ site.baseurl }}/manual/tech-notes/5
[6]: {{ site.baseurl }}/manual/tech-notes/6
[7]: {{ site.baseurl }}/manual/tech-notes/7


[md]: http://en.wikipedia.org/wiki/Markdown