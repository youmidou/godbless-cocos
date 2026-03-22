#!/bin/bash
#pb ts协议生成工具
#author yh 2024.11.28
#注意:cocos 3.8.4 默认工程 commonjs类型
#安装库
#npm install protobufjs --save
#npm install protobufjs-cli --save
#import pb from "db://assets/Hotfix/Net/Protocal/pb.js";
#npm uninstall protobufjs
#npm uninstall protobufjs-cli
#--生成工具安装在你电脑里不安装在工程里干净代码-------------
#npm install -g protobufjs
#npm install -g protobufjs-cli
#-----end----------------------------------
#----下面是卸载列子不执行------------
#sudo npm install -g protoc-gen-ts
#sudo npm install -g protobufjs
#---查看npm根路径 npm root -g
#---卸载----
#npm uninstall protobufjs
#sudo npm uninstall -g protoc-gen-ts
#npm uninstall protoc-gen-js
#npm install protobufjs-cli
#npm list protobufjs

set -euo pipefail

# 输入与输出目录
proto_dir="./Protol"
output_dir="./Protocal"
js_out="$output_dir/pb.js"
dts_out="$output_dir/pb.d.ts"

# 重新生成输出目录
rm -rf "$output_dir"
mkdir -p "$output_dir"

# 生成最小可用的合并产物（保持现有 pb.pb.* 用法）
npx pbjs --keep-case -t static-module -w commonjs \
  --dependency protobufjs/minimal.js \
  --no-verify --no-delimited --no-convert \
  -o "$js_out" "$proto_dir"/*.proto

# 生成类型声明
npx pbts -o "$dts_out" "$js_out"

echo "Generated: $js_out and $dts_out"