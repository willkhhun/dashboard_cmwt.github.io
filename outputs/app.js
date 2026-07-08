let hosts = ["支援主播", "秀俊", "嘉莉"];
const liveStatuses = ["未开始", "开播中", "已完成", "异常"];
const taskStatuses = ["未开始", "进行中", "待审核", "已完成", "已延期"];
const taskLevels = ["A", "B", "C"];
const taskSections = ["小红书", "抖音", "视频号", "直播支持", "投流", "数据复盘", "素材整理", "其他"];
const nodeStatuses = ["未开始", "进行中", "已完成", "有风险"];
const leadStatuses = ["新线索", "已加微信", "已邀约", "已到场", "已成交", "无效"];
const propertyOptions = ["190", "200", "285", "310"];
const weekDays = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
let hostColors = {
  "支援主播": "#c7774d",
  "秀俊": "#6f88ad",
  "嘉莉": "#b66f8a"
};
const hostPalette = ["#c7774d", "#b66f8a", "#6f88ad", "#6d9486", "#c79547", "#8a7b69", "#bd604e"];
const liveScheduleVersion = "2026-07-06-imported-live-schedule-v1";
const opsTaskVersion = "2026-07-06-operation-calendar-v2";
const spendChannels = [
  ["douyin", "抖音"],
  ["video", "视频号"],
  ["xiaohongshu", "小红书"],
  ["tencent", "腾讯广告"],
  ["other", "其他渠道"]
];
const baseReviewChannels = ["抖音", "视频号", "小红书", "腾讯广告", "其他"];
const monthlyMetricMeta = [
  ["performance", "本月业绩指标", "套"],
  ["leads", "本月线索量", "组"],
  ["visits", "本月到访量", "组"]
];
const personalMonthlyMetricMeta = [
  ["performance", "本月业绩指标", "套"],
  ["leads", "本月线索指标", "组"],
  ["visits", "本月到访指标", "组"],
  ["video", "本月视频发布指标", "条"],
  ["xiaohongshu", "本月小红书发布指标", "篇"]
];

function buildImportedSchedules() {
  const rows = [
    ["2026-07-06", "11:00-13:00", ["支援主播"]],
    ["2026-07-06", "15:00-17:00", ["支援主播"]],
    ["2026-07-06", "19:00-21:00", ["秀俊", "嘉莉"]],
    ["2026-07-07", "11:00-13:00", ["秀俊", "嘉莉"]],
    ["2026-07-07", "15:00-17:00", ["秀俊", "嘉莉"]],
    ["2026-07-08", "11:00-13:00", ["支援主播"]],
    ["2026-07-08", "15:00-17:00", ["支援主播"]],
    ["2026-07-08", "19:00-21:00", ["秀俊", "嘉莉"]],
    ["2026-07-09", "11:00-13:00", ["支援主播"]],
    ["2026-07-10", "11:00-13:00", ["支援主播"]],
    ["2026-07-10", "15:00-17:00", ["支援主播"]],
    ["2026-07-10", "19:00-21:00", ["秀俊", "嘉莉"]],
    ["2026-07-11", "11:00-13:00", ["秀俊", "嘉莉"]],
    ["2026-07-11", "15:00-17:00", ["秀俊", "嘉莉"]],
    ["2026-07-11", "19:00-21:00", ["支援主播"]],
    ["2026-07-12", "11:00-13:00", ["支援主播"]],
    ["2026-07-12", "15:00-17:00", ["支援主播"]],
    ["2026-07-12", "19:00-21:00", ["秀俊", "嘉莉"]]
  ];
  return rows.map(([date, time, hostList], index) => ({
    id: 1000 + index,
    host: hostList[0],
    hosts: hostList,
    date,
    time,
    platform: "视频号/抖音",
    topic: "直播计划",
    status: "未开始",
    leads: 0,
    valid: 0,
    recaps: []
  }));
}

function buildDemoOpsTasks() {
  const today = todayIso();
  const rows = [
    ["本周小红书重点选题策划", "A", "运营", "小红书", "进行中", addDays(today, 2), "本周必须落地的内容方向", true],
    ["310楼王价值内容输出", "A", "运营", "小红书", "未开始", addDays(today, 4), "围绕楼王稀缺性做长图文", true],
    ["北外滩三大利好内容排期", "A", "运营", "视频号", "进行中", addDays(today, 6), "三条利好拆成一周内容节奏", true],
    ["抖音直播预热视频剪辑", "B", "运营", "抖音", "未开始", addDays(today, 1), "用于晚间直播前预热", true],
    ["视频号直播封面更新", "B", "运营", "视频号", "待审核", addDays(today, 3), "更换为江景主视觉", true],
    ["投流数据周复盘", "B", "运营", "投流", "未开始", "", "待安排本周复盘时间", false],
    ["评论区日常维护", "C", "运营", "其他", "未开始", "", "每日评论区互动和私信检查", false],
    ["素材库整理", "C", "运营", "素材整理", "进行中", addDays(today, 5), "按户型、区位、卖点归档", true],
    ["每日数据截图归档", "C", "运营", "数据复盘", "未开始", "", "每日收盘前归档直播和投流数据", false]
  ];
  return rows.map(([title, level, owner, section, status, dueDate, note, arranged], index) => ({
    id: 4000 + index,
    title,
    level,
    owner,
    section,
    status,
    createdAt: `${today}T09:00`,
    due: dueDate ? `${dueDate}T18:00` : "",
    arranged,
    note,
    goal: `${title}，形成可检查、可交付的运营成果。`,
    requirements: "明确执行步骤、责任人和完成时间，关键节点需要及时反馈。",
    references: "项目卖点资料、直播复盘数据、平台内容参考。",
    standard: "按时提交，信息准确，能直接支撑直播获客或内容转化。",
    cautions: level === "A" ? "负责人每日跟盯，出现风险立即上报。" : "过程节点需按时更新。",
    remark: "",
    nodes: [],
    followups: []
  }));
}

const demoState = {
  liveScheduleVersion,
  opsTaskVersion,
  hosts: ["支援主播", "秀俊", "嘉莉"],
  schedules: buildImportedSchedules(),
  leads: [
    { id: 101, customer: "王先生", host: "张岚", need: "预算2500万，关注三房与江景", status: "已邀约", visitPlan: "2026-07-08T15:00", arrivalTime: "", nextStep: "7月7日晚确认同行家属", createdAt: "2026-07-05T09:20" },
    { id: 102, customer: "陈女士", host: "周嘉", need: "改善自住，想看样板间", status: "已加微信", visitPlan: "", arrivalTime: "", nextStep: "今天发送户型资料并争取周末到场", createdAt: "2026-07-05T11:10" },
    { id: 103, customer: "刘总", host: "林悦", need: "公司高管资产配置，关注付款节奏", status: "已到场", visitPlan: "2026-07-05T16:00", arrivalTime: "2026-07-05T16:08", nextStep: "现场销售二次沟通付款方案", createdAt: "2026-07-04T20:35" },
    { id: 104, customer: "赵先生", host: "沈一", need: "预算不明，先了解区位", status: "新线索", visitPlan: "", arrivalTime: "", nextStep: "主播今日内加微信初筛", createdAt: "2026-07-04T08:30" }
  ],
  tasks: buildDemoOpsTasks(),
  monthlyProgress: null,
  personalMonthlyProgress: null,
  reviewActions: [
    { id: 301, text: "把直播话术从单纯讲产品，调整为先问预算与到访时间，提高有效线索占比。", owner: "负责人" },
    { id: 302, text: "主播每日下播后30分钟内补齐线索状态和下一步。", owner: "主播组" }
  ],
  weeklyReviews: []
};

const storageKey = "chaoming-dashboard-state-v1";
const cloudConfig = window.CHAOMING_CLOUD_CONFIG || {};
let state = loadState();
let activeForm = "lead";
let dragPayload = null;
let opsWeekStart = getWeekStart(todayIso());
let reviewWeekStart = getWeekStart(todayIso());
let cloudClient = null;
let cloudReady = false;
let cloudSaving = false;
let cloudApplying = false;
let cloudSaveTimer = null;
let cloudLastUpdatedAt = "";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return normalizeState(structuredClone(demoState));
  try {
    return normalizeState(JSON.parse(saved));
  } catch {
    return normalizeState(structuredClone(demoState));
  }
}

function saveState() {
  state.hosts = hosts;
  state.liveScheduleVersion = liveScheduleVersion;
  state.opsTaskVersion = opsTaskVersion;
  localStorage.setItem(storageKey, JSON.stringify(state));
  if (cloudReady && !cloudApplying) scheduleCloudSave();
}

function setSyncStatus(text, mode = "") {
  const node = $("#syncStatus");
  if (!node) return;
  node.textContent = text;
  node.className = `sync-status ${mode}`.trim();
}

function isCloudConfigured() {
  return Boolean(cloudConfig.enabled && cloudConfig.supabaseUrl && cloudConfig.supabaseAnonKey && cloudConfig.workspaceId);
}

function getCloudPayload() {
  state.hosts = hosts;
  state.liveScheduleVersion = liveScheduleVersion;
  state.opsTaskVersion = opsTaskVersion;
  return structuredClone(state);
}

async function initCloudSync() {
  if (!isCloudConfigured()) {
    setSyncStatus("本机模式");
    return;
  }
  if (!window.supabase?.createClient) {
    setSyncStatus("云端库未加载", "error");
    return;
  }
  try {
    cloudClient = window.supabase.createClient(cloudConfig.supabaseUrl, cloudConfig.supabaseAnonKey);
    cloudReady = true;
    setSyncStatus("云端连接中...", "syncing");
    await pullCloudState(true);
    window.setInterval(() => pullCloudState(false), 15000);
  } catch (error) {
    console.error(error);
    cloudReady = false;
    setSyncStatus("云端连接失败", "error");
  }
}

async function pullCloudState(initial = false) {
  if (!cloudReady || cloudSaving) return;
  const { data, error } = await cloudClient
    .from("dashboard_state")
    .select("state, updated_at")
    .eq("workspace_id", cloudConfig.workspaceId)
    .maybeSingle();
  if (error) {
    console.error(error);
    setSyncStatus("云端读取失败", "error");
    return;
  }
  if (!data?.state) {
    if (initial) await saveStateToCloud(true);
    return;
  }
  if (!initial && data.updated_at === cloudLastUpdatedAt) return;
  cloudLastUpdatedAt = data.updated_at || "";
  cloudApplying = true;
  state = normalizeState(data.state);
  localStorage.setItem(storageKey, JSON.stringify(state));
  render();
  cloudApplying = false;
  setSyncStatus("云端已同步", "online");
}

function scheduleCloudSave() {
  window.clearTimeout(cloudSaveTimer);
  cloudSaveTimer = window.setTimeout(() => saveStateToCloud(false), 700);
}

async function saveStateToCloud(isInitial = false) {
  if (!cloudReady || cloudApplying) return;
  cloudSaving = true;
  setSyncStatus("云端保存中...", "syncing");
  const updatedAt = new Date().toISOString();
  const { error } = await cloudClient
    .from("dashboard_state")
    .upsert({
      workspace_id: cloudConfig.workspaceId,
      state: getCloudPayload(),
      updated_at: updatedAt,
      updated_by: localStorage.getItem("chaoming-dashboard-user") || "beta-user"
    });
  cloudSaving = false;
  if (error) {
    console.error(error);
    setSyncStatus("云端保存失败", "error");
    return;
  }
  cloudLastUpdatedAt = updatedAt;
  setSyncStatus(isInitial ? "云端已初始化" : "云端已保存", "online");
}

function normalizeState(raw) {
  const next = { ...structuredClone(demoState), ...raw };
  if (next.liveScheduleVersion !== liveScheduleVersion) {
    next.hosts = [...demoState.hosts];
    next.schedules = buildImportedSchedules();
    next.liveScheduleVersion = liveScheduleVersion;
  }
  if (next.opsTaskVersion !== opsTaskVersion) {
    next.tasks = buildDemoOpsTasks();
    next.opsTaskVersion = opsTaskVersion;
  }
  hosts = Array.isArray(next.hosts) && next.hosts.length ? next.hosts : [...demoState.hosts];
  next.hosts = hosts;
  next.schedules = (next.schedules || []).map((item) => ({
    recaps: [],
    ...item,
    hosts: Array.isArray(item.hosts) && item.hosts.length ? item.hosts : [item.host].filter(Boolean),
    status: normalizeLiveStatus(item.status),
    leads: Number(item.leads || item.recaps?.length || 0),
    valid: Number(item.valid || item.recaps?.filter((lead) => lead.wechat === "是").length || 0)
  })).map((item) => ({
    ...item,
    recaps: (item.recaps || []).map((recap, index) => normalizeRecap(recap, item, index))
  }));
  next.leads = (next.leads || []).map((lead) => normalizeLead(lead));
  next.tasks = (next.tasks || []).map((task) => normalizeTask(task));
  next.monthlyProgress = normalizeMonthlyProgress(next.monthlyProgress);
  next.personalMonthlyProgress = normalizePersonalMonthlyProgress(next.personalMonthlyProgress);
  next.weeklyReviews = (next.weeklyReviews || []).map((review) => normalizeWeeklyReview(review));
  hosts.forEach((host, index) => {
    if (!hostColors[host]) hostColors[host] = hostPalette[index % hostPalette.length];
  });
  return next;
}

