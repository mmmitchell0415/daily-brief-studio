const demoNews = [
  {
    id: "ai-agents-enterprise",
    category: "ai",
    title: "企业级 AI Agent 从实验转向流程集成",
    source: "Tech Monitor",
    url: "https://example.com/ai-agents-enterprise",
    publishedAt: "2026-06-08",
    keywords: ["OpenAI", "AI Agent", "企业自动化", "工作流", "人工智能"],
    summary:
      "多家软件公司正在把 AI Agent 嵌入客服、销售和数据分析流程。相比单点聊天助手，新产品更强调权限、审计、工具调用和可回滚操作。企业采购方开始把可靠性、可观测性和成本控制作为上线门槛。",
    impact:
      "这说明 AI 产品竞争正在从模型能力转向流程落地能力，适合写成关于企业 AI 商业化的分析。",
    risk: "供应商案例通常会突出成功指标，实际部署中的失败率、人工复核成本和数据治理压力需要继续核实。"
  },
  {
    id: "robotics-funding",
    category: "ai",
    title: "具身智能创业公司继续吸引早期资本",
    source: "Venture Daily",
    url: "https://example.com/robotics-funding",
    publishedAt: "2026-06-08",
    keywords: ["具身智能", "机器人", "融资", "AI", "创业"],
    summary:
      "一批具身智能公司围绕仓储、制造和家庭服务场景获得新融资。投资人更关注数据采集闭环、硬件成本下降和可规模化交付。行业仍处在从演示视频走向真实场景验证的阶段。",
    impact:
      "它适合和 AI Agent 一起讨论：一个改造数字流程，一个进入物理流程，二者都在争夺自动化预算。",
    risk: "机器人商业化周期通常长于软件，短期收入和量产能力需要谨慎评估。"
  },
  {
    id: "cross-border-commerce",
    category: "business",
    title: "跨境电商卖家加速建设内容和供应链能力",
    source: "Commerce Brief",
    url: "https://example.com/cross-border-commerce",
    publishedAt: "2026-06-08",
    keywords: ["跨境电商", "供应链", "品牌", "TikTok Shop", "独立站"],
    summary:
      "平台流量成本上升后，跨境卖家正在把预算转向短视频内容、达人合作和柔性供应链。部分品牌减少单一平台依赖，尝试独立站和本地仓配。增长策略从铺货转向更精细的品类运营。",
    impact:
      "这条新闻可延展成关于低成本流量红利结束后，跨境电商如何重构增长模型的文章。",
    risk: "不同市场的平台政策差异大，单一地区经验不能直接外推。"
  },
  {
    id: "market-rates",
    category: "finance",
    title: "市场继续关注利率路径对成长股估值的影响",
    source: "Market Ledger",
    url: "https://example.com/market-rates",
    publishedAt: "2026-06-08",
    keywords: ["金融", "利率", "成长股", "估值", "美股"],
    summary:
      "投资者仍在根据通胀、就业和央行表态调整利率预期。成长型科技公司对折现率变化更敏感，估值波动可能继续放大。资金开始在高质量现金流和高增长叙事之间重新平衡。",
    impact:
      "如果用户关注科技或 AI 投资，这条可作为宏观背景，解释为什么基本面之外的估值变量很关键。",
    risk: "市场预期变化很快，涉及交易决策时必须引用实时数据而不是静态摘要。"
  },
  {
    id: "privacy-policy",
    category: "policy",
    title: "数据合规要求推动企业重新审视 AI 应用边界",
    source: "Policy Watch",
    url: "https://example.com/privacy-policy",
    publishedAt: "2026-06-08",
    keywords: ["政策", "数据合规", "隐私", "AI 治理", "企业"],
    summary:
      "监管机构和行业组织持续强调个人信息保护、模型使用透明度和自动化决策说明。企业在上线 AI 工具时需要评估数据来源、用户授权和输出责任。合规团队正在更早介入产品设计。",
    impact:
      "这能为 AI 新闻摘要增加现实约束：真正可落地的 AI 应用必须同时满足效率和治理要求。",
    risk: "具体法规因地区而异，产品实现时需要按目标市场分别检查。"
  },
  {
    id: "travel-local",
    category: "travel",
    title: "城市微旅行产品升温，短周期体验成为新卖点",
    source: "Lifestyle Desk",
    url: "https://example.com/travel-local",
    publishedAt: "2026-06-08",
    keywords: ["旅行", "城市", "周末", "生活方式", "本地体验"],
    summary:
      "用户更偏好两天以内、交通成本低、内容密度高的城市体验。运营方把路线设计、美食、展览和小众街区结合起来，提供半自助式产品。社交内容传播正在影响目的地选择。",
    impact:
      "适合生成生活方式博客，也可用于做个性化城市周报。",
    risk: "体验类产品高度依赖季节、天气和本地供给，内容更新频率要高。"
  },
  {
    id: "open-source-models",
    category: "ai",
    title: "开源模型生态围绕部署效率继续分化",
    source: "Developer Signal",
    url: "https://example.com/open-source-models",
    publishedAt: "2026-06-08",
    keywords: ["开源模型", "推理成本", "开发者", "AI", "部署"],
    summary:
      "开发者社区更关注模型在真实业务中的推理速度、显存占用和私有化部署成本。部分团队选择小模型加工具调用，而不是一味追求最大参数规模。模型选择正在变成工程和成本的综合决策。",
    impact:
      "这条适合写给技术读者，强调 AI 应用落地不是只比较榜单分数。",
    risk: "不同任务的模型表现差异很大，需要结合具体评测和业务数据。"
  },
  {
    id: "creator-economy",
    category: "business",
    title: "内容创作者开始用自动化工具管理选题和分发",
    source: "Creator Ops",
    url: "https://example.com/creator-economy",
    publishedAt: "2026-06-08",
    keywords: ["内容创作", "自动化", "博客", "社媒", "AI"],
    summary:
      "独立创作者和小团队正在用自动化工具完成选题监测、摘要、草稿和多平台改写。核心价值不在替代观点，而是降低日常信息筛选和重复分发成本。高质量创作者仍会保留人工编辑和事实核查环节。",
    impact:
      "这和本产品方向高度相关，可以作为产品定位和博客开篇案例。",
    risk: "自动化内容容易同质化，必须加入个人判断、来源标注和编辑流程。"
  }
];

