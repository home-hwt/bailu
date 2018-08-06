先安装好node
protobufjs github地址:
https://github.com/dcodeIO/protobuf.js#installation

安装：
npm install protobufjs -g //安装全局protobufjs
npm install uglify-js -g   //安装uglify  压缩js


.proto文件编写
message userUtil {
required int32 user_id=1;
optional string user_name=2;
}

pbjs -t static-module -w closure -o userUtil.js userUtil.proto //.proto文件生成js文件
pbts -o userUtil.d.ts userUtil.js  //js文件生成对应的d.ts接口
uglifyjs userUtil.js -m -o userUtil.min.js  //压缩js

protobuf 语法：
https://www.jianshu.com/p/5ea08c6b7031
https://developers.google.com/protocol-buffers/docs/proto3


egret中使用：
1、将下载的protobufjs中的index.d.ts修改名字放入对应的egret目录中，
将dist目录下的protobuf.js protobuf.js.map protobuf.min.js protobuf.min.js.map四个文件放在与index.d.ts同层目录中

2、将整理好的userUtils.d.ts、userUtils.js和userUtils.min.ts按egret第三方库引入使用
