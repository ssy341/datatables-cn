
# Jekyll 说明

### 安装
(自行google，略)

### 启动

```
jekyll serve
```

### 项目结构

**使用`tree`命令生成以下目录结构**

```
$ tree -d
$ tree -L 1
```

#### 参考

> https://www.cnblogs.com/ayseeing/p/4097066.html
>
> https://www.cnblogs.com/ayseeing/p/4097066.html

```
.
├── _data                           ## 动态数据、模板
│   └── sidebars                        ## 侧边栏
├── _docs                           ## 文档说明
├── _includes                       ## 被模板包含的HTML片段
├── _layouts                        ## 网页排版模板
├── _posts                          ## 框架更新日志
├── _site                           ## 最终生成的静态网页
├── _tooltips
├── assets                          ## 辅助资源文件（css布局、js脚本、图片等）
├── css                             ## 静态资源文件：css布局文件
├── fonts
├── images
├── js                              ## 静态资源文件：JavaScript脚本
├── licenses                        ## 授权协议
├── manual                          ## 手册
│   └── data
├── pages                           ## 原始内容
│   ├── mydoc
│   ├── news
│   ├── product1
│   ├── product2
│   └── tags
├── pdf
├── pdfconfigs
├── var
├── 404.md                          ## 404错误信息页面
├── _config.yml                     ## 站点配置文件
├── createtag
├── docker-compose.yml
├── Dockerfile                      ##
├── feed.xml
├── index.md
├── introduction.md
├── pdf-all.sh
├── pdf-mydoc.sh
├── pdf-product1.sh
├── pdf-product2.sh
├── README.md
├── search.json
├── sitemap.xml
├── tooltips.html
├── tooltips.json
└── update.sh                       ## git更新shell脚本
```