const interestLabels = {
  ai: "人工智能与科技",
  business: "商业与创业",
  finance: "金融与市场",
  policy: "政策与社会",
  travel: "旅行与生活方式"
};

const toneLabels = {
  analytical: "专业分析",
  concise: "高密度简报",
  friendly: "轻松科普",
  opinionated: "观点鲜明"
};

const form = document.querySelector("#preference-form");
const countInput = document.querySelector("#count");
const countOutput = document.querySelector("#count-output");
const briefTitle = document.querySelector("#brief-title");
const matchScore = document.querySelector("#match-score");
const briefList = document.querySelector("#brief-list");
const insights = document.querySelector("#insights");
const blogTitle = document.querySelector("#blog-title");
const blogBody = document.querySelector("#blog-body");
const wordCount = document.querySelector("#word-count");
const socialCopy = document.querySelector("#social-copy");
const copyButton = document.querySelector("#copy-markdown");
const downloadButton = document.querySelector("#download-markdown");
const toast = document.querySelector("#toast");

let currentMarkdown = "";

countInput.addEventListener("input", () => {
  countOutput.value = `${countInput.value} 条`;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const preferences = readPreferences();
  const rankedNews = rankNews(preferences).slice(0, preferences.count);
  const brief = buildBrief(preferences, rankedNews);
  renderBrief(preferences, rankedNews);
  renderInsights(preferences, rankedNews);
  renderBlog(brief);
  renderSocial(brief, preferences);
  currentMarkdown = toMarkdown(brief, preferences);
  showToast("已生成今日摘要和博客草稿");
});

blogBody.addEventListener("input", updateWordCount);
blogTitle.addEventListener("input", () => {
  currentMarkdown = buildCurrentMarkdown();
});

copyButton.addEventListener("click", async () => {
  const markdown = buildCurrentMarkdown();
  if (!markdown.trim()) {
    showToast("请先生成内容");
    return;
  }
  try {
    await navigator.clipboard.writeText(markdown);
    showToast("Markdown 已复制");
  } catch {
    showToast("浏览器阻止复制，可手动选择文本");
  }
});

