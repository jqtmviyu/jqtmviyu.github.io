---
title: "用Github Page 搭免费博客"
date: 2017-11-13
tags: ["博客", "github", "教程"]
categories: ["笔记"]
toc: true
---
# 用Github Page 搭免费博客



一.搭建hexo博客

1.安装Node.js

下载地址：[传送门](https://nodejs.org/en/)

下载的文件是.msi后缀的，win10-x64-ltsb2016直接双击安装可能会出现2502、2503错误，在安装文件所在目录下，`Shit+右键，在此处打开命令窗口`，输入`msiexec /i 文件名.msi` ，就能成功安装。（如果还是无效，用管理员权限cmd）

可以通过node -v命令来测试NodeJS是否安装成功。

2.安装Git

下载地址：[传送门](https://git-scm.com/)

下载相应版本完成安装，可以通过git -version命令来测试git是否安装成功。

3.注册Github账号

准备好fq工具，注册时的usename用户名和邮箱很重要，因为默认的博客地址是https://usename.github.io/这种形式的，邮箱则关系到安全和通知。

3.1添加SSH Key

SSH Key是一个认证，让github识别绑定这台机器，允许这台机器提交。执行如下命令：

```
cd ~/. ssh
```

~这个符号，表示在用户目录下 
执行代码如果提示：No such file or directory 说明你是第一次使用git。

新建新的SSH Key

在Git Bash执行代码：

```
ssh-keygen -t rsa -C "你的邮箱@gmail.com"
```

注意：此处的`-C`的是大写的。

然后系统会要求你输入密码（密码在后面每次提交都需要输入，嫌麻烦可以直接两次回车不设置）：

```
Enter passphrase (empty for no passphrase):<输入加密串>
Enter same passphrase again:<再次输入加密串>
```

在回车中会提示你输入一个密码，这个密码会在你提交项目时使用，如果为空的话提交项目时则不用输入。这个设置是防止别人往你的项目里提交内容。

* 输入密码的时候没有 * 字样的，你直接输入就可以了。
* 邮箱输错/密码忘记，

---待完善
2020-02-22尝试迁移hexo到hugo


