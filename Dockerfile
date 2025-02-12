# 第一阶段：构建阶段（从 Gitee 拉取代码）
FROM node:18-alpine AS builder

# 安装 git（Alpine 系统需手动安装）
RUN apk add --no-cache git

# 设置构建参数（可自定义仓库地址、分支、子目录）
ARG GIT_REPO="https://gitee.com/Huang-Long-Bo/blog.git"
ARG BRANCH="master"
ARG PROJECT_DIR="./"  # 如果代码在仓库子目录中，需指定路径（如 "frontend/"）

# 克隆代码到容器中
RUN git clone -b ${BRANCH} --depth 1 ${GIT_REPO} /app/src

# 进入项目目录（如果代码在仓库子目录中）
WORKDIR /app/src/${PROJECT_DIR}

# 安装依赖并构建
RUN npm ci && npm run build

# 第二阶段：生产阶段（使用 Nginx 托管）
FROM nginx:alpine

# 复制构建产物到 Nginx
COPY --from=builder /app/src/${PROJECT_DIR}/build /usr/share/nginx/html

# 复制自定义 Nginx 配置（可选）
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]