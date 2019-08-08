# windows_spotlight

#### 如何找出自己电脑上的文件？
C:\Users\Sunny\AppData\Local\Packages\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\LocalState\ContentManagementSDK\Creatives\279978 按此路径寻找，Sunny替换成你的用户名，如果279978文件夹下找不到，请尝试其他文件夹。

以时间戳命名，文件大小超过6KB，很可能是我们要找的文件，在bat目录下有一键批处理文件，可以一键复制文件到我们指定的文件夹，用前需创建设定好路径。

用文本编辑器打开，搜索WW字样，如果发现类似WW_128000000001194609_ZH-HANS-CN字样，则确定是我们需要的文件，复制刚才的字符串作为唯一ID，重新命名文件。

#### 如何将文件提交到本项目仓库？
你需要一个Github账号，Fork本项目，将文件提交到text目录下，然后Pull Requests，我会第一时间合并到本项目仓库。
#### 如何引用这些图片？
index.html中有简单示例，你可以在api/sample.js中查看工作原理，在这里可以看效果演示：https://webkb.github.io/windows_spotlight/
