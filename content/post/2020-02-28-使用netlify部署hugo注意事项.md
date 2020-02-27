---
title: "使用netlify部署hugo注意事项"
date: 2020-02-28
# lastmod: 2018-03-07
draft: false
tags: ["hugo", "博客", "netlify"]
categories: ["教程"]
# author: "*"

# weight: 1

# You can also close(false) or open(true) something for this content.
# P.S. comment can only be closed
# comment: false
toc: true

# You can also define another contentCopyright. e.g. contentCopyright: "This is another copyright."
# contentCopyright: '<a href="https://github.com/gohugoio/hugoBasicExample" rel="noopener" target="_blank">See origin</a>'
# reward: false
# mathjax: true
---


​       1. 登录Nextlify，用github账号授权登陆即可。

   2. 选择` “New site from Git”——“Github”——选择自己hugo博客源码对应的仓库——自动部署`。

      注：可以选择私人仓库，并且public可以配置.gitignore不用上传。

      遇到的报错：

      ```log
      Production: master@HEAD Failed
      failed during stage 'building site': Build script returned non-zero exit code: 255
      ```

<!--more-->

​		遇事不觉谷人希，stackoverflow上找到类似答案，需要修改Netlify控制台的环境变量与实际Hugo版本一致。

[官方说明](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/)

技术问题千万别用百度，垃圾csdn。

`“setting”——“Build&deploy”——“Environment”——"Environment variables"——“Edit variables”，左边填“HUGO_VERSION”，右边填“v0.65.3”`。

注：版本号以实际hugo version获取为准。

3. 同时搜索到另一种解决方法，但未实际验证。

   在网站根目录下新建`netlify.toml`的文件。

   ```toml
   [build]
   publish = "public"
   command = "hugo --gc --minify"
   
   [context.production.environment]
   HUGO_VERSION = "0.65.3"
   HUGO_ENV = "production"
   HUGO_ENABLEGITINFO = "true"
   
   [context.split1]
   command = "hugo --gc --minify --enableGitInfo"
   
   [context.split1.environment]
   HUGO_VERSION = "0.65.3"
   HUGO_ENV = "production"
   
   [context.deploy-preview]
   command = "hugo --gc --minify --buildFuture -b $DEPLOY_PRIME_URL"
   
   [context.deploy-preview.environment]
   HUGO_VERSION = "0.65.3"
   
   [context.branch-deploy]
   command = "hugo --gc --minify -b $DEPLOY_PRIME_URL"
   
   [context.branch-deploy.environment]
   HUGO_VERSION = "0.65.3"
   
   [context.next.environment]
   HUGO_ENABLEGITINFO = "true"
   
   ```