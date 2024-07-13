# 使用 Node.js 20.11.1 镜像作为基础镜像
FROM node:20.11.1

# 安装 pnpm
RUN npm install -g pnpm

# 创建应用目录
WORKDIR /usr/src/app

# 复制 pnpm 的相关文件
# COPY .npmrc ./
COPY pnpm-lock.yaml ./
COPY package.json ./

# 安装依赖
RUN pnpm install

# 复制项目文件
COPY . .

# 构建 NestJS 项目
RUN pnpm build

# 暴露应用运行的端口（假设您的应用运行在端口 3000）
EXPOSE 3000

# 运行应用
CMD ["pnpm", "start:prod"]