function formatDateTime(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  const pad = (num) => String(num).padStart(2, "0");
  return `${date.getMonth() + 1}/${date.getDate()} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function getBadgeClass(status) {
  if (["延期/风险", "异常", "新线索", "已延期"].includes(status)) return "danger";
  if (["待确认", "待审核", "已邀约", "进行中", "开播中"].includes(status)) return "warn";
  if (["已完成", "已到场", "已成交"].includes(status)) return "done";
  return "";
}

function normalizeLiveStatus(status = "未开始") {
  if (status === "进行中") return "开播中";
  return liveStatuses.includes(status) ? status : "未开始";
}

function weekLabel(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  const day = date.getDay();
  return weekDays[day === 0 ? 6 : day - 1];
}

function toLocalDateString(date) {
  const pad = (num) => String(num).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function toLocalMinuteString(date) {
  const pad = (num) => String(num).padStart(2, "0");
  return `${toLocalDateString(date)}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function todayIso() {
  return toLocalDateString(new Date());
}

function addDays(dateString, amount) {
  const date = new Date(`${dateString}T00:00:00`);
  date.setDate(date.getDate() + amount);
  return toLocalDateString(date);
}

function getWeekStart(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  const day = date.getDay();
  date.setDate(date.getDate() + (day === 0 ? -6 : 1 - day));
  return toLocalDateString(date);
}

function getMonthKey(dateString = todayIso()) {
  return dateString.slice(0, 7);
}

function formatMonthLabel(monthKey = getMonthKey()) {
  const [year, month] = monthKey.split("-");
  return `${year}年${Number(month)}月`;
}

function normalizeMonthlyMetric(metric = {}, fallback = {}) {
  return {
    target: Number(metric.target ?? fallback.target ?? 0),
    current: Number(metric.current ?? fallback.current ?? 0),
    unit: metric.unit || fallback.unit || "组"
  };
}

function defaultMonthlyProgress(month = getMonthKey()) {
  return {
    month,
    performance: { target: 3, current: 0, unit: "套" },
    leads: { target: 100, current: 0, unit: "组" },
    visits: { target: 30, current: 0, unit: "组" }
  };
}

function normalizeMonthlyProgress(progress = {}) {
  const month = progress?.month === getMonthKey() ? progress.month : getMonthKey();
  const defaults = defaultMonthlyProgress(month);
  if (!progress || progress.month !== month) return defaults;
  return {
    month,
    performance: normalizeMonthlyMetric(progress.performance, defaults.performance),
    leads: normalizeMonthlyMetric(progress.leads, defaults.leads),
    visits: normalizeMonthlyMetric(progress.visits, defaults.visits)
  };
}

function defaultPersonalMonthlyMetric(key) {
  const defaults = {
    performance: { target: 1, current: 0, unit: "套" },
    leads: { target: 30, current: 0, unit: "组" },
    visits: { target: 10, current: 0, unit: "组" },
    video: { target: 8, current: 0, unit: "条" },
    xiaohongshu: { target: 8, current: 0, unit: "篇" }
  };
  return { ...defaults[key] };
}

function normalizePersonalMonthlyProgress(progress = {}) {
  const month = progress?.month === getMonthKey() ? progress.month : getMonthKey();
  const sourceHosts = progress?.month === month ? (progress.hosts || {}) : {};
  const hostProgress = {};
  hosts.forEach((host) => {
    const existing = sourceHosts[host] || {};
    hostProgress[host] = {};
    personalMonthlyMetricMeta.forEach(([key]) => {
      hostProgress[host][key] = normalizeMonthlyMetric(existing[key], defaultPersonalMonthlyMetric(key));
    });
  });
  return { month, hosts: hostProgress };
}

function getWeekEnd(dateString) {
  return addDays(getWeekStart(dateString), 6);
}

function formatShortDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return `${date.getMonth() + 1}.${date.getDate()}`;
}

function daysBetween(startDate, endDate) {
  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);
  return Math.round((end - start) / 86400000);
}

function dateParts(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return {
    day: date.getDate(),
    week: weekDays[date.getDay() === 0 ? 6 : date.getDay() - 1]
  };
}

function parseHostList(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  return String(value || "").split(/[、,&，\s]+/).map((item) => item.trim()).filter(Boolean);
}

function parsePropertyTypes(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  return propertyOptions.filter((option) => String(value || "").includes(option));
}

function normalizeLead(lead = {}) {
  const hostList = parseHostList(lead.hosts?.length ? lead.hosts : lead.host);
  const status = lead.status || (lead.wechat === "是" ? "已加微信" : "新线索");
  return {
    id: lead.id || Date.now(),
    sourceType: lead.sourceType || "manual",
    customer: lead.customer || "未命名客户",
    phone: lead.phone || "",
    followPerson: lead.followPerson || lead.follower || lead.host || hostList[0] || hosts[0] || "",
    wechat: lead.wechat || (["已加微信", "已邀约", "已到场", "已成交"].includes(status) ? "是" : "否"),
    platform: lead.platform || lead.sourcePlatform || "手动录入",
    propertyTypes: parsePropertyTypes(lead.propertyTypes?.length ? lead.propertyTypes : (lead.property || lead.need)),
    status,
    hosts: hostList.length ? hostList : [lead.host || lead.followPerson || hosts[0]].filter(Boolean),
    host: (hostList.length ? hostList : [lead.host || lead.followPerson || hosts[0]].filter(Boolean)).join("、"),
    arrivalTime: lead.arrivalTime || lead.visitPlan || "",
    note: lead.note || lead.nextStep || lead.need || "",
    createdAt: lead.createdAt || toLocalMinuteString(new Date())
  };
}

function normalizeRecap(recap = {}, schedule, index = 0) {
  const hostList = getScheduleHosts(schedule);
  const defaultFollowPerson = hostList.length === 1 ? hostList[0] : "";
  return {
    id: recap.id || `${schedule.id}-${index}`,
    customer: recap.customer || recap.name || "未命名客户",
    phone: recap.phone || "",
    followPerson: recap.followPerson || recap.follower || defaultFollowPerson,
    wechat: recap.wechat || "否",
    platform: recap.platform || schedule.platform || "",
    propertyTypes: parsePropertyTypes(recap.propertyTypes?.length ? recap.propertyTypes : recap.property),
    status: recap.status || (recap.wechat === "是" ? "已加微信" : "新线索"),
    arrivalTime: recap.arrivalTime || "",
    note: recap.note || recap.property || "",
    createdAt: recap.createdAt || `${schedule.date}T${String(schedule.time || "00:00").slice(0, 5)}`
  };
}

function getLeadKey(lead) {
  return lead.sourceType === "schedule" ? `schedule:${lead.sourceScheduleId}:${lead.recapId}` : `manual:${lead.id}`;
}

function getLeadDate(lead) {
  return String(lead.createdAt || "").slice(0, 10);
}

function isLeadEffective(lead) {
  return lead.wechat === "是" || ["已加微信", "已邀约", "已到场", "已成交"].includes(lead.status);
}

function isLeadOverdue(lead) {
  if (lead.sourceType !== "schedule" || isLeadEffective(lead) || lead.status === "无效") return false;
  const created = new Date(lead.createdAt);
  if (Number.isNaN(created.getTime())) return false;
  return (new Date() - created) / 36e5 > 24;
}

function getScheduleRecapLeads() {
  return state.schedules.flatMap((schedule) => (schedule.recaps || []).map((recap, index) => {
    const normalized = normalizeRecap(recap, schedule, index);
    return {
      ...normalized,
      id: `schedule-${schedule.id}-${normalized.id}`,
      sourceType: "schedule",
      sourceScheduleId: schedule.id,
      recapId: normalized.id,
      hosts: getScheduleHosts(schedule),
      host: getScheduleHostLabel(schedule),
      platform: normalized.platform || schedule.platform,
      sourceDate: schedule.date,
      sourceTime: schedule.time
    };
  }));
}

function getAllLeads() {
  return [...state.leads.map((lead) => normalizeLead(lead)), ...getScheduleRecapLeads()];
}

function formatReviewTitle(weekStart) {
  const weekEnd = addDays(weekStart, 6);
  const start = new Date(`${weekStart}T00:00:00`);
  const end = new Date(`${weekEnd}T00:00:00`);
  return `周复盘｜${start.getMonth() + 1}月${start.getDate()}日 - ${end.getMonth() + 1}月${end.getDate()}日`;
}

function metricPair(raw = 0, adjusted = null) {
  return { raw: Number(raw || 0), adjusted: adjusted === "" || adjusted === null || adjusted === undefined ? null : Number(adjusted || 0) };
}

function metricDisplay(metric) {
  if (typeof metric === "number") return metric;
  return metric?.adjusted ?? metric?.raw ?? 0;
}

function normalizePlatformName(name = "") {
  const text = String(name || "").trim();
  if (!text) return "其他";
  if (text.includes("抖音")) return "抖音";
  if (text.includes("视频号")) return "视频号";
  if (text.includes("小红书")) return "小红书";
  if (text.includes("腾讯")) return "腾讯广告";
  return text;
}

function splitPlatforms(value) {
  const list = String(value || "其他").split(/[\/、,，\s]+/).map(normalizePlatformName).filter(Boolean);
  return [...new Set(list.length ? list : ["其他"])];
}

function isDateInRange(dateString, start, end) {
  const date = String(dateString || "").slice(0, 10);
  return Boolean(date) && date >= start && date <= end;
}

function isLeadVisitInWeek(lead, weekStart, weekEnd) {
  if (lead.arrivalTime) return isDateInRange(lead.arrivalTime, weekStart, weekEnd);
  return ["已到场", "已成交"].includes(lead.status) && isDateInRange(getLeadDate(lead), weekStart, weekEnd);
}

function emptySpend() {
  return Object.fromEntries(spendChannels.map(([key, label]) => [key, { label, raw: 0, adjusted: 0 }]));
}

function getSpendKeyByChannel(channel) {
  return spendChannels.find(([, label]) => label === channel || (channel === "其他" && label === "其他渠道"))?.[0] || "";
}

function normalizeReviewMetric(value) {
  if (typeof value === "object" && value !== null) return metricPair(value.raw, value.adjusted);
  return metricPair(value || 0, null);
}

function normalizeWeeklyReview(review = {}) {
  const weekStart = review.week_start_date || getWeekStart(todayIso());
  const weekEnd = review.week_end_date || addDays(weekStart, 6);
  const spend = emptySpend();
  Object.entries(review.channel_spend || {}).forEach(([key, value]) => {
    if (spend[key]) spend[key] = { ...spend[key], ...value, raw: Number(value.raw || 0), adjusted: Number(value.adjusted || 0) };
  });
  return {
    id: review.id || `week-${weekStart}`,
    week_start_date: weekStart,
    week_end_date: weekEnd,
    title: review.title || formatReviewTitle(weekStart),
    live_sessions: normalizeReviewMetric(review.live_sessions),
    leads: normalizeReviewMetric(review.leads),
    valid_leads: normalizeReviewMetric(review.valid_leads),
    visits: normalizeReviewMetric(review.visits),
    channel_spend: spend,
    anchor_stats: Array.isArray(review.anchor_stats) ? review.anchor_stats : [],
    channel_stats: Array.isArray(review.channel_stats) ? review.channel_stats : [],
    broker_visit_rows: Array.isArray(review.broker_visit_rows) ? review.broker_visit_rows : [],
    broker_visit_rows_manual: Boolean(review.broker_visit_rows_manual),
    next_week_schedule_summary: review.next_week_schedule_summary || {},
    review_summary: {
      highlights: review.review_summary?.highlights || "",
      problems: review.review_summary?.problems || "",
      next_actions: review.review_summary?.next_actions || "",
      owner: review.review_summary?.owner || "负责人",
      deadline: review.review_summary?.deadline || "",
      generated: review.review_summary?.generated || ""
    },
    manual_adjustments: Array.isArray(review.manual_adjustments) ? review.manual_adjustments : [],
    created_at: review.created_at || toLocalMinuteString(new Date()),
    updated_at: review.updated_at || toLocalMinuteString(new Date())
  };
}

function buildWeeklyRawData(weekStart) {
  const weekEnd = addDays(weekStart, 6);
  const schedules = state.schedules.filter((schedule) => isDateInRange(schedule.date, weekStart, weekEnd));
  const leads = getAllLeads().filter((lead) => isDateInRange(getLeadDate(lead), weekStart, weekEnd));
  const validLeads = leads.filter(isLeadEffective);
  const visits = leads.filter((lead) => isLeadVisitInWeek(lead, weekStart, weekEnd));
  const anchorNames = [...new Set([...hosts, ...schedules.flatMap(getScheduleHosts), ...leads.flatMap((lead) => lead.hosts || [])].filter(Boolean))];
  const channelNames = [...new Set([...baseReviewChannels, ...schedules.flatMap((schedule) => splitPlatforms(schedule.platform)), ...leads.flatMap((lead) => splitPlatforms(lead.platform))])];
  const anchor_stats = anchorNames.map((anchor) => ({
    anchor,
    live_sessions: metricPair(schedules.filter((schedule) => getScheduleHosts(schedule).includes(anchor)).length),
    leads: metricPair(leads.filter((lead) => (lead.hosts || []).includes(anchor)).length),
    visits: metricPair(visits.filter((lead) => (lead.hosts || []).includes(anchor)).length),
    note: ""
  }));
  const channel_stats = channelNames.map((channel) => ({
    channel,
    live_sessions: metricPair(schedules.filter((schedule) => splitPlatforms(schedule.platform).includes(channel)).length),
    leads: metricPair(leads.filter((lead) => splitPlatforms(lead.platform).includes(channel)).length),
    visits: metricPair(visits.filter((lead) => splitPlatforms(lead.platform).includes(channel)).length),
    channel_spend: metricPair(0),
    note: ""
  }));
  return {
    live_sessions: metricPair(schedules.length),
    leads: metricPair(leads.length),
    valid_leads: metricPair(validLeads.length),
    visits: metricPair(visits.length),
    anchor_stats,
    channel_stats,
    next_week_schedule_summary: buildNextWeekScheduleSummary(weekStart)
  };
}

function mergeMetric(current = metricPair(0), rawValue = 0) {
  return metricPair(rawValue, current.adjusted);
}

function mergeStatRows(existingRows = [], rawRows = [], keyName) {
  return rawRows.map((raw) => {
    const existing = existingRows.find((row) => row[keyName] === raw[keyName]) || {};
    return {
      ...raw,
      live_sessions: mergeMetric(existing.live_sessions, raw.live_sessions.raw),
      leads: mergeMetric(existing.leads, raw.leads.raw),
      visits: mergeMetric(existing.visits, raw.visits.raw),
      channel_spend: raw.channel_spend ? mergeMetric(existing.channel_spend, raw.channel_spend.raw) : undefined,
      note: existing.note || raw.note || ""
    };
  });
}

function refreshWeeklyReviewRecord(record) {
  const raw = buildWeeklyRawData(record.week_start_date);
  const existingNextSummary = record.next_week_schedule_summary || {};
  record.title = formatReviewTitle(record.week_start_date);
  record.week_end_date = addDays(record.week_start_date, 6);
  record.live_sessions = mergeMetric(record.live_sessions, raw.live_sessions.raw);
  record.leads = mergeMetric(record.leads, raw.leads.raw);
  record.valid_leads = mergeMetric(record.valid_leads, raw.valid_leads.raw);
  record.visits = mergeMetric(record.visits, raw.visits.raw);
  record.anchor_stats = mergeStatRows(record.anchor_stats, raw.anchor_stats, "anchor");
  record.channel_stats = mergeStatRows(record.channel_stats, raw.channel_stats, "channel").map((row) => ({ ...row, channel_spend: row.channel_spend || metricPair(0) }));
  record.next_week_schedule_summary = {
    ...raw.next_week_schedule_summary,
    video_shoot_count: Number(existingNextSummary.video_shoot_count || 0),
    xiaohongshu_publish_count: Number(existingNextSummary.xiaohongshu_publish_count || 0)
  };
  record.updated_at = toLocalMinuteString(new Date());
  return record;
}

