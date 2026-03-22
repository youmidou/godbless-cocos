#!/bin/bash

# 定义输入和输出目录
INPUT_DIR="./Protol"
OUTPUT_DIR="./Protocal"

# 确保输出目录存在
mkdir -p $OUTPUT_DIR

# 遍历 Protol 文件夹中的所有 .proto 文件
for proto_file in $INPUT_DIR/*.proto; do
    # 输出日志
    echo "Generating simplified TypeScript for $proto_file..."
    # 使用自定义工具生成 TypeScript 类型
    protoc \
        --plugin=protoc-gen-ts=$(which protoc-gen-ts) \
        --ts_out=$OUTPUT_DIR \
        --ts_opt=generate_interfaces_only \
        --proto_path=$INPUT_DIR \
        $proto_file
done

echo "Simplified TypeScript generation completed. Files are in $OUTPUT_DIR."
