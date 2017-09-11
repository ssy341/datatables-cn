---
layout: reference_md
title: language.aria.paginate.first
summary: 首页( _first_ )按钮的 WAI-ARIA 标签
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10.10
navcategory: option
keywords: language,aria,paginate,first
author: /reference/option/language.aria.paginate.first
---

## 描述(Description)
该属性能够给首页（_first_）分页按钮设置 ARIA 标签属性。
在你希望显示一个类似`«`图标在按钮本身，同时又保持好的访问体验的情况时很有用。


## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type.html param="string" %}

## 默认值(Default)
 {% include href/option/option.language param="language.aria.paginate.first" %} 属性没有默认值

## 例子(Example)
定义分页按钮为带 ARIA 标签文字的图标
{% highlight javascript linenos %}
$('#example').DataTable({
    pagingType: 'full',
    language: {
        paginate: {
            first: '«',
            previous: '‹',
            next: '›',
            last: '»'
        },
        aria: {
            paginate: {
                first: 'First',
                previous: 'Previous',
                next: 'Next',
                last: 'Last'
            }
        }
    }
});
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/option.language param="language.aria.paginate" %}
- {% include href/option/option.language param="language.paginate.first" %}

扩展阅读

- [WAI-ARIA无障碍网页应用属性完全展示](http://www.zhangxinxu.com/wordpress/2012/03/wai-aria-%E6%97%A0%E9%9A%9C%E7%A2%8D%E9%98%85%E8%AF%BB/)
- [WAI-ARIA —— 让盲人更清楚我们的网页](http://kayosite.com/wai-aria-and-html5-role.html)