function getWeeklyReviewRecord(weekStart = reviewWeekStart) {
  const normalizedWeek = getWeekStart(weekStart);
  let record = state.weeklyReviews.find((item) => item.week_start_date === normalizedWeek);
  if (!record) {
    const raw = buildWeeklyRawData(normalizedWeek);
    record = normalizeWeeklyReview({
      id: `week-${normalizedWeek}`,
      week_start_date: normalizedWeek,
      week_end_date: addDays(normalizedWeek, 6),
      title: formatReviewTitle(normalizedWeek),
      ...raw,
      channel_spend: emptySpend()
    });
    state.weeklyReviews.push(record);
  }
  if (normalizedWeek >= getWeekStart(todayIso())) refreshWeeklyReviewRecord(record);
  return record;
}

function buildNextWeekScheduleSummary(weekStart) {
  const nextStart = addDays(weekStart, 7);
  const nextEnd = addDays(weekStart, 13);
  const schedules = state.schedules.filter((schedule) => isDateInRange(schedule.date, nextStart, nextEnd));
  const daily = Array.from({ length: 7 }, (_, index) => {
    const date = addDays(nextStart, index);
    const items = schedules.filter((schedule) => schedule.date === date);
    return {
      date,
      label: `${formatShortDate(date)} ${weekLabel(date)}`,
      count: items.length,
      items: items.map((schedule) => `${schedule.time} ${getScheduleHostLabel(schedule)} ${schedule.platform}`)
    };
  });
  const host_stats = [...new Set([...hosts, ...schedules.flatMap(getScheduleHosts)])].filter(Boolean).map((host) => ({
    host,
    count: schedules.filter((schedule) => getScheduleHosts(schedule).includes(host)).length
  }));
  const maxDaily = Math.max(0, ...daily.map((item) => item.count));
  return {
    week_start_date: nextStart,
    week_end_date: nextEnd,
    total_sessions: schedules.length,
    daily,
    host_stats,
    key_dates: daily.filter((item) => item.count && item.count === maxDaily).map((item) => item.label),
    notes: schedules.slice(0, 5).map((schedule) => `${schedule.date} ${schedule.time}｜${getScheduleHostLabel(schedule)}｜${schedule.platform}`)
  };
}

function mapTaskStatus(status) {
  const map = {
    "待安排": "未开始",
    "待确认": "待审核",
    "延期/风险": "已延期"
  };
  return taskStatuses.includes(status) ? status : (map[status] || "未开始");
}

function normalizeTask(task = {}) {
  const level = task.level || (task.priority === "高" ? "A" : task.priority === "中" ? "B" : "C");
  const due = task.due || "";
  const normalized = {
    id: task.id || Date.now(),
    title: task.title || "未命名运营任务",
    level: taskLevels.includes(level) ? level : "C",
    owner: task.owner || "运营",
    section: taskSections.includes(task.section) ? task.section : "其他",
    status: mapTaskStatus(task.status),
    createdAt: task.createdAt || toLocalMinuteString(new Date()),
    due,
    arranged: Boolean(task.arranged || due),
    note: task.note || task.deliverable || "",
    goal: task.goal || "",
    requirements: task.requirements || "",
    references: task.references || "",
    standard: task.standard || task.deliverable || "",
    cautions: task.cautions || "",
    remark: task.remark || "",
    output: task.output || [task.goal, task.requirements, task.references, task.standard || task.deliverable, task.cautions, task.remark]
      .filter(Boolean)
      .join("\n\n"),
    nodes: Array.isArray(task.nodes) ? task.nodes.map((node) => normalizeTaskNode(node, task)) : [],
    followups: Array.isArray(task.followups) ? task.followups : []
  };
  return normalized;
}

function normalizeTaskNode(node = {}, task = {}) {
  return {
    id: node.id || `${task.id || Date.now()}-${Math.random().toString(16).slice(2)}`,
    title: node.title || "过程节点",
    date: node.date || String(task.due || todayIso()).slice(0, 10),
    owner: node.owner || task.owner || "运营",
    status: nodeStatuses.includes(node.status) ? node.status : "未开始",
    note: node.note || ""
  };
}

function generateProcessNodes(task) {
  if (!task.due) return [];
  const dueDate = task.due.slice(0, 10);
  const templates = [
    [-5, "启动准备"],
    [-3, "中期检查"],
    [-2, "重点跟盯提醒"],
    [-1, "最终确认"],
    [0, "提交 / 完成"]
  ];
  return templates.map(([offset, title]) => normalizeTaskNode({
    id: `${task.id}-${offset}`,
    title,
    date: addDays(dueDate, offset),
    owner: task.owner,
    status: "未开始",
    note: offset === 0 ? "DDL 当天完成提交" : ""
  }, task));
}

function getTaskDueDate(task) {
  return task.due ? task.due.slice(0, 10) : "";
}

function getComputedTaskStatus(task) {
  if (task.status === "已完成") return "已完成";
  const dueDate = getTaskDueDate(task);
  if (dueDate && dueDate < todayIso()) return "已延期";
  return task.status;
}

function daysUntilTaskDue(task) {
  const dueDate = getTaskDueDate(task);
  if (!dueDate) return null;
  return daysBetween(todayIso(), dueDate);
}

function isTaskDueSoon(task) {
  const days = daysUntilTaskDue(task);
  return days !== null && days >= 0 && days <= 2 && getComputedTaskStatus(task) !== "已完成";
}

function isTaskOverdue(task) {
  return getComputedTaskStatus(task) === "已延期";
}

function isTaskRisk(task) {
  return task.level === "A" || isTaskDueSoon(task) || isTaskOverdue(task) || task.nodes.some((node) => node.status === "有风险");
}

function getUnfinishedNodes(task) {
  return task.nodes.filter((node) => node.status !== "已完成");
}

function setTaskDue(taskId, date) {
  const task = state.tasks.find((item) => item.id === Number(taskId));
  if (!task) return;
  task.due = `${date}T18:00`;
  task.arranged = true;
  if (task.status === "已延期") task.status = "进行中";
  if (!task.status || task.status === "未开始") task.status = "进行中";
  render();
}

function moveTaskSchedule(taskId, targetDate) {
  const task = state.tasks.find((item) => item.id === Number(taskId));
  if (!task || !targetDate) return;
  const anchor = getTaskDueDate(task) || task.nodes.map((node) => node.date).filter(Boolean).sort()[0] || targetDate;
  const delta = daysBetween(anchor, targetDate);
  if (task.due) task.due = `${addDays(getTaskDueDate(task), delta)}T${task.due.slice(11, 16) || "18:00"}`;
  else task.due = `${targetDate}T18:00`;
  task.nodes = task.nodes.map((node) => ({ ...node, date: addDays(node.date, delta) }));
  task.arranged = true;
  if (task.status === "未开始") task.status = "进行中";
  render();
}

function moveTaskDue(taskId, targetDate) {
  const task = state.tasks.find((item) => item.id === Number(taskId));
  if (!task || !targetDate) return;
  task.due = `${targetDate}T${task.due?.slice(11, 16) || "18:00"}`;
  task.arranged = true;
  render();
}

function moveTaskNode(taskId, nodeId, targetDate) {
  const task = state.tasks.find((item) => item.id === Number(taskId));
  const node = task?.nodes.find((item) => String(item.id) === String(nodeId));
  if (!node || !targetDate) return;
  node.date = targetDate;
  render();
}

function createTaskNodeFromDrop(taskId, targetDate) {
  const task = state.tasks.find((item) => item.id === Number(taskId));
  if (!task || !targetDate) return;
  const title = prompt("请输入进度节点名称", "进度节点");
  if (title === null) return;
  task.nodes.push(normalizeTaskNode({
    id: `${task.id}-node-${Date.now()}`,
    title: title.trim() || "进度节点",
    date: targetDate,
    owner: task.owner,
    status: "未开始"
  }, task));
  render();
}

function deleteTaskNode(taskId, nodeId) {
  const task = state.tasks.find((item) => item.id === Number(taskId));
  if (!task) return;
  task.nodes = task.nodes.filter((node) => String(node.id) !== String(nodeId));
  render();
}

function getOpsTimelineDates() {
  const taskDates = state.tasks.flatMap((task) => [
    getTaskDueDate(task),
    ...task.nodes.map((node) => node.date)
  ]).filter(Boolean).sort();
  const year = new Date(`${todayIso()}T00:00:00`).getFullYear();
  const start = `${year}-07-01`;
  const decemberEnd = `${year}-12-31`;
  const latest = taskDates.length ? taskDates[taskDates.length - 1] : decemberEnd;
  const end = latest > decemberEnd ? latest : decemberEnd;
  const totalDays = daysBetween(start, end) + 1;
  return Array.from({ length: totalDays }, (_, index) => addDays(start, index));
}

function groupOpsMonthSpans(dates) {
  const groups = [];
  dates.forEach((date) => {
    const label = `${Number(date.slice(5, 7))}月`;
    const last = groups[groups.length - 1];
    if (last && last.label === label) last.count += 1;
    else groups.push({ label, count: 1 });
  });
  return groups;
}

function isTaskInCurrentWeek(task) {
  const dueDate = getTaskDueDate(task);
  return dueDate >= opsWeekStart && dueDate <= addDays(opsWeekStart, 6);
}

function getFilteredOpsTasks(tasks) {
  const owner = $("#opsOwnerFilter")?.value || "全部";
  const level = $("#opsLevelFilter")?.value || "全部";
  const status = $("#opsStatusFilter")?.value || "全部";
  const section = $("#opsSectionFilter")?.value || "全部";
  const dueFilter = $("#opsDueFilter")?.value || "全部";
  return tasks.filter((task) => {
    const computedStatus = getComputedTaskStatus(task);
    return (owner === "全部" || task.owner === owner)
      && (level === "全部" || task.level === level)
      && (status === "全部" || computedStatus === status)
      && (section === "全部" || task.section === section)
      && (dueFilter === "全部" || (dueFilter === "临近" && isTaskDueSoon(task)) || (dueFilter === "延期" && isTaskOverdue(task)));
  });
}

function getTimelineDates() {
  const allDates = [
    ...state.schedules.map((item) => item.date)
  ].filter(Boolean).sort();
  const currentYear = new Date(`${todayIso()}T00:00:00`).getFullYear();
  const start = getWeekStart(allDates[0] || `${currentYear}-07-01`);
  const decemberEnd = `${currentYear}-12-31`;
  const latest = allDates.length ? allDates[allDates.length - 1] : decemberEnd;
  const end = getWeekEnd(latest > decemberEnd ? latest : decemberEnd);
  const totalDays = daysBetween(start, end) + 1;
  return Array.from({ length: totalDays }, (_, index) => addDays(start, index));
}

function groupWeekSpans(dates) {
  const groups = [];
  dates.forEach((date) => {
    const weekStart = getWeekStart(date);
    const last = groups[groups.length - 1];
    if (last && last.weekStart === weekStart) {
      last.count += 1;
    } else {
      const weekEnd = getWeekEnd(date);
      groups.push({
        weekStart,
        weekEnd,
        count: 1,
        label: `${formatShortDate(weekStart)}-${formatShortDate(weekEnd)}`
      });
    }
  });
  return groups.map((group) => {
    const count = state.schedules.filter((item) => item.date >= group.weekStart && item.date <= group.weekEnd).length;
    return { ...group, countText: `本周直播${count}场次` };
  });
}

function getScheduleById(id) {
  return state.schedules.find((item) => item.id === Number(id));
}

function getScheduleHosts(schedule) {
  return Array.isArray(schedule.hosts) && schedule.hosts.length ? schedule.hosts : [schedule.host].filter(Boolean);
}

function scheduleHasHost(schedule, host) {
  return getScheduleHosts(schedule).includes(host);
}

function getScheduleHostLabel(schedule) {
  return getScheduleHosts(schedule).join("、");
}

function setScheduleHosts(schedule, hostList) {
  const cleanHosts = [...new Set(hostList.filter(Boolean))];
  schedule.hosts = cleanHosts;
  schedule.host = cleanHosts[0] || "";
}

function addHostToSchedule(scheduleId, host) {
  const schedule = getScheduleById(scheduleId);
  if (!schedule || !host) return;
  setScheduleHosts(schedule, [...getScheduleHosts(schedule), host]);
  render();
}

function removeHostFromSchedule(scheduleId, host) {
  const schedule = getScheduleById(scheduleId);
  if (!schedule) return;
  const nextHosts = getScheduleHosts(schedule).filter((item) => item !== host);
  if (!nextHosts.length) {
    deleteSchedule(scheduleId);
    return;
  }
  setScheduleHosts(schedule, nextHosts);
  render();
}

function getScheduleTimeSlots() {
  return [
    { key: "morning", label: "上午", defaultTime: "11:00-13:00" },
    { key: "afternoon", label: "下午", defaultTime: "15:00-17:00" },
    { key: "evening", label: "晚上", defaultTime: "19:00-21:00" }
  ];
}

function getPeriodKey(time) {
  const hour = Number(String(time).match(/^\d{1,2}/)?.[0] || 0);
  if (hour >= 18) return "evening";
  if (hour >= 12) return "afternoon";
  return "morning";
}

function syncScheduleLeadCount(schedule) {
  const recaps = schedule.recaps || [];
  schedule.leads = recaps.length;
  schedule.valid = recaps.filter(isLeadEffective).length;
}

function updateHostName(oldName, newName) {
  const cleanName = newName.trim();
  if (!cleanName || cleanName === oldName) return;
  const index = hosts.indexOf(oldName);
  if (index === -1) return;
  hosts[index] = cleanName;
  hostColors[cleanName] = hostColors[oldName] || hostPalette[index % hostPalette.length];
  delete hostColors[oldName];
  state.schedules.forEach((item) => {
    if (item.host === oldName) item.host = cleanName;
    if (Array.isArray(item.hosts)) {
      item.hosts = item.hosts.map((host) => host === oldName ? cleanName : host);
    }
  });
  state.leads.forEach((lead) => {
    if (lead.host === oldName) lead.host = cleanName;
  });
  fillHostOptions();
  render();
}

function editHost(host) {
  const name = prompt("修改主播姓名", host);
  if (name?.trim()) updateHostName(host, name);
}

