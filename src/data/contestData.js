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
    color: '#BA0C2F',
    modeKey: 'tracks.modeContest',
    platformKey: 'tracks.platform1',
    finalists: 10,
  },
  {
    id: 2,
    color: '#2563eb',
    modeKey: 'tracks.modeContest',
    platformKey: 'tracks.platform2',
    finalists: 8,
  },
  {
    id: 3,
    color: '#059669',
    modeKey: 'tracks.modeProposal',
    platformKey: null,
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
