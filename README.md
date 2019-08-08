# windows_spotlight

#### 如何找出自己电脑上的文件？
C:\Users\Sunny\AppData\Local\Packages\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\LocalState\ContentManagementSDK\Creatives\279978 按此路径寻找，Sunny替换成你的用户名，如果279978文件夹下找不到，请尝试其他文件夹。
此文件夹下有以时间戳命名的文件，若文件没文件后缀且大小超过6KB，很可能是我们要找的文件，用文本编辑器打开，搜索WW字样，如果发现类似WW_128000000001194609_ZH-HANS-CN字样，则此文件是我们需要的文件，将此文件命名为我们刚搜索到的字样。
#### 如何将文件提交到本项目仓库？
你需要一个Github账号，fork本项目，然后将文件提交到text目录下，然后Pull Requests，我会第一时间合并到本项目仓库。
#### 如何引用这些图片？
index.html里有一个简单示例，你可以在api/sample.js里查看工作原理，在这里可以看运行效果：https://webkb.github.io/windows_spotlight/