function removeHost(host) {
  if (hosts.length <= 1) return;
  if (!confirm(`确认删除主播“${host}”？双人直播会移除该主播；仅有该主播的场次会同步删除。`)) return;
  hosts = hosts.filter((item) => item !== host);
  state.hosts = hosts;
  delete hostColors[host];
  state.schedules = state.schedules.filter((schedule) => {
    setScheduleHosts(schedule, getScheduleHosts(schedule).filter((item) => item !== host));
    return getScheduleHosts(schedule).length;
  });
  state.leads.forEach((lead) => {
    if (lead.host === host) lead.host = hosts[0] || "";
  });
  fillHostOptions();
  render();
}

function shiftHostSchedule(host, targetDate) {
  const hostSchedules = state.schedules.filter((item) => scheduleHasHost(item, host)).sort((a, b) => a.date.localeCompare(b.date));
  if (!hostSchedules.length) return;
  const delta = daysBetween(hostSchedules[0].date, targetDate);
  hostSchedules.forEach((item) => {
    item.date = addDays(item.date, delta);
  });
  render();
}

function moveSchedule(scheduleId, date, time) {
  const schedule = getScheduleById(scheduleId);
  if (!schedule) return;
  schedule.date = date;
  schedule.time = time || schedule.time;
  render();
}

function createScheduleFromDrop(host, date, time) {
  if (!host || !date) return;
  state.schedules.push({
    id: Date.now(),
    host,
    hosts: [host],
    date,
    time: time || "11:00-13:00",
    platform: "视频号/抖音",
    topic: "直播计划",
    status: "未开始",
    leads: 0,
    valid: 0,
    recaps: []
  });
  render();
}

function deleteSchedule(scheduleId) {
  if (!confirm("确认删除这场直播排班？")) return;
  state.schedules = state.schedules.filter((item) => item.id !== Number(scheduleId));
  render();
}

function render() {
  renderMonthlyProgress();
  renderPersonalMonthlyProgress();
  renderMetrics();
  renderToday();
  renderRisks();
  renderSchedule();
  renderLeads();
  renderTasks();
  renderReview();
  saveState();
}

function getMonthlyProgressStatus(metric) {
  const target = Number(metric.target || 0);
  const current = Number(metric.current || 0);
  const rate = target > 0 ? Math.round((current / target) * 100) : 0;
  const status = rate >= 100 ? "done" : rate >= 60 ? "active" : "warn";
  return {
    rate,
    status,
    remaining: Math.max(target - current, 0),
    width: Math.min(rate, 100)
  };
}

function renderMonthlyProgress() {
  state.monthlyProgress = normalizeMonthlyProgress(state.monthlyProgress);
  $("#monthlyProgressMonth").textContent = formatMonthLabel(state.monthlyProgress.month);
  $("#monthlyProgressGrid").innerHTML = monthlyMetricMeta.map(([key, label, unit]) => {
    const metric = state.monthlyProgress[key];
    const progress = getMonthlyProgressStatus(metric);
    return `
      <article class="monthly-progress-card ${progress.status}" data-monthly-card="${key}">
        <div class="monthly-progress-card-head">
          <span>${label}</span>
          <strong data-monthly-rate>${progress.rate}%</strong>
        </div>
        <div class="monthly-progress-fields">
          <label>目标<input type="number" min="0" step="1" value="${metric.target}" data-monthly-metric="${key}" data-monthly-field="target" /><em>${unit}</em></label>
          <label>已完成<input type="number" min="0" step="1" value="${metric.current}" data-monthly-metric="${key}" data-monthly-field="current" /><em>${unit}</em></label>
        </div>
        <div class="monthly-progress-bar"><i data-monthly-fill style="width: ${progress.width}%"></i></div>
        <p data-monthly-remaining>距离目标还差：${progress.remaining}${unit}</p>
      </article>
    `;
  }).join("");
}

function refreshMonthlyProgressCard(key) {
  const card = $(`[data-monthly-card="${key}"]`);
  const meta = monthlyMetricMeta.find(([itemKey]) => itemKey === key);
  if (!card || !meta) return;
  const [, , unit] = meta;
  const progress = getMonthlyProgressStatus(state.monthlyProgress[key]);
  card.classList.remove("warn", "active", "done");
  card.classList.add(progress.status);
  card.querySelector("[data-monthly-rate]").textContent = `${progress.rate}%`;
  card.querySelector("[data-monthly-fill]").style.width = `${progress.width}%`;
  card.querySelector("[data-monthly-remaining]").textContent = `距离目标还差：${progress.remaining}${unit}`;
}

function updateMonthlyProgressFromInput(input) {
  const key = input.dataset.monthlyMetric;
  const field = input.dataset.monthlyField;
  if (!state.monthlyProgress[key]) return;
  state.monthlyProgress[key][field] = Number(input.value || 0);
  refreshMonthlyProgressCard(key);
  saveState();
}

function renderPersonalMonthlyProgress() {
  state.personalMonthlyProgress = normalizePersonalMonthlyProgress(state.personalMonthlyProgress);
  $("#personalMonthlyProgressGrid").innerHTML = hosts.map((host) => {
    const metrics = state.personalMonthlyProgress.hosts[host] || {};
    return `
      <article class="personal-progress-card" style="--host-color:${hostColors[host] || "#b86e43"}">
        <div class="personal-card-head">
          <strong>${host}</strong>
          <span>${formatMonthLabel(state.personalMonthlyProgress.month)}</span>
        </div>
        <div class="personal-target-list">
          ${personalMonthlyMetricMeta.map(([key, label, unit]) => {
            const metric = metrics[key] || defaultPersonalMonthlyMetric(key);
            const progress = getMonthlyProgressStatus(metric);
            return `
              <div class="personal-target-row ${progress.status}" data-personal-card="${host}" data-personal-key="${key}">
                <div class="personal-target-title">
                  <span>${label}</span>
                  <em data-personal-rate>${progress.rate}%</em>
                </div>
                <div class="personal-target-inputs">
                  <label>目标<input type="number" min="0" step="1" value="${metric.target}" data-personal-host="${host}" data-personal-metric="${key}" data-personal-field="target" /><i>${unit}</i></label>
                  <label>完成<input type="number" min="0" step="1" value="${metric.current}" data-personal-host="${host}" data-personal-metric="${key}" data-personal-field="current" /><i>${unit}</i></label>
                </div>
                <div class="personal-progress-bar"><i data-personal-fill style="width:${progress.width}%"></i></div>
              </div>
            `;
          }).join("")}
        </div>
      </article>
    `;
  }).join("");
}

function refreshPersonalProgressRow(host, key) {
  const row = document.querySelector(`[data-personal-card="${host}"][data-personal-key="${key}"]`);
  if (!row) return;
  const metric = state.personalMonthlyProgress.hosts[host]?.[key];
  const progress = getMonthlyProgressStatus(metric);
  row.classList.remove("warn", "active", "done");
  row.classList.add(progress.status);
  row.querySelector("[data-personal-rate]").textContent = `${progress.rate}%`;
  row.querySelector("[data-personal-fill]").style.width = `${progress.width}%`;
}

function updatePersonalMonthlyProgressFromInput(input) {
  const host = input.dataset.personalHost;
  const key = input.dataset.personalMetric;
  const field = input.dataset.personalField;
  state.personalMonthlyProgress = normalizePersonalMonthlyProgress(state.personalMonthlyProgress);
  if (!state.personalMonthlyProgress.hosts[host]) return;
  state.personalMonthlyProgress.hosts[host][key][field] = Number(input.value || 0);
  refreshPersonalProgressRow(host, key);
  saveState();
}

function renderMetrics() {
  const allLeads = getAllLeads();
  const totalLeads = allLeads.length;
  const validLeads = allLeads.filter(isLeadEffective).length;
  const validRate = totalLeads ? Math.round((validLeads / totalLeads) * 100) : 0;
  const metrics = [
    ["本周直播场次", state.schedules.length, "按排班自动统计"],
    ["直播线索有效率", `${validRate}%`, `${validLeads}/${totalLeads} 条有效`]
  ];
  $("#metricRow").innerHTML = metrics.map(([label, value, note]) => `
    <article class="metric">
      <span>${label}</span>
      <strong>${value}</strong>
      <em>${note}</em>
    </article>
  `).join("");
}

