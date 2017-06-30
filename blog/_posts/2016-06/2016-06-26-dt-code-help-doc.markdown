---
layout: daily
title: DTCODE(DataTables代码在线编辑)简陋上线 博客 DataTables中文网
short: DTCODE(DataTables代码在线编辑)简陋上线
date: 2016-6-26
group: 2016-6
caption: DataTables 中文网博客
categories: blog
tags: [博客,DTCODE]
author: DataTable中文网
banner: /images/blog/2016-06/dt-code-help-doc.png
---

关于这个在线代码编辑，我想了很久很久了，一直没有去做，这下终于狠下心把她给干了，真爽……

在线代码编辑的有很多，它们功能也非常强大，而且源码开放，比如有
[RunJS](http://runjs.cn/)、
[JS Bin](http://jsbin.com/)、
[jsfiddle](https://jsfiddle.net/)……
但是我依然想弄一个，现在我的心愿终于满足了。

<!--more-->

平时在群里看到很多朋友不怎么会提问，大家都很忙，如果能把必要的信息都贴出来，这样想帮助你的人就能很快
帮你定位到问题，而不用说一句，再跟着贴相应的，这样很被动。作为提问者，要主动，那如何在群里获得帮助呢？
我的建议是提问提供以下几点，包你事半功倍。

1. 代码 - DT初始化代码，有必要时提供全部
2. 控制台相关信息，比如 network 和 console ，特别是console里的红色错误提示
3. 请求返回的数据，在处理服务器模式时，这个信息尤为重要
4. 截图，通过截图描述你的问题，更能够表达清楚
5. 简单易懂的问题描述
6. 如果不知道上述怎么操作，参考 [如何定位问题（js调试基本技能）]({{ site.baseurl }}/manual/daily/2016/04/22/how-to-find-the-questions-basic-debug-skill-of-javascript.html)

据不完全统计，按照上述方法提问的小伙伴，问题还没提出来，就已经解决了，是不是很神奇？

下面我讲讲如何使用 DT-CODE 来辅助大家解决问题。

{% include blog/imghtml.html src='/images/blog/2016-06/dt-code-help-doc.png' alt='DT-CODE布局说明' %}

左边区域为资源引用区域，右边上部分为本地保存的代码列表，右边大块区域为代码编辑和结果预览区

说说目前都有哪些功能：

- 能在线编辑代码立马看到效果【点击result查看最终结果】
- 生成html文件，方便发给朋友直接调试【点击列表里项目后面的按钮，生成功能】
- 代码本地保存，方便复用，不浪费【点击左上角保存，保存当前代码区域到本地储存】

DT-CODE 默认有一个非常简单的实例供大家学习，页面加载完毕后会在右边上方列出demo代码，只需要点击【加载】，
即可把代码加载到编辑区域，然后可以修改代码，或者切换到【result】预览结果，或者保存或者分享。

在写这个简单例子，找DEMO数据的时候看到一些内容，我觉得值得拿出来一起分享

> never choose a language from survey results 坚决不要根据调查结果来选择你学习的语言

> Can I Become a Great Coder? 我能变成一个好的程序员么？

> Yes — in time. The best coders go through several phases on their programming journey:
是的，最好的程序员一般都会经过以下几个阶段

>The “I know nothing” phase
我什么都不知道 阶段
Everything is new, nothing is easy.
任何东西都是新的，没有什么是容易的

> The “it’s starting to make sense” phase
开始变得有意义 阶段
You’ve written a few programs and are making fewer mistakes.
你写过一些项目，犯比较少的错误

> The “I’m invincible” phase
我是不可战胜的 阶段
Your confidence matches your competence. No challenge seems too difficult.
你的自信和你的能力相匹配。没有挑战似乎太困难。

> The “I know nothing” phase, part II
我什么都不知道 阶段二
The sudden realization that development is infinitely more complex and you begin to doubt your own abilities.
突然意识到开发是更复杂的，你开始怀疑自己的能力

> The “I know a bit and that’s OK” phase
我知道一点，没关系 阶段
You have decent coding skills but recognize your limitations and can find solutions to most problems (even if that means hiring another developer).
你有良好的编程技巧，但是你意识到有局限性，对于大多数问题你能找到解决办法（意味着要雇佣另一个开发者）

> Finally, never be afraid of picking the wrong language … there are no wrong ones. There are those that aren’t best suited to a specific project, but you’ll only discover that by trial and error. Pick an interesting project, choose any language and get going.
最后，绝对不要害怕选错语言……没有错误的。

翻译的不是很好，但是希望能给大家一些启发，语言只是一个工具，帮我们解决遇到的问题的工具，语言之间其实是相通的，如果你能学好一门语言，再学其他的就不会太难。

做任何事都是一样，不要害怕错误，如果错了，改正即可，但如果你不去做，那就连失败的机会都没有。

---
计划要开发的功能：

- 中文网例子的代码可以直接加载此处运行，方便调试

DT-CODE简陋地跟大家见面了，目前为**beta 0.341**，后续有更新，将会写在这里。bug肯定也是有的，如果你在使用过程中发现**任何问题**或者**任何idea**，都可以在文章下面直接留言或者发送到我的邮箱

## &gt;&gt;[点我](http://code.datatables.club)&lt;&lt;

---

更新日志：

- 2016年6月26日
    - 发布beta 0.341



参考：

> [Tryit-Editor](https://github.com/KevZho/Tryit-Editor)

> [What’s the Best Programming Language to Learn in 2016?](https://www.sitepoint.com/whats-best-programming-language-learn-2016/)


