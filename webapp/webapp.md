<!--
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-11-08 22:01:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-08 22:35:16
 * @Description: 文件描述
-->
### viewport
在写移动端web的时候，需要在mate标签设置viewport的属性：
```
 <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,user-scalable=0">
```
设置viewport的宽度等于设备的宽度，并且不允许用户手动缩放。
可以根据自己的需求进行设置。

移动端web和原生应用

移动端web是以移动端浏览器为载体，面向网页的开发应用，只需一个URL即可打开。

优势：

1. 跨平台，web应用运用在浏览器上，并没有直接和系统打交道，只需要系统安装浏览器即可。

2. 容易迭代，应用的所有资源都在服务器上，不需要用户主动安装更新就可以实现产品的升级迭代。

劣势：

1. 功能有限

2. 操作体验比较差

3. 无法离线使用，虽然HTML5提供了离线功能，但是并不代表用户在首次访问时本地已存在。