function renderToday() {
  const today = todayIso();
  $("#todayDate").textContent = today;
  const rows = state.schedules.filter((item) => item.date === today);
  $("#todayLiveRows").innerHTML = rows.length ? rows.map((item) => `
    <tr>
      <td>${getScheduleHostLabel(item)}</td>
      <td>${item.time}<br><span class="badge">${item.platform}</span></td>
      <td>${item.topic}</td>
      <td>
        <select class="today-live-status ${getBadgeClass(item.status)}" data-today-live-status="${item.id}">
          ${liveStatuses.map((status) => `<option value="${status}" ${normalizeLiveStatus(item.status) === status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </td>
      <td>${item.valid}/${item.leads}</td>
    </tr>
  `).join("") : `<tr><td colspan="5">今天暂无直播排班，可以在“直播排班”里添加。</td></tr>`;
}

function renderRisks() {
  const risks = [];
  getAllLeads().forEach((lead) => {
    if (isLeadOverdue(lead)) {
      risks.push(["线索超时未跟进", `${lead.customer} 来自 ${lead.host}，已超过24小时未完成微信建联。`]);
    }
    if (lead.status === "已邀约" && !lead.arrivalTime) {
      risks.push(["邀约待到场确认", `${lead.customer} 已邀约，需要回填到访时间。`]);
    }
  });
  state.tasks.filter((task) => isTaskDueSoon(task) || isTaskOverdue(task) || task.nodes.some((node) => node.status === "有风险")).forEach((task) => {
    risks.push(["运营任务风险", `${task.title}，负责人：${task.owner}，DDL：${formatDateTime(task.due)}。`]);
  });
  $("#riskList").innerHTML = risks.length ? risks.map(([title, text]) => `
    <div class="risk-item">
      <strong>${title}</strong>
      <span>${text}</span>
    </div>
  `).join("") : `<div class="risk-item"><strong>当前无突出风险</strong><span>直播线索跟进和运营日常工作都在正常范围内。</span></div>`;
}

function renderSchedule() {
  const dates = getTimelineDates();
  const today = todayIso();
  const weekGroups = groupWeekSpans(dates);
  const timeSlots = getScheduleTimeSlots();
  $("#scheduleHosts").innerHTML = `
    ${hosts.map((host) => `
    <div class="host-pill" draggable="true" data-drag-host="${host}" style="--host-color:${hostColors[host]}">
      <span>${host}</span>
      <button class="host-pill-action" type="button" data-edit-host-action="${host}" title="编辑主播" aria-label="编辑主播">✎</button>
      <button class="host-pill-action" type="button" data-remove-host="${host}" title="删除主播">×</button>
    </div>
    `).join("")}
    <button class="host-add-inline" type="button" data-add-host-inline>+ 添加主播</button>
  `;
  $("#scheduleLegend").innerHTML = [
    ["直播", "chip-live"],
    ["双人可拆", "chip-arrive"]
  ].map(([label, cls]) => `<span class="legend-item"><i class="${cls}"></i>${label}</span>`).join("");

  const weekHeader = [
    `<div class="timeline-corner">周次统计</div>`,
    ...weekGroups.map((group) => `
      <div class="timeline-week" style="grid-column: span ${group.count}">
        <strong>${group.label}</strong>
        <span>${group.countText}</span>
      </div>
    `)
  ].join("");
  const dateHeader = [
    `<div class="timeline-corner timeline-subcorner">时间段 / 日期</div>`,
    ...dates.map((date) => {
      const parts = dateParts(date);
      const month = Number(date.slice(5, 7));
      return `
        <div class="timeline-date ${date === today ? "today" : ""}" data-date="${date}">
          <strong>${month}/${parts.day}</strong>
          <span>${parts.week}</span>
        </div>
      `;
    })
  ].join("");

  const rows = timeSlots.map((slot) => {
    const timeCell = `
      <div class="timeline-time">
        <strong>${slot.label}</strong>
      </div>
    `;
    const cells = dates.map((date) => {
      const chips = [];
      state.schedules.filter((item) => item.date === date && getPeriodKey(item.time) === slot.key).forEach((item) => {
        const riskClass = item.status === "异常" ? " chip-risk" : "";
        const recapCount = (item.recaps || []).length;
        const cohostTags = getScheduleHosts(item).map((host) => `
          <span class="cohost-tag" style="--host-color:${hostColors[host] || "#b86e43"}">
            ${host}
            <button type="button" data-remove-schedule-host="${item.id}" data-host="${host}" title="移除此主播">×</button>
          </span>
        `).join("");
        chips.push(`
          <div class="timeline-chip chip-live${riskClass}" draggable="true" data-schedule-id="${item.id}" title="拖主播到这里可加入共同直播：${item.topic}">
            <div class="chip-topline">
              <strong contenteditable="true" data-edit-schedule="${item.id}" data-field="platform">${item.platform}</strong>
              <button class="chip-delete" type="button" data-delete-schedule="${item.id}" title="删除场次" aria-label="删除场次">−</button>
            </div>
            <span contenteditable="true" data-edit-schedule="${item.id}" data-field="time">${item.time}</span>
            <div class="cohost-tags">${cohostTags}</div>
            <button class="lead-entry" type="button" data-phone-recap="${item.id}" title="填写线索">
              <span class="phone-symbol" aria-hidden="true">☎</span>
              <span>${recapCount ? `${recapCount}条` : "线索"}</span>
            </button>
          </div>
        `);
      });
      return `<div class="timeline-cell ${date === today ? "today" : ""}" data-date="${date}" data-time="${slot.defaultTime}">${chips.join("") || `<span class="chip-empty">+</span>`}</div>`;
    }).join("");
    return timeCell + cells;
  }).join("");

  $("#scheduleBoard").style.setProperty("--date-count", dates.length);
  $("#scheduleBoard").innerHTML = weekHeader + dateHeader + rows;
}

function renderLeads() {
  renderLeadFilters();
  renderLeadMetrics();
  renderLeadAlerts();
  const keyword = $("#leadSearch")?.value?.trim() || "";
  const filter = $("#leadFilter")?.value || "全部";
  const dateFilter = $("#leadDateFilter")?.value || "";
  const hostFilter = $("#leadHostFilter")?.value || "全部";
  const platformFilter = $("#leadPlatformFilter")?.value || "全部";
  const propertyFilter = $("#leadPropertyFilter")?.value || "全部";
  const rows = getAllLeads().filter((lead) => {
    const hit = [lead.customer, lead.phone, lead.followPerson, lead.host, lead.platform, lead.note].join("").includes(keyword);
    const statusHit = filter === "全部" || lead.status === filter;
    const dateHit = !dateFilter || getLeadDate(lead) === dateFilter;
    const hostHit = hostFilter === "全部" || lead.hosts.includes(hostFilter);
    const platformHit = platformFilter === "全部" || lead.platform === platformFilter;
    const propertyHit = propertyFilter === "全部" || lead.propertyTypes.includes(propertyFilter);
    return hit && statusHit && dateHit && hostHit && platformHit && propertyHit;
  });
  $("#leadRows").innerHTML = rows.length ? rows.map((lead) => `
    <tr class="${isLeadOverdue(lead) ? "lead-overdue" : ""}" data-open-lead="${getLeadKey(lead)}">
      <td><strong>${lead.customer}</strong><br><span>${getLeadDate(lead)}</span></td>
      <td>${lead.phone || "-"}</td>
      <td>${lead.followPerson || "-"}</td>
      <td><span class="badge ${lead.wechat === "是" ? "done" : ""}">${lead.wechat}</span></td>
      <td>${lead.platform || "-"}${lead.sourceDate ? `<br><span>${lead.sourceDate} ${lead.sourceTime || ""}</span>` : ""}</td>
      <td>${lead.propertyTypes.length ? lead.propertyTypes.map((item) => `<span class="property-pill">${item}</span>`).join("") : "-"}</td>
      <td><span class="badge ${getBadgeClass(lead.status)}">${lead.status}</span></td>
      <td>${lead.host}</td>
      <td>${formatDateTime(lead.arrivalTime)}</td>
      <td>${lead.note || "-"}${isLeadOverdue(lead) ? `<br><span class="overdue-text">超24小时未跟进</span>` : ""}</td>
    </tr>
  `).join("") : `<tr><td colspan="10">没有符合条件的线索。</td></tr>`;
}

function renderLeadFilters() {
  const hostValue = $("#leadHostFilter")?.value || "全部";
  const platformValue = $("#leadPlatformFilter")?.value || "全部";
  const propertyValue = $("#leadPropertyFilter")?.value || "全部";
  const platforms = [...new Set(getAllLeads().map((lead) => lead.platform).filter(Boolean))];
  if ($("#leadHostFilter")) {
    $("#leadHostFilter").innerHTML = [`<option value="全部">全部主播</option>`, ...hosts.map((host) => `<option value="${host}">${host}</option>`)].join("");
    $("#leadHostFilter").value = hosts.includes(hostValue) ? hostValue : "全部";
  }
  if ($("#leadPlatformFilter")) {
    $("#leadPlatformFilter").innerHTML = [`<option value="全部">全部平台</option>`, ...platforms.map((platform) => `<option value="${platform}">${platform}</option>`)].join("");
    $("#leadPlatformFilter").value = platforms.includes(platformValue) ? platformValue : "全部";
  }
  if ($("#leadPropertyFilter")) {
    $("#leadPropertyFilter").innerHTML = [`<option value="全部">全部户型</option>`, ...propertyOptions.map((option) => `<option value="${option}">${option}</option>`)].join("");
    $("#leadPropertyFilter").value = propertyOptions.includes(propertyValue) ? propertyValue : "全部";
  }
}

function renderLeadMetrics() {
  const leads = getAllLeads();
  const today = todayIso();
  const weekStart = getWeekStart(today);
  const monthStart = `${today.slice(0, 7)}-01`;
  const todayLeads = leads.filter((lead) => getLeadDate(lead) === today);
  const weekLeads = leads.filter((lead) => getLeadDate(lead) >= weekStart && getLeadDate(lead) <= today);
  const monthLeads = leads.filter((lead) => getLeadDate(lead) >= monthStart && getLeadDate(lead) <= today);
  const rate = (items) => items.length ? `${Math.round((items.filter(isLeadEffective).length / items.length) * 100)}%` : "0%";
  const cards = [
    ["今日线索数", todayLeads.length, "当天新增线索"],
    ["今日有效线索数", todayLeads.filter(isLeadEffective).length, "加微信/邀约/到访/成交"],
    ["本周线索数", weekLeads.length, `${formatShortDate(weekStart)} 至今`],
    ["本周有效率", rate(weekLeads), `${weekLeads.filter(isLeadEffective).length}/${weekLeads.length}`],
    ["本月线索量", monthLeads.length, `${Number(today.slice(5, 7))}月累计`],
    ["本月有效率", rate(monthLeads), `${monthLeads.filter(isLeadEffective).length}/${monthLeads.length}`]
  ];
  $("#leadMetricRow").innerHTML = cards.map(([label, value, note]) => `
    <article class="lead-metric-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <em>${note}</em>
    </article>
  `).join("");
}

function renderLeadAlerts() {
  const overdue = getAllLeads().filter(isLeadOverdue);
  $("#leadAlerts").innerHTML = overdue.length ? `
    <div class="lead-alert danger">
      <strong>${overdue.length} 条线索超过24小时未跟进</strong>
      <span>${overdue.slice(0, 3).map((lead) => `${lead.customer}（${lead.host}）`).join("、")}</span>
    </div>
  ` : `
    <div class="lead-alert">
      <strong>暂无超时线索</strong>
      <span>直播录入线索均在跟进窗口内。</span>
    </div>
  `;
}

function renderTasks() {
  renderOpsFilters();
  renderOpsFocus();
  renderOpsTaskPool();
  renderOpsCalendar();
  syncOpsWorkspaceScroll();
}

function syncOpsWorkspaceScroll() {
  const workspace = $(".ops-workspace");
  if (!workspace) return;
  workspace.style.setProperty("--ops-scroll-left", `${workspace.scrollLeft}px`);
}

function renderOpsFilters() {
  const ownerValue = $("#opsOwnerFilter")?.value || "全部";
  const levelValue = $("#opsLevelFilter")?.value || "全部";
  const statusValue = $("#opsStatusFilter")?.value || "全部";
  const sectionValue = $("#opsSectionFilter")?.value || "全部";
  const owners = [...new Set(state.tasks.map((task) => task.owner).filter(Boolean))];
  if ($("#opsOwnerFilter")) {
    $("#opsOwnerFilter").innerHTML = [`<option value="全部">全部负责人</option>`, ...owners.map((owner) => `<option value="${owner}">${owner}</option>`)].join("");
    $("#opsOwnerFilter").value = owners.includes(ownerValue) ? ownerValue : "全部";
  }
  if ($("#opsLevelFilter")) {
    $("#opsLevelFilter").innerHTML = [`<option value="全部">全部等级</option>`, ...taskLevels.map((level) => `<option value="${level}">${level}类</option>`)].join("");
    $("#opsLevelFilter").value = taskLevels.includes(levelValue) ? levelValue : "全部";
  }
  if ($("#opsStatusFilter")) {
    $("#opsStatusFilter").innerHTML = [`<option value="全部">全部状态</option>`, ...taskStatuses.map((status) => `<option value="${status}">${status}</option>`)].join("");
    $("#opsStatusFilter").value = taskStatuses.includes(statusValue) ? statusValue : "全部";
  }
  if ($("#opsSectionFilter")) {
    $("#opsSectionFilter").innerHTML = [`<option value="全部">全部板块</option>`, ...taskSections.map((section) => `<option value="${section}">${section}</option>`)].join("");
    $("#opsSectionFilter").value = taskSections.includes(sectionValue) ? sectionValue : "全部";
  }
}

function renderOpsTaskCard(task, variant = "pool") {
  const computedStatus = getComputedTaskStatus(task);
  const dueSoon = isTaskDueSoon(task);
  const overdue = isTaskOverdue(task);
  const dueText = task.due ? formatDateTime(task.due) : "未安排";
  return `
    <article class="ops-task-card level-${task.level.toLowerCase()} ${dueSoon ? "due-soon" : ""} ${overdue ? "overdue" : ""} ${computedStatus === "已完成" ? "done" : ""}"
      draggable="true" data-op-task-id="${task.id}" data-task-card="${variant}" title="双击打开详情">
      <div class="ops-card-main">
        <span class="ops-level">${task.level}</span>
        <strong>${task.title}</strong>
      </div>
      <div class="ops-card-meta">
        <span>${task.section} · ${task.owner}</span>
        <span>DDL ${dueText}</span>
      </div>
      <div class="ops-card-actions">
        <span class="badge ${getBadgeClass(computedStatus)}">${computedStatus}</span>
        <button class="ops-complete-btn" type="button" data-complete-op-task="${task.id}">完成</button>
      </div>
      ${dueSoon ? `<em class="ops-risk">需重点跟盯</em>` : ""}
      ${overdue ? `<em class="ops-risk">已延期</em>` : ""}
    </article>
  `;
}

function renderOpsFocus() {
  const focusTasks = state.tasks.filter((task) => task.level === "A" || isTaskInCurrentWeek(task) || isTaskDueSoon(task) || isTaskOverdue(task));
  const weekEnd = addDays(opsWeekStart, 6);
  if ($("#opsFocusRange")) {
    $("#opsFocusRange").textContent = `${formatShortDate(opsWeekStart)}-${formatShortDate(weekEnd)} 记录`;
  }
  $("#opsFocus").innerHTML = taskLevels.map((level) => {
    const tasks = focusTasks.filter((task) => task.level === level).slice(0, 4);
    return `
      <div class="ops-focus-row level-${level.toLowerCase()}">
        <div class="ops-focus-level">${level}</div>
        <div class="ops-focus-cards">
          ${tasks.length ? tasks.map((task) => `
            <button class="ops-focus-mini ${getComputedTaskStatus(task) === "已完成" ? "done" : ""} ${isTaskDueSoon(task) ? "due-soon" : ""} ${isTaskOverdue(task) ? "overdue" : ""}" type="button" data-open-op-task="${task.id}">
              <strong>${task.title}</strong>
              <span>${task.due ? formatDateTime(task.due) : "未安排"} · ${getComputedTaskStatus(task)}</span>
            </button>
          `).join("") : `<div class="ops-empty">暂无 ${level} 类重点</div>`}
        </div>
      </div>
    `;
  }).join("");
  $("#opsWeekRange").textContent = "7月-12月运营任务排期";
}

function renderOpsTaskPool() {
  const poolTasks = getFilteredOpsTasks(state.tasks);
  $("#opsTaskPool").innerHTML = poolTasks.length ? poolTasks.map((task) => renderOpsTaskCard(task, "pool")).join("") : `
    <div class="ops-empty">暂无待安排任务</div>
  `;
}

function renderOpsCalendar() {
  const dates = getOpsTimelineDates();
  const tasks = getFilteredOpsTasks(state.tasks);
  const monthHeader = [
    ...groupOpsMonthSpans(dates).map((group) => `<div class="ops-month" style="grid-column: span ${group.count}">${group.label}</div>`)
  ].join("");
  const dateHeader = [
    ...dates.map((date) => `
      <div class="ops-date ${date === todayIso() ? "today" : ""}">
        <strong>${Number(date.slice(8, 10))}</strong>
        <span>${weekLabel(date).replace("周", "")}</span>
      </div>
    `)
  ].join("");
  const rows = tasks.map((task) => {
    const dueDate = getTaskDueDate(task);
    const cells = dates.map((date) => {
      const nodes = task.nodes.filter((node) => node.date === date);
      const dueChip = dueDate === date ? `
        <div class="ops-ddl-chip ${getComputedTaskStatus(task) === "已完成" ? "done" : ""}" draggable="true" data-op-task-id="${task.id}" data-op-due-id="${task.id}" title="拖动调整 DDL">
          <strong>DDL</strong>
          <span>${getComputedTaskStatus(task)}</span>
        </div>
      ` : "";
      return `
        <div class="ops-timeline-cell ${date === todayIso() ? "today" : ""}" data-ops-date="${date}" data-ops-task-row="${task.id}">
          ${nodes.map((node) => `
            <div class="ops-node-chip ${node.status === "有风险" ? "risk" : ""} ${node.status === "已完成" ? "done" : ""}" draggable="true" data-op-task-id="${task.id}" data-op-node-id="${node.id}" title="拖动调整节点">
              <strong contenteditable="true" data-edit-op-node="${task.id}" data-node-id="${node.id}" data-field="title">${node.title}</strong>
              <button class="ops-node-delete" type="button" data-delete-op-node="${task.id}" data-node-id="${node.id}" aria-label="删除节点">−</button>
            </div>
          `).join("")}
          ${dueChip}
        </div>
      `;
    }).join("");
    return cells;
  }).join("");
  $("#opsCalendar").style.setProperty("--ops-date-count", dates.length);
  $("#opsCalendar").innerHTML = monthHeader + dateHeader + rows;
}

function fillOpsTaskOptions() {
  const form = $("#opsTaskForm");
  if (form) {
    form.elements.section.innerHTML = taskSections.map((section) => `<option>${section}</option>`).join("");
    form.elements.status.innerHTML = taskStatuses.map((status) => `<option>${status}</option>`).join("");
  }
  if ($("#opsQuickSection")) {
    const current = $("#opsQuickSection").value || "其他";
    $("#opsQuickSection").innerHTML = taskSections.map((section) => `<option>${section}</option>`).join("");
    $("#opsQuickSection").value = taskSections.includes(current) ? current : "其他";
  }
}

function quickAddOpsTask() {
  const title = $("#opsQuickTitle").value.trim();
  const due = $("#opsQuickDue").value;
  if (!title) return;
  const task = normalizeTask({
    id: Date.now(),
    title,
    level: "C",
    owner: "运营",
    section: $("#opsQuickSection").value || "其他",
    status: due ? "进行中" : "未开始",
    createdAt: toLocalMinuteString(new Date()),
    due: due ? `${due}T18:00` : "",
    arranged: Boolean(due),
    note: ""
  });
  state.tasks.push(task);
  $("#opsQuickTitle").value = "";
  $("#opsQuickDue").value = "";
  render();
}

function openOpsTaskDetail(taskId = "") {
  const task = taskId ? state.tasks.find((item) => item.id === Number(taskId)) : null;
  fillOpsTaskOptions();
  const form = $("#opsTaskForm");
  form.elements.taskId.value = task?.id || "";
  form.elements.title.value = task?.title || "";
  form.elements.level.value = task?.level || "C";
  form.elements.owner.value = task?.owner || "运营";
  form.elements.section.value = task?.section || "其他";
  form.elements.createdAt.value = task?.createdAt || toLocalMinuteString(new Date());
  form.elements.due.value = task?.due || "";
  form.elements.status.value = getComputedTaskStatus(task || { status: "未开始" });
  form.elements.output.value = task?.output || "";
  $("#deleteOpsTask").style.display = task ? "" : "none";
  $("#completeOpsTask").style.display = task ? "" : "none";
  $("#opsTaskTitle").textContent = task ? "编辑运营任务" : "新增运营任务";
  $("#opsTaskDialog").showModal();
}

function renderOpsNodeRows(nodes) {
  $("#opsNodeList").innerHTML = nodes.map((node) => `
    <div class="ops-node-row">
      <input type="hidden" name="nodeId" value="${node.id || ""}" />
      <label>节点名称<input name="nodeTitle" value="${node.title || ""}" /></label>
      <label>节点日期<input name="nodeDate" type="date" value="${node.date || todayIso()}" /></label>
      <label>负责人<input name="nodeOwner" value="${node.owner || "运营"}" /></label>
      <label>状态<select name="nodeStatus">${nodeStatuses.map((status) => `<option ${node.status === status ? "selected" : ""}>${status}</option>`).join("")}</select></label>
      <label>备注<input name="nodeNote" value="${node.note || ""}" /></label>
      <button class="recap-remove" type="button" data-remove-node aria-label="删除节点">×</button>
    </div>
  `).join("");
}

function renderOpsFollowupRows(rows) {
  $("#opsFollowupList").innerHTML = rows.map((row) => `
    <div class="ops-followup-row">
      <input type="hidden" name="followupId" value="${row.id || ""}" />
      <label>跟进时间<input name="followupTime" type="datetime-local" value="${row.time || toLocalMinuteString(new Date())}" /></label>
      <label>跟进人<input name="followupOwner" value="${row.owner || "负责人"}" /></label>
      <label>跟进内容<input name="followupContent" value="${row.content || ""}" /></label>
      <label>下一步动作<input name="followupNext" value="${row.next || ""}" /></label>
      <button class="recap-remove" type="button" data-remove-followup aria-label="删除记录">×</button>
    </div>
  `).join("");
}

function readOpsNodeRows(task) {
  return $$("#opsNodeList .ops-node-row").map((row, index) => normalizeTaskNode({
    id: row.querySelector('[name="nodeId"]').value || `${task.id}-node-${index}-${Date.now()}`,
    title: row.querySelector('[name="nodeTitle"]').value.trim() || "过程节点",
    date: row.querySelector('[name="nodeDate"]').value || getTaskDueDate(task) || todayIso(),
    owner: row.querySelector('[name="nodeOwner"]').value.trim() || task.owner,
    status: row.querySelector('[name="nodeStatus"]').value,
    note: row.querySelector('[name="nodeNote"]').value.trim()
  }, task));
}

function readOpsFollowupRows() {
  return $$("#opsFollowupList .ops-followup-row").map((row, index) => ({
    id: row.querySelector('[name="followupId"]').value || `follow-${Date.now()}-${index}`,
    time: row.querySelector('[name="followupTime"]').value || toLocalMinuteString(new Date()),
    owner: row.querySelector('[name="followupOwner"]').value.trim() || "负责人",
    content: row.querySelector('[name="followupContent"]').value.trim(),
    next: row.querySelector('[name="followupNext"]').value.trim()
  })).filter((row) => row.content || row.next);
}

function readOpsTaskForm() {
  const form = $("#opsTaskForm");
  const id = Number(form.elements.taskId.value || Date.now());
  const existing = state.tasks.find((task) => task.id === id);
  const task = normalizeTask({
    ...(existing || {}),
    id,
    title: form.elements.title.value.trim() || "未命名运营任务",
    level: form.elements.level.value,
    owner: form.elements.owner.value.trim() || "运营",
    section: form.elements.section.value,
    createdAt: form.elements.createdAt.value || toLocalMinuteString(new Date()),
    due: form.elements.due.value,
    arranged: Boolean(form.elements.due.value),
    status: form.elements.status.value,
    output: form.elements.output.value.trim(),
    nodes: existing?.nodes || [],
    followups: existing?.followups || []
  });
  return task;
}

function saveOpsTask(event) {
  event.preventDefault();
  const task = readOpsTaskForm();
  const index = state.tasks.findIndex((item) => item.id === task.id);
  if (index === -1) state.tasks.unshift(task);
  else state.tasks[index] = task;
  $("#opsTaskDialog").close();
  render();
}

function deleteOpsTaskById(taskId) {
  if (!taskId) return;
  state.tasks = state.tasks.filter((task) => task.id !== Number(taskId));
  if ($("#opsTaskDialog").open) $("#opsTaskDialog").close();
  render();
}

function completeOpsTaskById(taskId) {
  const task = state.tasks.find((item) => item.id === Number(taskId));
  if (!task) return;
  task.status = "已完成";
  task.nodes = task.nodes.map((node) => ({ ...node, status: "已完成" }));
  if ($("#opsTaskDialog").open) $("#opsTaskDialog").close();
  render();
}

function reviewNumberInput(value, attrs) {
  return `<input type="number" min="0" step="1" value="${value}" ${attrs} />`;
}

function reviewMoneyInput(value, attrs) {
  return `<input type="number" min="0" step="100" value="${value}" ${attrs} />`;
}

function classifyVisitChannel(platform = "") {
  const text = String(platform || "");
  if (text.includes("视频号")) return "video";
  if (text.includes("朋友圈")) return "moments";
  if (text.includes("小红书")) return "xiaohongshu";
  if (text.includes("线下") || text.includes("自拓")) return "offline";
  if (text.includes("抖音") || text.includes("腾讯") || text.includes("直播")) return "live";
  return "offline";
}

function buildBrokerVisitRows(weekStart) {
  const weekEnd = addDays(weekStart, 6);
  const visits = getAllLeads().filter((lead) => isLeadVisitInWeek(lead, weekStart, weekEnd));
  const names = [...new Set([...hosts, ...visits.map((lead) => lead.followPerson || lead.hosts?.[0] || lead.host)].filter(Boolean))];
  return names.map((name) => {
    const rowVisits = visits.filter((lead) => lead.followPerson === name || (lead.hosts || []).includes(name) || lead.host === name);
    const buckets = { live: 0, video: 0, moments: 0, xiaohongshu: 0, offline: 0 };
    rowVisits.forEach((lead) => {
      buckets[classifyVisitChannel(lead.platform)] += 1;
    });
    const total = Object.values(buckets).reduce((sum, value) => sum + value, 0);
    return { name, ...buckets, total };
  });
}

function normalizeBrokerVisitRow(row = {}) {
  const live = Number(row.live || 0);
  const video = Number(row.video || 0);
  const moments = Number(row.moments || 0);
  const xiaohongshu = Number(row.xiaohongshu || 0);
  const offline = Number(row.offline || 0);
  return {
    name: row.name || "",
    live,
    video,
    moments,
    xiaohongshu,
    offline,
    total: live + video + moments + xiaohongshu + offline
  };
}

function getBrokerVisitRows(review) {
  if (!review.broker_visit_rows?.length && !review.broker_visit_rows_manual) {
    review.broker_visit_rows = buildBrokerVisitRows(review.week_start_date).map(normalizeBrokerVisitRow);
  }
  return review.broker_visit_rows.map(normalizeBrokerVisitRow);
}

function brokerNumberInput(value, field) {
  return `<input type="number" min="0" value="${Number(value || 0)}" data-broker-field="${field}" />`;
}

function brokerVisitRowTemplate(row = {}) {
  const item = normalizeBrokerVisitRow(row);
  return `
    <tr>
      <td><input value="${item.name}" data-broker-field="name" /></td>
      <td>${brokerNumberInput(item.live, "live")}</td>
      <td>${brokerNumberInput(item.video, "video")}</td>
      <td>${brokerNumberInput(item.moments, "moments")}</td>
      <td>${brokerNumberInput(item.xiaohongshu, "xiaohongshu")}</td>
      <td>${brokerNumberInput(item.offline, "offline")}</td>
      <td><strong data-broker-total>${item.total}</strong></td>
      <td><button class="broker-row-remove" type="button" data-remove-broker-row aria-label="删除该行">−</button></td>
    </tr>
  `;
}

function readBrokerVisitRows() {
  return $$("#weeklyBrokerVisitRows tr").map((row) => normalizeBrokerVisitRow({
    name: row.querySelector('[data-broker-field="name"]')?.value.trim(),
    live: row.querySelector('[data-broker-field="live"]')?.value,
    video: row.querySelector('[data-broker-field="video"]')?.value,
    moments: row.querySelector('[data-broker-field="moments"]')?.value,
    xiaohongshu: row.querySelector('[data-broker-field="xiaohongshu"]')?.value,
    offline: row.querySelector('[data-broker-field="offline"]')?.value
  })).filter((row) => row.name || row.total);
}

function addBrokerVisitRow() {
  $("#weeklyBrokerVisitRows").insertAdjacentHTML("beforeend", brokerVisitRowTemplate({ name: "新增经纪人" }));
}

function updateBrokerVisitRowTotal(input) {
  const row = input.closest("tr");
  if (!row) return;
  const total = ["live", "video", "moments", "xiaohongshu", "offline"].reduce((sum, field) => {
    return sum + Number(row.querySelector(`[data-broker-field="${field}"]`)?.value || 0);
  }, 0);
  const totalCell = row.querySelector("[data-broker-total]");
  if (totalCell) totalCell.textContent = total;
}

function getSpendTotal(review) {
  return Object.values(review.channel_spend || {}).reduce((sum, item) => sum + Number(item.adjusted ?? item.raw ?? 0), 0);
}

function renderReviewWeekOptions() {
  const starts = [...new Set([...state.weeklyReviews.map((item) => item.week_start_date), getWeekStart(todayIso()), reviewWeekStart])].sort().reverse();
  $("#reviewWeekSelect").innerHTML = starts.map((start) => `<option value="${start}">${formatReviewTitle(start)}</option>`).join("");
  $("#reviewWeekSelect").value = reviewWeekStart;
}

function renderReview() {
  const review = getWeeklyReviewRecord(reviewWeekStart);
  renderReviewWeekOptions();
  $("#weeklyReviewTitle").textContent = review.title;
  $("#weeklyReviewMeta").textContent = `${review.week_start_date} 至 ${review.week_end_date} · ${review.week_start_date >= getWeekStart(todayIso()) ? "当前/未来周实时联动" : "历史归档快照"}`;
  const totalSpend = getSpendTotal(review);
  const metricCards = [
    ["直播场次", "live_sessions", review.live_sessions, "本周总直播"],
    ["线索量", "leads", review.leads, "本周新增线索"],
    ["有效线索量", "valid_leads", review.valid_leads, "加微信/邀约/到访/成交"],
    ["到访量", "visits", review.visits, "本周到场"]
  ];
  $("#weeklyMetrics").innerHTML = metricCards.map(([label, key, metric, note]) => `
    <article class="weekly-metric-card">
      <span>${label}</span>
      ${reviewNumberInput(metricDisplay(metric), `class="metric-edit-input" data-review-metric="${key}" aria-label="编辑${label}"`)}
      <em>${note}</em>
    </article>
  `).join("");
  $("#weeklyBrokerVisitRows").innerHTML = getBrokerVisitRows(review).map(brokerVisitRowTemplate).join("");
  $("#weeklySpendCards").innerHTML = spendChannels.map(([key, label]) => {
    const item = review.channel_spend[key] || { label, raw: 0, adjusted: 0 };
    return `
      <article class="spend-card">
        <span>${label}</span>
        <strong>¥${Number(item.adjusted ?? item.raw ?? 0).toLocaleString()}</strong>
        ${reviewMoneyInput(item.adjusted ?? item.raw ?? 0, `data-spend-key="${key}"`)}
      </article>
    `;
  }).join("") + `
    <article class="spend-card total">
      <span>本周总消耗</span>
      <strong>¥${totalSpend.toLocaleString()}</strong>
      <em>自动汇总</em>
    </article>
  `;
  renderNextWeekSummary(review.next_week_schedule_summary);
  $("#reviewHighlights").value = review.review_summary.highlights || "";
  $("#reviewProblems").value = review.review_summary.problems || "";
  $("#reviewNextActions").value = review.review_summary.next_actions || "";
  $("#reviewOwner").value = review.review_summary.owner || "负责人";
  $("#reviewDeadline").value = review.review_summary.deadline || "";
}

function renderNextWeekSummary(summary = {}) {
  const hostStats = summary.host_stats || [];
  const hostSummary = hostStats.map((item) => `${item.host}${item.count}场`).join("，") || "暂无主播排班";
  $("#nextWeekSummary").innerHTML = `
    <div class="next-week-focus-grid">
      <article class="next-focus-card live">
        <span>下周预计直播场次</span>
        <strong>${summary.total_sessions || 0}</strong>
        <em>其中${hostSummary}</em>
      </article>
      <article class="next-focus-card">
        <span>下周视频拍摄量</span>
        ${reviewNumberInput(summary.video_shoot_count || 0, `data-next-work="video_shoot_count" aria-label="编辑下周视频拍摄量"`)}
        <em>可手动填写</em>
      </article>
      <article class="next-focus-card">
        <span>小红书发布数量</span>
        ${reviewNumberInput(summary.xiaohongshu_publish_count || 0, `data-next-work="xiaohongshu_publish_count" aria-label="编辑小红书发布数量"`)}
        <em>可手动填写</em>
      </article>
    </div>
  `;
}

function setMetricAdjusted(metric, value) {
  metric.adjusted = Number(value || 0);
}

function saveWeeklyReviewEdits() {
  const review = getWeeklyReviewRecord(reviewWeekStart);
  $$("[data-review-metric]").forEach((input) => {
    setMetricAdjusted(review[input.dataset.reviewMetric], input.value);
  });
  review.broker_visit_rows = readBrokerVisitRows();
  review.broker_visit_rows_manual = true;
  $$("[data-spend-key]").forEach((input) => {
    const spend = review.channel_spend[input.dataset.spendKey];
    if (spend) {
      spend.adjusted = Number(input.value || 0);
      const channelRow = review.channel_stats.find((row) => getSpendKeyByChannel(row.channel) === input.dataset.spendKey);
      if (channelRow) setMetricAdjusted(channelRow.channel_spend, input.value);
    }
  });
  $$("[data-next-work]").forEach((input) => {
    review.next_week_schedule_summary[input.dataset.nextWork] = Number(input.value || 0);
  });
  review.review_summary = {
    highlights: $("#reviewHighlights").value.trim(),
    problems: $("#reviewProblems").value.trim(),
    next_actions: $("#reviewNextActions").value.trim(),
    owner: $("#reviewOwner").value.trim() || "负责人",
    deadline: $("#reviewDeadline").value,
    generated: review.review_summary.generated || ""
  };
  review.updated_at = toLocalMinuteString(new Date());
  render();
}

function searchReviewRange() {
  const start = $("#reviewRangeStart").value;
  const end = $("#reviewRangeEnd").value;
  if (!start || !end) {
    $("#reviewRangeResults").innerHTML = `<span>请选择开始和结束日期</span>`;
    return;
  }
  const matches = state.weeklyReviews
    .filter((review) => review.week_start_date <= end && review.week_end_date >= start)
    .sort((a, b) => b.week_start_date.localeCompare(a.week_start_date));
  $("#reviewRangeResults").innerHTML = matches.length ? matches.map((review) => `
    <button type="button" data-jump-review-week="${review.week_start_date}">${review.title}</button>
  `).join("") : `<span>该日期范围暂无已保存周复盘</span>`;
}

function openDialog(type = "lead") {
  setActiveForm(type);
  $("#quickDialog").showModal();
}

function setActiveForm(type) {
  activeForm = type;
  $$(".form-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.form === type));
  $$(".form-pane").forEach((pane) => pane.classList.toggle("active", pane.dataset.pane === type));
  $("#dialogTitle").textContent = type === "lead" ? "新增线索" : type === "schedule" ? "新增排班" : "新增运营任务";
}

function fillHostOptions() {
  $$("select[name='leadHost'], select[name='scheduleHost']").forEach((select) => {
    select.innerHTML = hosts.map((host) => `<option>${host}</option>`).join("");
  });
  fillLeadDetailOptions();
  fillOpsTaskOptions();
}

function handleSave(event) {
  event.preventDefault();
  const data = new FormData($("#quickForm"));
  const id = Date.now();
  if (activeForm === "lead") {
    state.leads.unshift(normalizeLead({
      id,
      customer: data.get("customer") || "未命名客户",
      hosts: [data.get("leadHost")],
      host: data.get("leadHost"),
      followPerson: data.get("leadHost"),
      platform: "手动录入",
      note: data.get("need") || "待补充需求",
      status: data.get("leadStatus"),
      wechat: ["已加微信", "已邀约", "已到场", "已成交"].includes(data.get("leadStatus")) ? "是" : "否",
      arrivalTime: data.get("arrivalTime"),
      note: data.get("nextStep") || data.get("need") || "待补充下一步",
      createdAt: toLocalMinuteString(new Date())
    }));
  }
  if (activeForm === "schedule") {
    state.schedules.push({
      id,
      host: data.get("scheduleHost"),
      hosts: [data.get("scheduleHost")],
      date: data.get("liveDate") || todayIso(),
      time: data.get("liveTime") || "待定",
      platform: data.get("platform"),
      topic: data.get("topic") || "待定主题",
      status: normalizeLiveStatus(data.get("liveStatus")),
      leads: Number(data.get("leadCount") || 0),
      valid: Number(data.get("validCount") || 0),
      recaps: []
    });
  }
  if (activeForm === "task") {
    state.tasks.unshift(normalizeTask({
      id,
      title: data.get("taskTitle") || "未命名任务",
      owner: data.get("owner") || "运营",
      due: data.get("due"),
      level: data.get("priority") === "高" ? "A" : data.get("priority") === "中" ? "B" : "C",
      status: mapTaskStatus(data.get("taskStatus")),
      section: "其他",
      note: data.get("deliverable") || "",
      standard: data.get("deliverable") || "",
      arranged: Boolean(data.get("due"))
    }));
  }
  $("#quickForm").reset();
  $("#quickDialog").close();
  render();
}

function addHost() {
  const name = prompt("请输入主播姓名");
  const cleanName = name?.trim();
  if (!cleanName || hosts.includes(cleanName)) return;
  hosts.push(cleanName);
  hostColors[cleanName] = hostPalette[(hosts.length - 1) % hostPalette.length];
  state.hosts = hosts;
  fillHostOptions();
  render();
}

function fillLeadDetailOptions() {
  const followSelect = $("#leadDetailForm")?.elements.followPerson;
  const statusSelect = $("#leadDetailForm")?.elements.status;
  if (followSelect) followSelect.innerHTML = [`<option value="">待填写</option>`, ...hosts.map((host) => `<option>${host}</option>`)].join("");
  if (statusSelect) statusSelect.innerHTML = leadStatuses.map((status) => `<option>${status}</option>`).join("");
}

function getLeadByKey(key) {
  const [type, scheduleId, recapId] = String(key || "").split(":");
  if (type === "schedule") {
    const schedule = getScheduleById(scheduleId);
    const recap = schedule?.recaps?.find((item) => String(item.id) === String(recapId));
    if (!schedule || !recap) return null;
    return getScheduleRecapLeads().find((lead) => String(lead.sourceScheduleId) === String(scheduleId) && String(lead.recapId) === String(recapId));
  }
  if (type === "manual") {
    const lead = state.leads.find((item) => String(item.id) === String(scheduleId));
    return lead ? normalizeLead(lead) : null;
  }
  return null;
}

function setLeadDetailValues(lead) {
  const form = $("#leadDetailForm");
  fillLeadDetailOptions();
  form.elements.leadKey.value = lead ? getLeadKey(lead) : "";
  form.elements.customer.value = lead?.customer || "";
  form.elements.phone.value = lead?.phone || "";
  form.elements.followPerson.value = lead?.followPerson || "";
  form.elements.wechat.value = lead?.wechat || "否";
  form.elements.platform.value = lead?.platform || "手动录入";
  form.elements.status.value = lead?.status || "新线索";
  form.elements.hostsText.value = lead?.host || (hosts[0] || "");
  form.elements.hostsText.readOnly = lead?.sourceType === "schedule";
  form.elements.arrivalTime.value = lead?.arrivalTime || "";
  form.elements.note.value = lead?.note || "";
  $$(`#leadDetailForm [name="propertyTypes"]`).forEach((input) => {
    input.checked = lead?.propertyTypes?.includes(input.value) || false;
  });
  $("#deleteLeadDetail").style.display = lead ? "" : "none";
  $("#leadDetailTitle").textContent = lead ? "编辑线索" : "新增线索";
}

