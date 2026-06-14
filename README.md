# Daily Brief Studio

一个个性化新闻摘要与博客草稿生成器。用户输入兴趣偏好和关键词后，系统会筛选相关新闻，生成每日摘要、选题判断、博客草稿和社媒短文。

当前版本是无依赖静态 MVP，使用 Demo 新闻数据跑通完整产品流程。下一阶段可以把新闻源和 LLM 生成替换为真实服务。

## 当前能力

- 输入兴趣领域、关键词、写作风格和日报长度
- 根据偏好对新闻候选池排序
- 生成今日摘要、推荐理由、风险提示和来源链接
- 自动生成博客草稿
- 生成社媒短文
- 复制或下载 Markdown

## 运行方式

直接在浏览器打开：

```text
index.html
```

也可以在当前目录启动一个静态服务器：

```bash
python3 -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 开源准备

推荐先用 MIT License 开源，方便别人学习、二次开发和贡献。当前仓库已包含：

- `LICENSE`：MIT 许可证
- `.gitignore`：忽略 macOS、编辑器、日志和临时文件
- `CONTRIBUTING.md`：贡献说明

发布到 GitHub：

```bash
git init
git add .
git commit -m "Initial MVP"
git branch -M main
git remote add origin https://github.com/<your-name>/daily-brief-studio.git
git push -u origin main
```

如果要直接公开演示，可以在 GitHub 仓库里开启 GitHub Pages：

```text
Settings -> Pages -> Deploy from a branch -> main / root
```

## 下一步落地路线

### 第 1 阶段：产品验证

- 先保持静态前端，把 Demo 新闻替换成 20-50 条手工维护的真实新闻样本。
- 找 3-5 个目标用户试用，观察他们是否会修改关键词、复制博客、收藏摘要。
- 收集“不相关”“有用”“想持续跟踪”的反馈，确认核心价值。

### 第 2 阶段：接真实新闻源

- 接 RSS：适合官方博客、垂直媒体、公司公告，成本低且稳定。
- 接 NewsAPI 或 GDELT：适合关键词检索和更广覆盖。
- 对新闻做 URL 去重、标题相似度去重、同事件聚类。

### 第 3 阶段：接 LLM 生成

- 用模型生成结构化 JSON，而不是只返回一段自然语言。
- 输出字段建议包含：摘要、推荐理由、风险点、来源、置信度、博客标题、博客正文。
- 强制所有观点绑定来源 URL，避免模型编造引用。

### 第 4 阶段：用户系统和自动化

- 保存用户关键词、偏好语气、反馈记录和历史日报。
- 每天定时任务生成日报。
- 支持邮件、Notion、Markdown、个人博客草稿等发布方式。

### 第 5 阶段：生产化

- 增加来源可信度评分。
- 对关键数字、日期、人名和公司名做事实校验。
- 增加人工审核流，发布前必须确认。
- 增加长期主题追踪，比如公司、政策、技术方向或投资主题。

## 建议技术栈

MVP 后端可以这样演进：

- Frontend：Next.js 或当前静态页面继续增强
- Backend：FastAPI 或 Node.js
- Database：PostgreSQL
- Queue：Redis + BullMQ / Celery
- Vector Search：pgvector
- Scheduler：GitHub Actions、Cloud Scheduler 或 cron
- LLM：结构化输出生成摘要和博客草稿

## 后续接真实服务架构

建议把系统拆成 5 层：

1. 新闻采集层：NewsAPI、GDELT、RSS、官方博客、监管公告、公司公告。
2. 清洗聚类层：URL 去重、标题相似度、正文相似度、同事件聚类。
3. 相关性排序层：关键词匹配、向量相似度、来源权重、发布时间、用户反馈。
4. 生成层：单篇摘要、同事件合并、日报、博客草稿、社媒版本。
5. 发布层：Markdown、邮件、Notion、公众号草稿、个人博客。

## 推荐接口

### `GET /api/news`

按用户偏好拉取候选新闻。

```json
{
  "interest": "ai",
  "keywords": ["OpenAI", "具身智能"],
  "date": "2026-06-08"
}
```

### `POST /api/generate`

把清洗后的新闻和用户偏好交给 LLM，返回结构化日报。

```json
{
  "preferences": {
    "interest": "ai",
    "keywords": ["OpenAI", "具身智能"],
    "tone": "analytical"
  },
  "articles": []
}
```

### `POST /api/feedback`

记录用户对摘要的反馈，用于个性化排序。

```json
{
  "articleId": "ai-agents-enterprise",
  "feedback": "relevant"
}
```

## 生产化改进点

- 所有新闻必须保留来源 URL，禁止让模型编造引用。
- 对重要新闻做多来源合并，减少单一来源偏差。
- 对日期、数字、人物、公司名做事实校验。
- 保存用户反馈，用它调整排序权重。
- 支持“长期关注主题”，比如某家公司、某项政策、某个技术方向。
- 博客默认进入草稿状态，发布前需要人工确认。

## License

MIT