downloadButton.addEventListener("click", () => {
  const markdown = buildCurrentMarkdown();
  if (!markdown.trim()) {
    showToast("请先生成内容");
    return;
  }
  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `daily-brief-${new Date().toISOString().slice(0, 10)}.md`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("Markdown 已下载");
});

function readPreferences() {
  const rawKeywords = document.querySelector("#keywords").value;
  const keywords = rawKeywords
    .split(/[,，\n]/)
    .map((item) => item.trim())
    .filter(Boolean);

  return {
    interest: document.querySelector("#interest").value,
    keywords,
    tone: document.querySelector("#tone").value,
    count: Number(countInput.value),
    includeRisks: document.querySelector("#include-risks").checked,
    includeSocial: document.querySelector("#include-social").checked
  };
}

function rankNews(preferences) {
  const lowerKeywords = preferences.keywords.map((keyword) => keyword.toLowerCase());
  return demoNews
    .map((item) => {
      const categoryScore = item.category === preferences.interest ? 4 : 0;
      const keywordScore = item.keywords.reduce((score, keyword) => {
        const lower = keyword.toLowerCase();
        const directMatch = lowerKeywords.some((userKeyword) => {
          return lower.includes(userKeyword) || userKeyword.includes(lower);
        });
        return score + (directMatch ? 3 : 0);
      }, 0);
      const bodyScore = lowerKeywords.reduce((score, keyword) => {
        const haystack = `${item.title} ${item.summary} ${item.impact}`.toLowerCase();
        return score + (haystack.includes(keyword) ? 2 : 0);
      }, 0);
      const freshnessScore = item.publishedAt === "2026-06-08" ? 1 : 0;
      return { ...item, score: categoryScore + keywordScore + bodyScore + freshnessScore };
    })
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "zh-CN"));
}

function buildBrief(preferences, news) {
  const mainTopic = preferences.keywords[0] || interestLabels[preferences.interest];
  const title = `今日${interestLabels[preferences.interest]}简报：${mainTopic}`;
  const strongest = news[0];
  const second = news[1];
  const thesis = strongest
    ? `今天最值得写的是“${strongest.title}”。它不只是单条新闻，更能连接到${interestLabels[preferences.interest]}里的趋势变化。`
    : "今天没有足够匹配的新闻，需要扩大关键词或来源范围。";

  return {
    title,
    items: news,
    blogTitle: buildBlogTitle(preferences, strongest),
    thesis,
    angle: second
      ? `可把“${strongest.title}”和“${second.title}”放在一起看，形成一条更完整的行业线索。`
      : "当前样本较少，建议先写短评而不是长篇分析。",
    body: buildBlogBody(preferences, news, thesis)
  };
}

function buildBlogTitle(preferences, strongest) {
  const topic = preferences.keywords[0] || interestLabels[preferences.interest];
  if (!strongest) return `今天的${topic}观察`;
  const tonePrefix = {
    analytical: "从今天的新闻看",
    concise: "今日要点：",
    friendly: "普通人也该关注的",
    opinionated: "别只看热闹："
  };
  return `${tonePrefix[preferences.tone]}${topic}的新变化`;
}

function buildBlogBody(preferences, news, thesis) {
  if (!news.length) return "暂无足够内容生成博客草稿。";

  const introByTone = {
    analytical:
      "今天的新闻里，真正值得关注的不是单个事件本身，而是它背后正在形成的结构性变化。",
    concise:
      "今天的信息量不小，但可以压缩成一条主线：资金、产品和用户需求正在重新排序。",
    friendly:
      "如果只看标题，这些新闻可能有点分散；但把它们连起来，会看到一个很清楚的方向。",
    opinionated:
      "很多新闻看起来像热点，但真正有价值的是判断哪些变化会留下来。"
  };

  const paragraphs = [
    introByTone[preferences.tone],
    thesis,
    "第一，最直接的变化来自产品和业务现场。" + news[0].summary,
    news[1]
      ? "第二，相关事件正在说明同一个问题。" + news[1].summary
      : "第二，当前样本还不够多，因此更适合保持观察而不是下结论。",
    news[2]
      ? "第三，外部环境也在影响这条主线。" + news[2].summary
      : "第三，后续需要继续跟踪更多来源，尤其是官方公告、财报、监管文件和一线用户反馈。",
    "我的判断是：这类信息产品的价值不应该停留在“帮你看新闻”，而是要帮你建立连续的主题记忆。每天的摘要只是入口，真正有用的是把事件、来源、观点和后续验证串起来。",
    "因此，下一步值得关注三个问题：这件事是否有多来源印证；它对具体人群有什么影响；它会不会在一周或一个月后继续产生新进展。"
  ];

  return paragraphs.join("\n\n");
}