function openLeadDetail(key = "") {
  const lead = key ? getLeadByKey(key) : null;
  if (key && !lead) return;
  setLeadDetailValues(lead);
  $("#leadDetailDialog").showModal();
}

function readLeadDetailData() {
  const form = $("#leadDetailForm");
  return normalizeLead({
    id: Date.now(),
    customer: form.elements.customer.value.trim() || "未命名客户",
    phone: form.elements.phone.value.trim(),
    followPerson: form.elements.followPerson.value,
    wechat: form.elements.wechat.value,
    platform: form.elements.platform.value.trim() || "手动录入",
    propertyTypes: $$(`#leadDetailForm [name="propertyTypes"]:checked`).map((input) => input.value),
    status: form.elements.status.value,
    hosts: parseHostList(form.elements.hostsText.value),
    host: form.elements.hostsText.value,
    arrivalTime: form.elements.arrivalTime.value,
    note: form.elements.note.value.trim(),
    createdAt: toLocalMinuteString(new Date())
  });
}

function updateLeadByKey(key, leadData) {
  const [type, scheduleId, recapId] = String(key || "").split(":");
  if (!key || type === "manual") {
    if (!key) {
      state.leads.unshift(leadData);
    } else {
      const index = state.leads.findIndex((lead) => String(lead.id) === String(scheduleId));
      if (index !== -1) state.leads[index] = { ...leadData, id: state.leads[index].id, createdAt: state.leads[index].createdAt || leadData.createdAt };
    }
    return;
  }
  const schedule = getScheduleById(scheduleId);
  const recap = schedule?.recaps?.find((item) => String(item.id) === String(recapId));
  if (!schedule || !recap) return;
  Object.assign(recap, {
    customer: leadData.customer,
    phone: leadData.phone,
    followPerson: leadData.followPerson,
    wechat: leadData.wechat,
    platform: leadData.platform,
    propertyTypes: leadData.propertyTypes,
    status: leadData.status,
    arrivalTime: leadData.arrivalTime,
    note: leadData.note,
    createdAt: recap.createdAt || leadData.createdAt
  });
  syncScheduleLeadCount(schedule);
}

