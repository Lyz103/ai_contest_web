export const contestInfo = {
  name: '全球人工智能创新·治理·安全大赛',
  shortName: 'AI 创新·治理·安全大赛',
  host: '中国人民大学高瓴人工智能学院',
  totalPrize: 30,
  year: 2026,
  theme: '人工智能治理与伦理',
}

export const orgs = [
  { role: '主办单位', name: '中国人民大学高瓴人工智能学院', primary: true },
  { role: '协办单位', name: '百融云创', primary: false },
  { role: '协办单位', name: '高瓴创投', primary: false },
]

export const stats = [
  { value: '3', label: '大赛赛道' },
  { value: '全球', label: '开放报名范围' },
  { value: '3—5人', label: '建议队伍规模' },
  { value: '2026', label: '首届举办年份' },
]

export const tracks = [
  {
    id: 1,
    name: '智能体应用赛道',
    prize: 15,
    color: '#c0392b',
    colorVar: 'var(--track-1)',
    mode: '赛题制',
    platform: '玉兰-融观',
    description:
      '大语言模型与多模态模型的突破，使"智能体"成为近年来最受关注的技术范式。本赛道鼓励参赛团队围绕指定行业赛题，打造基于 AI 智能体的创新应用，聚焦场景创新与产品体验。',
    tags: ['AI Agent', '自主规划', '工具调用', '多模态'],
    criteria: ['技术创新性', '应用价值', '产品体验', '可扩展性'],
    finalists: 10,
  },
  {
    id: 2,
    name: '人工智能社会治理应用赛道',
    prize: 10,
    color: '#2563eb',
    colorVar: 'var(--track-2)',
    mode: '赛题制',
    platform: '玉兰-万象',
    description:
      '社会治理是 AI 赋能国家现代化的关键场景。本赛道聚焦 AI 在社会治理中的真实需求，鼓励团队针对公共事务痛点提出解决方案，特别欢迎跨公共管理、社会学、法学背景的复合型团队。',
    tags: ['社会治理', '公共服务', '政策分析', '智慧城市'],
    criteria: ['社会价值', '可行性', '数据合规', '创新性'],
    finalists: 8,
  },
  {
    id: 3,
    name: '人工智能伦理与安全应用赛道',
    prize: 5,
    color: '#059669',
    colorVar: 'var(--track-3)',
    mode: '方案赛',
    platform: null,
    description:
      '本赛道采用方案赛模式，不强求代码实现，更重视思想性、前瞻性与可操作性。参赛团队可围绕 AI 伦理规范、安全评测、内容治理、对齐技术、监管沙盒等方向提交创新方案。',
    tags: ['AI 伦理', '安全对齐', '可解释性', '监管框架'],
    criteria: ['思想性', '前瞻性', '可操作性', '学术价值'],
    finalists: 6,
  },
]

export const timeline = [
  {
    date: '2026年5月30日',
    title: '大赛发布仪式',
    desc: '正式对外发布赛事主题、三大赛道、时间节点、参赛对象、奖金设置及技术平台，开放官网报名通道。',
    status: 'active',
  },
  {
    date: '2026年6月—7月',
    title: '公开报名与组队',
    desc: '面向全球开放报名，参赛团队通过官方渠道注册、组队、选择赛道。组委会同步发布赛题详情与技术平台使用指南。',
    status: 'upcoming',
  },
  {
    date: '2026年7月—10月',
    title: '作品初评',
    desc: '所有报名作品由跨学科专家学者进行初评，按赛道分别评审，确定晋级名单并向晋级团队反馈专家意见。',
    status: 'upcoming',
  },
  {
    date: '2026年10月',
    title: '线下决赛（北京）',
    desc: '入围团队汇集北京进行作品答辩（陈述15分钟 + 答辩20分钟），同期开展学术交流、企业参访、投资对接活动。',
    status: 'upcoming',
  },
]

export const awardDetails = [
  {
    trackId: 1,
    trackName: '智能体应用赛道',
    color: '#c0392b',
    totalPrize: '15万元',
    awards: [
      { rank: '一等奖', count: 1, prize: '60,000元' },
      { rank: '二等奖', count: 2, prize: '40,000元/队' },
      { rank: '三等奖', count: 3, prize: '20,000元/队' },
      { rank: '优胜奖', count: '若干', prize: '证书+资源对接' },
    ],
  },
  {
    trackId: 2,
    trackName: '社会治理应用赛道',
    color: '#2563eb',
    totalPrize: '10万元',
    awards: [
      { rank: '一等奖', count: 1, prize: '40,000元' },
      { rank: '二等奖', count: 2, prize: '25,000元/队' },
      { rank: '三等奖', count: 3, prize: '10,000元/队' },
      { rank: '优胜奖', count: '若干', prize: '证书+资源对接' },
    ],
  },
  {
    trackId: 3,
    trackName: '伦理与安全应用赛道',
    color: '#059669',
    totalPrize: '5万元',
    awards: [
      { rank: '一等奖', count: 1, prize: '20,000元' },
      { rank: '二等奖', count: 2, prize: '12,000元/队' },
      { rank: '三等奖', count: 3, prize: '6,000元/队' },
      { rank: '优胜奖', count: '若干', prize: '证书+资源对接' },
    ],
  },
]

export const reviewSteps = [
  {
    icon: '📋',
    title: '资格审核',
    desc: '组委会对报名材料进行形式审查，确认参赛资格与赛道匹配度。',
  },
  {
    icon: '🔍',
    title: '专家初评',
    desc: '跨学科专家委员会对提交作品进行评审，按赛道遴选入围名单并反馈意见。',
  },
  {
    icon: '🏛️',
    title: '决赛答辩',
    desc: '入围队伍赴北京进行现场路演（15分钟陈述 + 20分钟答辩），专家委员会现场评审。',
  },
  {
    icon: '🏆',
    title: '综合评定',
    desc: '综合初评与决赛答辩成绩，最终确定各赛道获奖名单，颁奖典礼同期举行。',
  },
]

export const supports = [
  {
    icon: '💻',
    title: '技术平台支持',
    desc: '免费开放"玉兰-融观"、"玉兰-万象"等平台资源，降低工程门槛。',
  },
  {
    icon: '🎓',
    title: '学术指导支持',
    desc: '为入围决赛团队配备专家导师，提供方案打磨与学术指导。',
  },
  {
    icon: '🤝',
    title: '产业对接支持',
    desc: '为获奖团队提供投融资对接、产业落地等后续支持，优秀团队可获高瓴创投优先沟通机会。',
  },
]