function renderBrief(preferences, news) {
  briefTitle.textContent = `今日${interestLabels[preferences.interest]}简报`;
  const averageScore = news.length
    ? Math.round(news.reduce((total, item) => total + item.score, 0) / news.length)
    : 0;
  matchScore.textContent = `${averageScore} 匹配分`;

  if (!news.length) {
    briefList.className = "brief-list empty-state";
    briefList.innerHTML = "<p>没有匹配结果，请增加关键词或扩大兴趣领域。</p>";
    return;
  }

  briefList.className = "brief-list";
  briefList.innerHTML = news
    .map((item) => {
      const risk = preferences.includeRisks ? `<div class="risk">${escapeHtml(item.risk)}</div>` : "";
      return `
        <article class="brief-item">
          <div class="brief-meta">
            <span class="tag">${escapeHtml(interestLabels[item.category] || item.category)}</span>
            <span class="tag">${escapeHtml(item.source)}</span>
            <span class="tag">${escapeHtml(item.publishedAt)}</span>
            <span class="tag">score ${item.score}</span>
          </div>
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.summary)}</p>
          <p><strong>推荐理由：</strong>${escapeHtml(item.impact)}</p>
          ${risk}
          <p><a href="${item.url}" target="_blank" rel="noreferrer">查看来源</a></p>
        </article>
      `;
    })
    .join("");
}

function renderInsights(preferences, news) {
  if (!news.length) {
    insights.innerHTML = '<p class="muted">暂无选题判断。</p>';
    return;
  }

  const primary = news[0];
  const keywords = preferences.keywords.length ? preferences.keywords.join(" / ") : interestLabels[preferences.interest];
  insights.innerHTML = `
    <div class="insight-card">
      <strong>主线</strong>
      <p>${escapeHtml(primary.impact)}</p>
    </div>
    <div class="insight-card">
      <strong>关键词</strong>
      <p>${escapeHtml(keywords)}</p>
    </div>
    <div class="insight-card">
      <strong>后续跟踪</strong>
      <p>继续观察官方公告、财报数据、监管更新和用户反馈，避免只根据单一报道形成结论。</p>
    </div>
  `;
}

function renderBlog(brief) {
  blogTitle.value = brief.blogTitle;
  blogBody.value = brief.body;
  updateWordCount();
}

function renderSocial(brief, preferences) {
  if (!preferences.includeSocial || !brief.items.length) {
    socialCopy.textContent = "未启用社媒短文。";
    return;
  }
  const top = brief.items[0];
  socialCopy.textContent = `今天最值得关注的是：${top.title}。它背后的重点不是新闻标题本身，而是${top.impact} 我会继续跟踪来源变化，并把它整理成更完整的分析。`;
}

function updateWordCount() {
  const count = blogBody.value.replace(/\s/g, "").length;
  wordCount.textContent = `${count} 字`;
  currentMarkdown = buildCurrentMarkdown();
}

function toMarkdown(brief, preferences) {
  const items = brief.items
    .map((item, index) => {
      const riskLine = preferences.includeRisks ? `\n风险/争议：${item.risk}` : "";
      return `### ${index + 1}. ${item.title}

- 来源：${item.source} ${item.url}
- 发布时间：${item.publishedAt}
- 摘要：${item.summary}
- 推荐理由：${item.impact}${riskLine}`;
    })
    .join("\n\n");

  return `# ${brief.title}

生成日期：2026-06-08
兴趣领域：${interestLabels[preferences.interest]}
写作风格：${toneLabels[preferences.tone]}

## 今日摘要

${items}

## 博客草稿

# ${brief.blogTitle}

${brief.body}
`;
}

function buildCurrentMarkdown() {
  const title = blogTitle.value.trim() || "未命名博客";
  const body = blogBody.value.trim();
  const summaryText = Array.from(document.querySelectorAll(".brief-item"))
    .map((item) => item.innerText.trim())
    .join("\n\n");

  if (!body && !summaryText) return "";
  return `# ${title}

${body}

## 新闻摘要

${summaryText}`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