function saveLeadDetail(event) {
  event.preventDefault();
  const key = $("#leadDetailForm").elements.leadKey.value;
  updateLeadByKey(key, readLeadDetailData());
  $("#leadDetailDialog").close();
  render();
}

function deleteLeadByKey(key) {
  const [type, scheduleId, recapId] = String(key || "").split(":");
  if (!key) return;
  if (type === "manual") {
    state.leads = state.leads.filter((lead) => String(lead.id) !== String(scheduleId));
  }
  if (type === "schedule") {
    const schedule = getScheduleById(scheduleId);
    if (schedule) {
      schedule.recaps = (schedule.recaps || []).filter((recap) => String(recap.id) !== String(recapId));
      syncScheduleLeadCount(schedule);
    }
  }
  $("#leadDetailDialog").close();
  render();
}

function openRecapDialog(scheduleId) {
  const schedule = getScheduleById(scheduleId);
  if (!schedule) return;
  $("#recapForm").elements.scheduleId.value = schedule.id;
  $("#recapTitle").textContent = `${getScheduleHostLabel(schedule)} · ${schedule.platform} · ${schedule.date}`;
  const scheduleHosts = getScheduleHosts(schedule);
  renderRecapRows(schedule.recaps?.length ? schedule.recaps : [{ customer: "", phone: "", followPerson: scheduleHosts.length === 1 ? scheduleHosts[0] : "", propertyTypes: [], wechat: "否", note: "" }]);
  $("#recapDialog").showModal();
}

function renderRecapRows(rows) {
  $("#recapList").innerHTML = rows.map((row) => `
    <div class="recap-row" data-created-at="${row.createdAt || ""}">
      <input type="hidden" name="recapId" value="${row.id || ""}" />
      <label>客户姓名<input name="customer" value="${row.customer || ""}" placeholder="客户称呼" /></label>
      <label>手机号<input name="phone" value="${row.phone || ""}" placeholder="客户手机号" /></label>
      <label>跟进人
        <select name="followPerson">
          <option value="" ${!row.followPerson ? "selected" : ""}>待填写</option>
          ${hosts.map((host) => `<option ${row.followPerson === host ? "selected" : ""}>${host}</option>`).join("")}
        </select>
      </label>
      <label>是否添加微信
        <select name="wechat">
          <option value="是" ${row.wechat === "是" ? "selected" : ""}>是</option>
          <option value="否" ${row.wechat !== "是" ? "selected" : ""}>否</option>
        </select>
      </label>
      <div class="recap-property-options">
        ${propertyOptions.map((option) => `
          <label><input type="checkbox" name="propertyTypes" value="${option}" ${parsePropertyTypes(row.propertyTypes?.length ? row.propertyTypes : row.property).includes(option) ? "checked" : ""} />${option}</label>
        `).join("")}
      </div>
      <label class="recap-note">备注<input name="note" value="${row.note || row.property || ""}" placeholder="需求/跟进备注" /></label>
      <button class="recap-remove" type="button" aria-label="删除线索">×</button>
    </div>
  `).join("");
}

function getRecapFormRows() {
  return $$("#recapList .recap-row").map((row) => ({
    id: row.querySelector('[name="recapId"]').value || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    customer: row.querySelector('[name="customer"]').value.trim(),
    phone: row.querySelector('[name="phone"]').value.trim(),
    followPerson: row.querySelector('[name="followPerson"]').value,
    wechat: row.querySelector('[name="wechat"]').value,
    propertyTypes: Array.from(row.querySelectorAll('[name="propertyTypes"]:checked')).map((input) => input.value),
    status: row.querySelector('[name="wechat"]').value === "是" ? "已加微信" : "新线索",
    note: row.querySelector('[name="note"]').value.trim(),
    createdAt: row.dataset.createdAt || toLocalMinuteString(new Date())
  })).filter((row) => row.phone || row.customer || row.note || row.propertyTypes.length);
}

function saveRecap(event) {
  event.preventDefault();
  const schedule = getScheduleById($("#recapForm").elements.scheduleId.value);
  if (!schedule) return;
  schedule.recaps = getRecapFormRows();
  syncScheduleLeadCount(schedule);
  $("#recapDialog").close();
  render();
}

function commitEditable(target) {
  const text = target.textContent.trim();
  if (target.dataset.editHost) {
    updateHostName(target.dataset.editHost, text);
    return;
  }
  if (target.dataset.editSchedule) {
    const schedule = getScheduleById(target.dataset.editSchedule);
    const field = target.dataset.field;
    if (schedule && ["platform", "time", "topic"].includes(field)) {
      schedule[field] = text || schedule[field];
      render();
    }
  }
  if (target.dataset.editOpNode) {
    const task = state.tasks.find((item) => item.id === Number(target.dataset.editOpNode));
    const node = task?.nodes.find((item) => String(item.id) === String(target.dataset.nodeId));
    if (node && target.dataset.field === "title") {
      node.title = text || "进度节点";
      render();
    }
  }
}

