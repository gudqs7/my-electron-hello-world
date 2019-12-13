## 使用 electron 将 HTML 打包成 exe (32 位)

### Windows 下 (推荐) 

#### 下载 nodejs 和 git

> 下载 nodejs 32 位 msi 安装包 (https://npm.taobao.org/mirrors/node/v12.13.1/node-v12.13.1-x86.msi)
>
> 下载 git 的安装包 (https://git-scm.com/download/win) (可能贼慢, 自行解决)

#### 安装 nodejs 及 cnpm

> 首先将 node-v12.13.1-x86.msi 双击安装, 一路 next 就行了
>
> 然后将 git 也装上, 也是一路 next, 不要犹豫

安装淘宝cnpm

```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

#### 下载 hello-world 项目

>  找到一个空白文件夹, 准备放置项目, 右键 选择 Git bash here, 然后命令行中输入: 

```shell
git clone https://github.com/gudqs7/my-electron-hello-world.git
```

下载好后, 不要关闭窗口, 继续下面操作

#### 安装依赖

在命令行中, 进入文件夹, 输入命令安装依赖

```shell
cd my-electron-hello-world
cnpm i
```

#### 试运行下 App

```shell
cnpm run dev
```

> 看到一个宽1200 高 850 的窗口里面写着一句 `Hello world` 没有! 那就成了.

#### 打包 exe

```shell
#一步到位, 生成 xxx setup.exe 安装包. (推荐)
cnpm run dist
#仅生成文件夹, 内含 xxx.exe 可启动, 很多资源文件, 需要自己二次打包
cnpm run pack
```

> 打包成功后, 可在dist 文件夹下找到 Xxxx Setup.exe





