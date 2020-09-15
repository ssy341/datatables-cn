---
layout: manual
toc: true
title: 安全 Security
author: /manual/security
---

安全是Web开发中最基本的主题，并且是从开发到CTO，任何人都不能忽视的主题。世界各地的的黑客每天都在制造新闻，但是不要害怕，你只要稍加注意，你也可以快速创建安全的应用程序。


## 总览（Overview）
---

本节将讨论与Datatables直接相关的web安全攻击，以及如何与之抗衡的方法。Web安全是一个非常广泛的主题，在这里不可能涵盖所有的主题。有关Web和软件安全性的更多常规信息，请参考安全方面更加出色的[OWASP][owasp]网站。



### 软件版本（Software versions）
---

考虑软件安全性时，要做的第一件事始终是运行可用软件的最新版本。最新版本将包含针对已知问题的修复程序，而这些问题可能存在与较旧的版本中。对于Datatables，最新版本始终在[下载][download]页面上提供。


### 攻击类型（Attack types）
---

通常，使用Datatables时需要考虑两种重要的攻击类型：

- 跨站脚本（Cross-Site Scripting），简称XCC
- 跨站请求伪造（Cross-Site Request Forgery），简称CSRF

还会发生其他形式的数据泄露，例如，允许未登录的用户访问明感数据，允许特权提升（查看不应允许的数据）和sql注入攻击。这些是使用Datatables创建的应用程序的主要问题。

## 跨站脚本（Cross-Site Scripting）
---

通过允许在你自己的站点上执行任意JavaScript或HTML，可以发起XSS攻击。然后，注入的JavaScript可以使用当前用户的账户执行操作或窃取信息。对于Datatables，如果允许用户编辑表内容或表中的其他数据输入，则可能会发起XSS攻击。

例如，考虑是否允许编辑表中单元格并且用户输入：`<script>alert('Hi');</script>`。当单元格显示在表中时，如果未对数据进行编码，将触发`alert()`。尽管这是一个非常简单的示例，但如果成功完成，那么更有效的攻击也是有可能的。

### 预防（Prevention）
---

有两种方法可以阻止这种类型的攻击：

- 禁止提交任何有害数据
- 使用[渲染功能][renderers]对所有不受信任的输出进行编码

对于第一种选择，你的服务器端将主动阻止所有包含有害数据的数据写入（即输入）。你可以选择简单地禁止包含任何HTML的所有数据，或使用HTML解析器来允许“安全”标签。如果采取这种方法，强烈建议你使用已知的和经过验证的安全性库，**请不要自行编写**。

使用第二种选择[渲染功能][renderers]，将防止显示数据（即输出）时受到攻击。Datatables具有两个内置的渲染功能，可以用于防止XSS攻击：`$.fn.dataTable.render.text`和`$.fn.dataTable.render.number`。

在初始化表格的时候，可以简单的给这些列指定渲染功能，例如：

```javascript
{
    data: 'product',
    render: $.fn.dataTable.render.text()
}
```
请参考[数据渲染][renderers]文档获取更加详细的信息。

## 跨站请求伪造（Cross-Site Request Forgery）
---

CSRF攻击将迫使最终用户（通常是在不知情的情况下，所有操作都在后台发生）在他们当前经过身份验证的网站或应用程序上执行不需要的操作。例如，考虑是否登录到网上银行，然后访问另一个看似无害的页面。如果该页面是要在你的银行账户上进行交易，那么在隐藏的`iframe`中，银行会认为该交易来自你，因此会接受该交易。

### 预防（Prevention）
---

为了防止此类攻击，大多数系统将使用在每个请求上提交[Token][token]，以确保最终用户是他们声称的身份。

Token的生成和处理在本节不与讨论（如果使用的是框架，请参阅框架文档，如果要创建自己的系统，请参阅[OWASP指南][owasp-csrf]）。但是，我们确实需要详细说明CSRF Token如何传输到服务器，这在使用Ajax数据源时尤为重要。

Datatables的{% include href/Options.html param="ajax" %}配置对象可以用作接受与[$.ajax][ajax]方法相同的的所有选项的{% include href/Types.html param="object" %}，包括提交`headers`和`body`的能力。根据你的应用程序期望CSRF Token的方式，可以使用以下方法之一：

- 1，设置全局的请求`headers`(这样可以确保来自页面的所有Ajax请求都具有CSRF token)：
```javascript
$.ajaxSetup( {
    headers: {
        'CSRFToken': TOKEN
    }
} );
```

- 2，从{% include href/Options.html param="ajax" %}配置提交token作为`headers`值:
```javascript
$('#myTable').DataTable( {
    ajax: {
        url: '...',
        headers: {
            'CSRFToken': TOKEN
        }
    }
} );
```

- 3，提交token作为请求数据的一部分：
```javascript
$('#myTable').DataTable( {
    ajax: {
        url: '...',
        data: function ( d ) {
            d.CSRFToken = TOKEN;
        }
    }
} );
```

在上述所有情况下，`TOKEN`都是CSRF令牌（同样，如何获取此令牌取决于你正在使用的应用程序和框架）。




[download]: https://datatables.net/download
[renderers]: {{site.baseurl}}/manual/data/renderers
[token]: https://www.owasp.org/index.php/CSRF_Prevention_Cheat_Sheet#General_Recommendation:_Synchronizer_Token_Pattern
[owasp]: https://www.owasp.org/
[owasp-csrf]: https://www.owasp.org/index.php/CSRF_Prevention_Cheat_Sheet
[ajax]: http://api.jquery.com/jquery.ajax/