function bindEvents() {
  $$(".nav-tab").forEach((button) => {
    button.addEventListener("click", () => {
      const view = button.dataset.view;
      $$(".nav-tab").forEach((tab) => tab.classList.toggle("active", tab === button));
      $$(".view").forEach((section) => section.classList.toggle("active", section.id === `${view}View`));
      $("#pageTitle").textContent = button.textContent === "总览" ? "数字营销日常精细化看板" : button.textContent;
    });
  });
  $$("[data-view-shortcut]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = $(`.nav-tab[data-view="${button.dataset.viewShortcut}"]`);
      target?.click();
    });
  });

  $("#openQuickAdd").addEventListener("click", () => openLeadDetail());
  $("#addHostAction").addEventListener("click", addHost);
  $("#addOpsTaskAction").addEventListener("click", () => openOpsTaskDetail());
  $("#addOpsTaskTop").addEventListener("click", () => openOpsTaskDetail());
  $("#opsQuickAdd").addEventListener("click", quickAddOpsTask);
  $$("#quickDialog [value='cancel']").forEach((button) => button.addEventListener("click", () => $("#quickDialog").close()));
  $$("#recapDialog [value='cancel']").forEach((button) => button.addEventListener("click", () => $("#recapDialog").close()));
  $$("#leadDetailDialog [value='cancel']").forEach((button) => button.addEventListener("click", () => $("#leadDetailDialog").close()));
  $$("#opsTaskDialog [value='cancel']").forEach((button) => button.addEventListener("click", () => $("#opsTaskDialog").close()));
  $$(".form-tab").forEach((tab) => tab.addEventListener("click", () => setActiveForm(tab.dataset.form)));
  $$("[data-open-form]").forEach((button) => button.addEventListener("click", () => openDialog(button.dataset.openForm)));
  $("#saveQuick").addEventListener("click", handleSave);
  $("#saveRecap").addEventListener("click", saveRecap);
  $("#saveLeadDetail").addEventListener("click", saveLeadDetail);
  $("#saveOpsTask").addEventListener("click", saveOpsTask);
  $("#deleteOpsTask").addEventListener("click", () => {
    const taskId = $("#opsTaskForm").elements.taskId.value;
    if (taskId && confirm("确认删除这个运营任务？")) deleteOpsTaskById(taskId);
  });
  $("#completeOpsTask").addEventListener("click", () => completeOpsTaskById($("#opsTaskForm").elements.taskId.value));
  $("#addOpsNode")?.addEventListener("click", () => {
    const task = readOpsTaskForm();
    renderOpsNodeRows([...readOpsNodeRows(task), normalizeTaskNode({ title: "新增节点", date: getTaskDueDate(task) || todayIso(), owner: task.owner }, task)]);
  });
  $("#addOpsFollowup")?.addEventListener("click", () => {
    renderOpsFollowupRows([...readOpsFollowupRows(), { time: toLocalMinuteString(new Date()), owner: "负责人", content: "", next: "" }]);
  });
  $("#addLeadInPool").addEventListener("click", () => openLeadDetail());
  $("#deleteLeadDetail").addEventListener("click", () => {
    const key = $("#leadDetailForm").elements.leadKey.value;
    if (key && confirm("确认删除这条线索？")) deleteLeadByKey(key);
  });
  $("#toggleLeadMetrics").addEventListener("click", () => {
    $("#leadMetricRow").classList.toggle("collapsed");
    $("#toggleLeadMetrics").textContent = $("#leadMetricRow").classList.contains("collapsed") ? "展开数据" : "收起数据";
  });
  $("#addRecapRow").addEventListener("click", () => {
    const rows = getRecapFormRows();
    const schedule = getScheduleById($("#recapForm").elements.scheduleId.value);
    const scheduleHosts = getScheduleHosts(schedule || {});
    rows.push({ customer: "", phone: "", followPerson: scheduleHosts.length === 1 ? scheduleHosts[0] : "", propertyTypes: [], wechat: "否", note: "" });
    renderRecapRows(rows);
  });
  ["#leadSearch", "#leadDateFilter", "#leadHostFilter", "#leadPlatformFilter", "#leadPropertyFilter", "#leadFilter"].forEach((selector) => {
    $(selector)?.addEventListener(selector === "#leadSearch" ? "input" : "change", renderLeads);
  });
  ["#opsOwnerFilter", "#opsLevelFilter", "#opsStatusFilter", "#opsSectionFilter", "#opsDueFilter"].forEach((selector) => {
    $(selector)?.addEventListener("change", renderTasks);
  });
  $("#opsPrevWeek")?.addEventListener("click", () => {
    const previous = addDays(opsWeekStart, -7);
    if (previous >= getWeekStart(todayIso())) opsWeekStart = previous;
    renderTasks();
  });
  $("#opsNextWeek")?.addEventListener("click", () => {
    const nextWeek = addDays(opsWeekStart, 7);
    if (nextWeek <= getWeekStart(`${new Date(`${todayIso()}T00:00:00`).getFullYear()}-12-31`)) opsWeekStart = nextWeek;
    renderTasks();
  });
  $("#opsThisWeek")?.addEventListener("click", () => {
    opsWeekStart = getWeekStart(todayIso());
    renderTasks();
  });
  $("#opsFocusPrev")?.addEventListener("click", () => {
    opsWeekStart = addDays(opsWeekStart, -7);
    renderTasks();
  });
  $("#opsFocusNext")?.addEventListener("click", () => {
    opsWeekStart = addDays(opsWeekStart, 7);
    renderTasks();
  });
  $("#opsFocusThis")?.addEventListener("click", () => {
    opsWeekStart = getWeekStart(todayIso());
    renderTasks();
  });
  $(".ops-workspace")?.addEventListener("scroll", syncOpsWorkspaceScroll);
  $("#reviewPrevWeek")?.addEventListener("click", () => {
    reviewWeekStart = addDays(reviewWeekStart, -7);
    render();
  });
  $("#reviewNextWeek")?.addEventListener("click", () => {
    reviewWeekStart = addDays(reviewWeekStart, 7);
    render();
  });
  $("#reviewThisWeek")?.addEventListener("click", () => {
    reviewWeekStart = getWeekStart(todayIso());
    render();
  });
  $("#reviewWeekSelect")?.addEventListener("change", () => {
    reviewWeekStart = $("#reviewWeekSelect").value;
    render();
  });
  $("#reviewRangeSearch")?.addEventListener("click", searchReviewRange);
  $("#saveWeeklyReview")?.addEventListener("click", saveWeeklyReviewEdits);
  $("#addBrokerVisitRow")?.addEventListener("click", addBrokerVisitRow);
  $("#weeklyBrokerVisitRows")?.addEventListener("input", (event) => {
    if (event.target.matches('[data-broker-field]:not([data-broker-field="name"])')) updateBrokerVisitRowTotal(event.target);
  });
  $("#monthlyProgressGrid")?.addEventListener("input", (event) => {
    if (event.target.matches("[data-monthly-metric]")) updateMonthlyProgressFromInput(event.target);
  });
  $("#personalMonthlyProgressGrid")?.addEventListener("input", (event) => {
    if (event.target.matches("[data-personal-host]")) updatePersonalMonthlyProgressFromInput(event.target);
  });
  $("#todayLiveRows")?.addEventListener("change", (event) => {
    if (!event.target.matches("[data-today-live-status]")) return;
    const schedule = getScheduleById(event.target.dataset.todayLiveStatus);
    if (!schedule) return;
    schedule.status = normalizeLiveStatus(event.target.value);
    render();
  });

  $("#resetDemo").addEventListener("click", () => {
    state = normalizeState(structuredClone(demoState));
    fillHostOptions();
    render();
  });

  document.body.addEventListener("click", (event) => {
    const target = event.target;
    if (target.closest("[data-remove-broker-row]")) {
      target.closest("tr")?.remove();
      return;
    }
    if (target.closest("[data-remove-node]")) {
      target.closest(".ops-node-row").remove();
      return;
    }
    if (target.closest("[data-remove-followup]")) {
      target.closest(".ops-followup-row").remove();
      return;
    }
    if (target.closest(".recap-remove")) {
      target.closest(".recap-row")?.remove();
      return;
    }
    const addHostButton = target.closest("[data-add-host-inline]");
    if (addHostButton) {
      addHost();
      return;
    }
    const editHostButton = target.closest("[data-edit-host-action]");
    if (editHostButton) {
      editHost(editHostButton.dataset.editHostAction);
      return;
    }
    const removeHostButton = target.closest("[data-remove-host]");
    if (removeHostButton) {
      removeHost(removeHostButton.dataset.removeHost);
      return;
    }
    const removeScheduleHostButton = target.closest("[data-remove-schedule-host]");
    if (removeScheduleHostButton) {
      removeHostFromSchedule(removeScheduleHostButton.dataset.removeScheduleHost, removeScheduleHostButton.dataset.host);
      return;
    }
    const phoneRecapButton = target.closest("[data-phone-recap]");
    if (phoneRecapButton) {
      openRecapDialog(phoneRecapButton.dataset.phoneRecap);
      return;
    }
    const leadRow = target.closest("[data-open-lead]");
    if (leadRow) {
      openLeadDetail(leadRow.dataset.openLead);
      return;
    }
    const openOpTask = target.closest("[data-open-op-task]");
    if (openOpTask) {
      openOpsTaskDetail(openOpTask.dataset.openOpTask);
      return;
    }
    const completeOpTask = target.closest("[data-complete-op-task]");
    if (completeOpTask) {
      completeOpsTaskById(completeOpTask.dataset.completeOpTask);
      return;
    }
    const jumpReviewWeek = target.closest("[data-jump-review-week]");
    if (jumpReviewWeek) {
      reviewWeekStart = jumpReviewWeek.dataset.jumpReviewWeek;
      render();
      return;
    }
    const deleteOpNode = target.closest("[data-delete-op-node]");
    if (deleteOpNode) {
      if (confirm("确认删除这个进度节点？")) {
        deleteTaskNode(deleteOpNode.dataset.deleteOpNode, deleteOpNode.dataset.nodeId);
      }
      return;
    }
    const deleteScheduleButton = target.closest("[data-delete-schedule]");
    if (deleteScheduleButton) {
      deleteSchedule(deleteScheduleButton.dataset.deleteSchedule);
      return;
    }
    const liveChip = target.closest(".timeline-chip[data-schedule-id]");
    if (liveChip && !target.isContentEditable) {
      openRecapDialog(liveChip.dataset.scheduleId);
    }
    if (target.matches("[data-schedule-done]")) {
      const item = state.schedules.find((schedule) => schedule.id === Number(target.dataset.scheduleDone));
      item.status = "已完成";
      render();
    }
    if (target.matches("[data-schedule-risk]")) {
      const item = state.schedules.find((schedule) => schedule.id === Number(target.dataset.scheduleRisk));
      item.status = "异常";
      render();
    }
    if (target.matches("[data-lead-status]")) {
      const lead = state.leads.find((item) => item.id === Number(target.dataset.leadStatus));
      lead.status = target.dataset.status;
      if (target.dataset.status === "已到场" && !lead.arrivalTime) {
        lead.arrivalTime = toLocalMinuteString(new Date());
      }
      render();
    }
    if (target.matches("[data-task-next]")) {
      const task = state.tasks.find((item) => item.id === Number(target.dataset.taskNext));
      const index = taskStatuses.indexOf(task.status);
      task.status = taskStatuses[Math.min(index + 1, taskStatuses.length - 2)];
      render();
    }
    if (target.matches("[data-task-risk]")) {
      const task = state.tasks.find((item) => item.id === Number(target.dataset.taskRisk));
      task.status = "延期/风险";
      render();
    }
  });

  document.body.addEventListener("dragstart", (event) => {
    if (event.target.closest("button") || event.target.isContentEditable) return;
    const hostCard = event.target.closest("[data-drag-host]");
    const chip = event.target.closest("[data-schedule-id]");
    const opProgressTemplate = event.target.closest("[data-op-progress-template]");
    const opNode = event.target.closest("[data-op-node-id]");
    const opDue = event.target.closest("[data-op-due-id]");
    const opTask = event.target.closest("[data-op-task-id]");
    if (hostCard) {
      dragPayload = { type: "host", host: hostCard.dataset.dragHost };
    } else if (chip) {
      dragPayload = { type: "schedule", scheduleId: chip.dataset.scheduleId };
    } else if (opProgressTemplate) {
      dragPayload = { type: "opProgress" };
    } else if (opNode) {
      dragPayload = { type: "opNode", taskId: opNode.dataset.opTaskId, nodeId: opNode.dataset.opNodeId };
    } else if (opDue) {
      dragPayload = { type: "opDue", taskId: opDue.dataset.opTaskId };
    } else if (opTask) {
      dragPayload = { type: "opTask", taskId: opTask.dataset.opTaskId };
    } else {
      return;
    }
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", JSON.stringify(dragPayload));
  });

  document.body.addEventListener("dragover", (event) => {
    const cell = event.target.closest(".timeline-cell");
    const dateHeader = event.target.closest(".timeline-date");
    const chip = event.target.closest(".timeline-chip[data-schedule-id]");
    const opsDay = event.target.closest(".ops-day");
    const opsCell = event.target.closest(".ops-timeline-cell");
    if (!cell && !dateHeader && !chip && !opsDay && !opsCell) return;
    event.preventDefault();
    (chip || cell || dateHeader || opsDay || opsCell).classList.add("drop-target");
  });

  document.body.addEventListener("dragleave", (event) => {
    event.target.closest(".timeline-cell, .timeline-date, .timeline-chip, .ops-day, .ops-timeline-cell")?.classList.remove("drop-target");
  });

  document.body.addEventListener("drop", (event) => {
    const cell = event.target.closest(".timeline-cell");
    const dateHeader = event.target.closest(".timeline-date");
    const chip = event.target.closest(".timeline-chip[data-schedule-id]");
    const opsDay = event.target.closest(".ops-day");
    const opsCell = event.target.closest(".ops-timeline-cell");
    const target = chip || cell || dateHeader || opsDay || opsCell;
    if (!target || !dragPayload) return;
    event.preventDefault();
    target.classList.remove("drop-target");
    if (dragPayload.type === "opTask" && opsCell) {
      moveTaskSchedule(dragPayload.taskId, opsCell.dataset.opsDate);
      dragPayload = null;
      return;
    }
    if (dragPayload.type === "opDue" && opsCell) {
      moveTaskDue(dragPayload.taskId, opsCell.dataset.opsDate);
      dragPayload = null;
      return;
    }
    if (dragPayload.type === "opNode" && opsCell) {
      moveTaskNode(dragPayload.taskId, dragPayload.nodeId, opsCell.dataset.opsDate);
      dragPayload = null;
      return;
    }
    if (dragPayload.type === "opProgress" && opsCell) {
      createTaskNodeFromDrop(opsCell.dataset.opsTaskRow, opsCell.dataset.opsDate);
      dragPayload = null;
      return;
    }
    if (dragPayload.type === "host" && chip) {
      addHostToSchedule(chip.dataset.scheduleId, dragPayload.host);
      dragPayload = null;
      return;
    }
    if (dragPayload.type === "host" && cell) {
      createScheduleFromDrop(dragPayload.host, cell.dataset.date, cell.dataset.time);
      dragPayload = null;
      return;
    }
    if (dragPayload.type === "host" && dateHeader) {
      shiftHostSchedule(dragPayload.host, dateHeader.dataset.date);
    }
    if (dragPayload.type === "schedule" && cell) {
      moveSchedule(dragPayload.scheduleId, cell.dataset.date, cell.dataset.time);
    }
    dragPayload = null;
  });

  document.body.addEventListener("dblclick", (event) => {
    if (event.target.closest("[data-op-node-id], [data-op-due-id]")) return;
    const taskCard = event.target.closest("[data-task-card]");
    if (taskCard) openOpsTaskDetail(taskCard.dataset.opTaskId);
  });

  document.body.addEventListener("blur", (event) => {
    if (event.target.matches("[contenteditable='true']")) commitEditable(event.target);
  }, true);

  document.body.addEventListener("keydown", (event) => {
    if (event.target.matches("[contenteditable='true']") && event.key === "Enter") {
      event.preventDefault();
      event.target.blur();
    }
  });

  $("#addReviewAction").addEventListener("click", () => {
    const text = prompt("请输入本周复盘动作");
    if (!text) return;
    const review = getWeeklyReviewRecord(reviewWeekStart);
    review.review_summary.next_actions = [review.review_summary.next_actions, text].filter(Boolean).join("\n");
    review.updated_at = toLocalMinuteString(new Date());
    render();
  });
}

fillHostOptions();
bindEvents();
render();
initCloudSync();
