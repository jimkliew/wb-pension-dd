// World Bank Pension Fund DD Platform — 30-min Demo Deck
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.3 x 7.5
pres.title = "World Bank Pension Fund DD Platform — Prototype";
pres.author = "Jim Liew";
pres.company = "World Bank Group (Prototype)";

// Brand colors
const C = {
  navy: "002244",
  blue: "0A5FA0",
  blueLight: "009FDA",
  gold: "FDB913",
  white: "FFFFFF",
  lightBg: "F1F5FA",
  gray: "6B7280",
  grayLight: "E5E9F0",
  red: "E31A1A",
  green: "2E7D32",
  orange: "F57C00",
  ice: "DCEFFA",
  purple: "6A1B9A"
};

const SLIDE_W = 13.3;
const SLIDE_H = 7.5;

// Helper: prototype watermark band
function addWatermark(slide) {
  // Top band - prototype warning
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: SLIDE_W, h: 0.22,
    fill: { color: "000000" }, line: { color: "000000" }
  });
  slide.addText("⚠  PROTOTYPE  ·  SIMULATION  ·  FOR DEMO PURPOSES ONLY  ·  NOT AN OFFICIAL WORLD BANK SYSTEM  ·  ⚠", {
    x: 0, y: 0, w: SLIDE_W, h: 0.22,
    fontSize: 9, color: C.gold, bold: true, align: "center", valign: "middle",
    fontFace: "Calibri", charSpacing: 2
  });
  // Bottom slide # / footer
  slide.addText("World Bank Pension Fund DD Platform · Prototype · May 2026", {
    x: 0.4, y: SLIDE_H - 0.32, w: 9, h: 0.25,
    fontSize: 9, color: C.gray, fontFace: "Calibri"
  });
}

// Helper: standard title bar
function addTitle(slide, title, subtitle) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0.22, w: SLIDE_W, h: 0.72,
    fill: { color: C.navy }, line: { color: C.navy }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0.94, w: SLIDE_W, h: 0.05,
    fill: { color: C.blueLight }, line: { color: C.blueLight }
  });
  slide.addText(title, {
    x: 0.4, y: 0.27, w: 10.5, h: 0.4,
    fontSize: 22, bold: true, color: C.white, fontFace: "Calibri"
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.4, y: 0.62, w: 10.5, h: 0.32,
      fontSize: 12, color: C.gold, fontFace: "Calibri"
    });
  }
  // WB mini-mark in top right
  slide.addShape(pres.shapes.OVAL, {
    x: 12.6, y: 0.32, w: 0.55, h: 0.55,
    fill: { color: C.white }, line: { color: C.gold, width: 1.5 }
  });
  slide.addText("WBG", {
    x: 12.6, y: 0.38, w: 0.55, h: 0.42,
    fontSize: 10, bold: true, color: C.navy, align: "center", valign: "middle", fontFace: "Calibri"
  });
}

// =====================================================
// SLIDE 1 — Title
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.navy };
  // Top watermark band - lighter on title
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: SLIDE_W, h: 0.22, fill: { color: "000000" } });
  s.addText("⚠  PROTOTYPE  ·  SIMULATION  ·  FOR DEMO PURPOSES ONLY  ⚠", {
    x: 0, y: 0, w: SLIDE_W, h: 0.22,
    fontSize: 10, color: C.gold, bold: true, align: "center", valign: "middle", charSpacing: 2
  });

  // Big WB mark
  s.addShape(pres.shapes.OVAL, {
    x: 1.0, y: 1.6, w: 1.6, h: 1.6,
    fill: { color: C.white }, line: { color: C.gold, width: 3 }
  });
  s.addText("WBG", {
    x: 1.0, y: 1.6, w: 1.6, h: 1.6,
    fontSize: 32, bold: true, color: C.navy, align: "center", valign: "middle"
  });

  s.addText("THE WORLD BANK GROUP", {
    x: 3.0, y: 1.7, w: 9.5, h: 0.4,
    fontSize: 14, bold: true, color: C.gold, charSpacing: 4
  });
  s.addText("Pension Fund Due Diligence Platform", {
    x: 3.0, y: 2.1, w: 9.5, h: 0.9,
    fontSize: 36, bold: true, color: C.white
  });
  s.addText("Multi-Agent Due Diligence for the Highest Standard of Pension Governance", {
    x: 3.0, y: 3.0, w: 9.5, h: 0.5,
    fontSize: 16, color: C.blueLight, italic: true
  });

  // Divider
  s.addShape(pres.shapes.RECTANGLE, {
    x: 1.0, y: 4.4, w: 11.3, h: 0.04,
    fill: { color: C.gold }, line: { color: C.gold }
  });

  s.addText("30-Minute Live Demo · Treasury & Pensions Department", {
    x: 1.0, y: 4.6, w: 11.3, h: 0.4,
    fontSize: 16, color: C.white
  });
  s.addText("May 2026 · Prepared by: Jim Liew", {
    x: 1.0, y: 5.0, w: 11.3, h: 0.4,
    fontSize: 13, color: C.grayLight
  });

  // Bottom yellow alert band
  s.addShape(pres.shapes.RECTANGLE, {
    x: 1.0, y: 6.4, w: 11.3, h: 0.55,
    fill: { color: C.gold }, line: { color: C.gold }
  });
  s.addText("PROTOTYPE · SIMULATION · NOT AN OFFICIAL WORLD BANK PRODUCT · ALL FUND DATA IS ILLUSTRATIVE", {
    x: 1.0, y: 6.4, w: 11.3, h: 0.55,
    fontSize: 11, bold: true, color: "000000", align: "center", valign: "middle", charSpacing: 2
  });
}

// =====================================================
// SLIDE 2 — Agenda
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addWatermark(s);
  addTitle(s, "Agenda — 30 Minutes", "Live demo + roadmap. Stop me anytime.");

  const items = [
    { mins: "5 min", title: "The Problem", desc: "Why pension DD is broken today and what the WB Group needs to lead." },
    { mins: "5 min", title: "The Solution", desc: "An agent-driven DD platform purpose-built for pension governance." },
    { mins: "10 min", title: "Live Demo", desc: "Walk through the prototype — dashboard, agents, fund workspaces, IC flow." },
    { mins: "5 min", title: "Architecture &amp; Agent Prompts", desc: "How it's wired together and how each agent reasons." },
    { mins: "5 min", title: "Implementation Path", desc: "From prototype to WB production, then to global standard." }
  ];

  let y = 1.4;
  items.forEach((item, i) => {
    // Number circle
    s.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y, w: 0.7, h: 0.7,
      fill: { color: C.gold }, line: { color: C.navy, width: 1.5 }
    });
    s.addText(String(i + 1), {
      x: 0.7, y: y, w: 0.7, h: 0.7,
      fontSize: 22, bold: true, color: C.navy, align: "center", valign: "middle"
    });
    // Mins
    s.addText(item.mins, {
      x: 1.6, y: y + 0.05, w: 1.2, h: 0.3,
      fontSize: 11, bold: true, color: C.blueLight, charSpacing: 2
    });
    // Title
    s.addText(item.title, {
      x: 1.6, y: y + 0.3, w: 11, h: 0.4,
      fontSize: 18, bold: true, color: C.navy
    });
    // Desc
    s.addText(item.desc, {
      x: 1.6, y: y + 0.65, w: 11, h: 0.3,
      fontSize: 12, color: C.gray
    });
    y += 1.15;
  });
}

// =====================================================
// SLIDE 3 — The Problem
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.lightBg };
  addWatermark(s);
  addTitle(s, "The Problem — Pension DD Today", "Slow, inconsistent, and hard to audit at the scale pensions require.");

  const probs = [
    { stat: "50+ days", lbl: "Median manager DD cycle for institutional plans" },
    { stat: "23 disciplines", lbl: "Required for full DD — financial, ops, legal, ESG, climate, governance, liquidity, risk…" },
    { stat: "$50T+", lbl: "Global pension assets, with most lacking a unified DD standard" },
    { stat: "Fragmented", lbl: "Documentation: PDFs, spreadsheets, email; no chain-of-custody" }
  ];

  let x = 0.5;
  probs.forEach(p => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.4, w: 3.0, h: 2.4,
      fill: { color: C.white },
      line: { color: C.grayLight, width: 1 },
      shadow: { type: "outer", blur: 6, offset: 2, angle: 90, color: "000000", opacity: 0.08 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.4, w: 3.0, h: 0.08,
      fill: { color: C.red }, line: { color: C.red }
    });
    s.addText(p.stat, {
      x: x + 0.15, y: 1.7, w: 2.7, h: 0.9,
      fontSize: 32, bold: true, color: C.navy
    });
    s.addText(p.lbl, {
      x: x + 0.15, y: 2.7, w: 2.7, h: 1.0,
      fontSize: 12, color: C.gray
    });
    x += 3.2;
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.3, w: 12.3, h: 2.3,
    fill: { color: C.navy }, line: { color: C.navy }
  });
  s.addText("And it's about to get harder.", {
    x: 0.8, y: 4.4, w: 12, h: 0.4,
    fontSize: 16, bold: true, color: C.gold
  });
  const trends = [
    "Climate stress now mandatory in IOPS and OECD frameworks (NGFS scenarios, TCFD/IFRS S2)",
    "Sanctions complexity: OFAC, UN, EU, UK lists update weekly — manual screening doesn't scale",
    "Private markets opacity: alts now ~25% of pension allocations vs ~5% in 2000",
    "Regulatory scrutiny of fiduciary process — every claim must be evidenced and audit-ready"
  ];
  s.addText(trends.map(t => ({ text: t, options: { bullet: true, breakLine: true } })), {
    x: 0.8, y: 4.85, w: 12, h: 1.7,
    fontSize: 13, color: C.white, paraSpaceAfter: 4
  });
}

// =====================================================
// SLIDE 4 — The Solution
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addWatermark(s);
  addTitle(s, "The Solution", "Multi-agent due diligence: ten specialized agents, governed by a single orchestrator, audited end-to-end.");

  // Left side - big stat
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.3, w: 4.5, h: 5.6,
    fill: { color: C.navy }, line: { color: C.navy }
  });
  s.addText("78% faster", {
    x: 0.6, y: 1.6, w: 4.2, h: 1.0,
    fontSize: 44, bold: true, color: C.gold
  });
  s.addText("DD cycle reduced from ~50 days to ~11 days. With higher quality and full citation-grade evidence.", {
    x: 0.6, y: 2.7, w: 4.2, h: 1.5,
    fontSize: 14, color: C.white
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.3, w: 4.2, h: 0.04,
    fill: { color: C.gold }, line: { color: C.gold }
  });

  s.addText([
    { text: "10", options: { bold: true, fontSize: 24, color: C.gold } },
    { text: "  Specialist Agents", options: { fontSize: 14, color: C.white } }
  ], { x: 0.6, y: 4.5, w: 4.2, h: 0.5 });

  s.addText([
    { text: "1", options: { bold: true, fontSize: 24, color: C.gold } },
    { text: "  Orchestrator + Four-Eyes QA", options: { fontSize: 14, color: C.white } }
  ], { x: 0.6, y: 5.0, w: 4.2, h: 0.5 });

  s.addText([
    { text: "100%", options: { bold: true, fontSize: 24, color: C.gold } },
    { text: "  Evidence-Cited", options: { fontSize: 14, color: C.white } }
  ], { x: 0.6, y: 5.5, w: 4.2, h: 0.5 });

  s.addText([
    { text: "25 yr", options: { bold: true, fontSize: 24, color: C.gold } },
    { text: "  Immutable Audit Trail", options: { fontSize: 14, color: C.white } }
  ], { x: 0.6, y: 6.0, w: 4.2, h: 0.5 });

  // Right side - pillars
  const pillars = [
    { t: "Specialized Agents", d: "Financial, Operational, Legal & Compliance, ESG, Risk, Liquidity, Governance, Documentation, QA — each with its own model, prompt, and tools." },
    { t: "World Bank Standards", d: "Built around IOPS, OECD, ILPA, UN PRI, TCFD, NGFS, FATF, ISO 27001, SOC 1/2." },
    { t: "Evidence-Native", d: "Every claim cites a primary source. Every document SHA-256 hashed and chained in an immutable audit log." },
    { t: "Four-Eyes Governance", d: "Independent QA Agent re-verifies every fact and metric before any IC recommendation." },
    { t: "Continuous Monitoring", d: "Quarterly auto-refresh, real-time alerts (sanctions, adverse media, regulatory)." }
  ];

  let y = 1.3;
  pillars.forEach(p => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: 5.2, y: y, w: 7.7, h: 1.05,
      fill: { color: C.lightBg }, line: { color: C.grayLight, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 5.2, y: y, w: 0.08, h: 1.05,
      fill: { color: C.gold }, line: { color: C.gold }
    });
    s.addText(p.t, {
      x: 5.4, y: y + 0.1, w: 7.4, h: 0.36,
      fontSize: 14, bold: true, color: C.navy
    });
    s.addText(p.d, {
      x: 5.4, y: y + 0.45, w: 7.4, h: 0.55,
      fontSize: 11, color: C.gray
    });
    y += 1.15;
  });
}

// =====================================================
// SLIDE 5 — Demo Map (Live demo navigation guide)
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addWatermark(s);
  addTitle(s, "Live Demo Walkthrough", "Open the prototype: index.html. We will follow this 10-minute path.");

  const steps = [
    { n: "1", page: "Dashboard", url: "index.html", what: "Pipeline KPIs · risk heat map · live agent activity · governance cadence", time: "1 min" },
    { n: "2", page: "DD Pipeline", url: "pipeline.html", what: "Four real funds in DD: Bridgewater · Carlyle · BREIT · Fidelity", time: "1 min" },
    { n: "3", page: "Bridgewater", url: "fund-bridgewater.html", what: "Hedge fund profile · Pure Alpha returns · Sharpe 0.71 · 2 amber flags", time: "2 min" },
    { n: "4", page: "Agent Console", url: "agents.html", what: "All 10 agents · system prompts · live activity stream · wiring diagram", time: "2 min" },
    { n: "5", page: "BREIT", url: "fund-blackstone.html", what: "Real estate · 3 critical flags · redemption-gate analysis", time: "2 min" },
    { n: "6", page: "Risk Scoring", url: "risk.html", what: "Composite scoring methodology · stress scenarios · red-flag inventory", time: "1 min" },
    { n: "7", page: "Governance / IC", url: "governance.html", what: "IC calendar · Four-Eyes gates · dissent registry", time: "1 min" }
  ];

  let y = 1.3;
  steps.forEach(step => {
    s.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y, w: 0.65, h: 0.65,
      fill: { color: C.navy }, line: { color: C.gold, width: 1.5 }
    });
    s.addText(step.n, {
      x: 0.5, y: y, w: 0.65, h: 0.65,
      fontSize: 18, bold: true, color: C.gold, align: "center", valign: "middle"
    });
    s.addText(step.page, {
      x: 1.3, y: y + 0.0, w: 3.5, h: 0.32,
      fontSize: 14, bold: true, color: C.navy
    });
    s.addText(step.url, {
      x: 1.3, y: y + 0.32, w: 3.5, h: 0.3,
      fontSize: 10, color: C.blue, italic: true, fontFace: "Consolas"
    });
    s.addText(step.what, {
      x: 4.9, y: y + 0.05, w: 7.0, h: 0.6,
      fontSize: 11, color: C.gray
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 12.0, y: y + 0.1, w: 0.85, h: 0.45,
      fill: { color: C.gold }, line: { color: C.gold }
    });
    s.addText(step.time, {
      x: 12.0, y: y + 0.1, w: 0.85, h: 0.45,
      fontSize: 11, bold: true, color: C.navy, align: "center", valign: "middle"
    });
    y += 0.78;
  });
}

// =====================================================
// SLIDE 6 — The Four Funds
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addWatermark(s);
  addTitle(s, "The Demo Set — Four Real Managers", "Public-data profiles synthesized into a live DD scenario for the WB Staff Retirement Plan.");

  const funds = [
    { name: "Bridgewater\nAssociates", type: "HEDGE FUND", aum: "$112.5B", score: "82", flags: "2", color: C.green, hq: "Westport, CT · Founded 1975" },
    { name: "The Carlyle\nGroup", type: "PRIVATE EQUITY", aum: "$447B", score: "79", flags: "1", color: C.green, hq: "Washington, DC · Founded 1987 · NASDAQ:CG" },
    { name: "Blackstone\nREIT (BREIT)", type: "REAL ESTATE", aum: "$58B NAV", score: "71", flags: "3", color: C.orange, hq: "Sponsor: NYSE:BX · Launched 2017" },
    { name: "Fidelity\nInvestments", type: "MONEY MANAGER", aum: "$5.3T", score: "88", flags: "1", color: C.green, hq: "Boston, MA · Founded 1946 · FMR LLC" }
  ];

  let x = 0.4;
  const w = 3.05;
  funds.forEach(f => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.3, w: w, h: 5.6,
      fill: { color: C.white },
      line: { color: C.grayLight, width: 1 },
      shadow: { type: "outer", blur: 6, offset: 2, angle: 90, color: "000000", opacity: 0.08 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.3, w: w, h: 0.5,
      fill: { color: C.navy }, line: { color: C.navy }
    });
    s.addText(f.type, {
      x: x, y: 1.3, w: w, h: 0.5,
      fontSize: 10, bold: true, color: C.gold, align: "center", valign: "middle", charSpacing: 2
    });
    s.addText(f.name, {
      x: x + 0.15, y: 1.95, w: w - 0.3, h: 1.0,
      fontSize: 18, bold: true, color: C.navy, align: "center"
    });
    s.addText(f.hq, {
      x: x + 0.15, y: 2.95, w: w - 0.3, h: 0.4,
      fontSize: 10, color: C.gray, align: "center", italic: true
    });
    // AUM
    s.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.3, y: 3.5, w: w - 0.6, h: 0.04,
      fill: { color: C.gold }, line: { color: C.gold }
    });
    s.addText("AUM", {
      x: x, y: 3.6, w: w, h: 0.3,
      fontSize: 10, color: C.gray, align: "center", charSpacing: 1
    });
    s.addText(f.aum, {
      x: x, y: 3.85, w: w, h: 0.6,
      fontSize: 24, bold: true, color: C.navy, align: "center"
    });
    // Score circle
    s.addShape(pres.shapes.OVAL, {
      x: x + (w / 2) - 0.7, y: 4.7, w: 1.4, h: 1.4,
      fill: { color: C.lightBg }, line: { color: f.color, width: 4 }
    });
    s.addText(f.score, {
      x: x + (w / 2) - 0.7, y: 4.75, w: 1.4, h: 0.95,
      fontSize: 32, bold: true, color: f.color, align: "center", valign: "middle"
    });
    s.addText("DD Score", {
      x: x + (w / 2) - 0.7, y: 5.7, w: 1.4, h: 0.3,
      fontSize: 9, color: C.gray, align: "center", charSpacing: 1
    });
    // Flags
    s.addText(f.flags + " flags", {
      x: x, y: 6.3, w: w, h: 0.3,
      fontSize: 11, bold: true, color: C.orange, align: "center"
    });
    x += w + 0.1;
  });
}

// =====================================================
// SLIDE 7 — Architecture wiring
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addWatermark(s);
  addTitle(s, "How It's Wired", "Orchestrator coordinates 9 specialized sub-agents + 1 QA Agent. All actions logged. Five human gates.");

  // Center: orchestrator
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 1.4, w: 2.5, h: 1.0,
    fill: { color: C.gold }, line: { color: C.navy, width: 2 }
  });
  s.addText("ORCHESTRATOR", { x: 5.4, y: 1.4, w: 2.5, h: 0.4, fontSize: 13, bold: true, color: C.navy, align: "center", valign: "middle" });
  s.addText("Plan · Route · Aggregate", { x: 5.4, y: 1.78, w: 2.5, h: 0.32, fontSize: 10, color: C.navy, align: "center", italic: true });
  s.addText("Claude Opus 4.6", { x: 5.4, y: 2.05, w: 2.5, h: 0.3, fontSize: 9, color: C.navy, align: "center" });

  // User
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.5, w: 2.0, h: 0.8,
    fill: { color: C.navy }, line: { color: C.navy }
  });
  s.addText("Investment Officer", { x: 0.4, y: 1.5, w: 2.0, h: 0.4, fontSize: 11, bold: true, color: C.white, align: "center", valign: "middle" });
  s.addText("DD scope · documents", { x: 0.4, y: 1.85, w: 2.0, h: 0.4, fontSize: 9, color: C.gold, align: "center", italic: true });

  s.addShape(pres.shapes.LINE, { x: 2.4, y: 1.9, w: 3.0, h: 0, line: { color: C.blue, width: 2, endArrowType: "triangle" } });

  // Tools right of orchestrator
  const tools = [
    { y: 1.4, t: "Document Vault (RAG)" },
    { y: 1.85, t: "Plan / Memory" },
    { y: 2.3, t: "Audit Log (immutable)" }
  ];
  tools.forEach(tool => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: 8.3, y: tool.y, w: 4.6, h: 0.4,
      fill: { color: C.lightBg }, line: { color: C.blueLight, width: 1 }
    });
    s.addText(tool.t, { x: 8.3, y: tool.y, w: 4.6, h: 0.4, fontSize: 10, color: C.navy, align: "center", valign: "middle", bold: true });
  });

  // Sub-agents in two rows of 5
  const subAgentsRow1 = [
    { name: "Intake", color: C.blue },
    { name: "Financial DD", color: C.blue },
    { name: "Operational DD", color: C.blue },
    { name: "Legal & Comp.", color: C.blue },
    { name: "ESG & Climate", color: C.blue }
  ];
  const subAgentsRow2 = [
    { name: "Risk", color: C.blue },
    { name: "Governance", color: C.blue },
    { name: "Liquidity", color: C.blue },
    { name: "Documentation", color: C.blue },
    { name: "QA / Review", color: C.purple }
  ];

  let agentX = 0.4;
  subAgentsRow1.forEach(a => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: agentX, y: 3.6, w: 2.45, h: 0.85,
      fill: { color: a.color }, line: { color: a.color }
    });
    s.addText(a.name, { x: agentX, y: 3.6, w: 2.45, h: 0.85, fontSize: 12, bold: true, color: C.white, align: "center", valign: "middle" });
    agentX += 2.55;
  });
  agentX = 0.4;
  subAgentsRow2.forEach(a => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: agentX, y: 4.55, w: 2.45, h: 0.85,
      fill: { color: a.color }, line: { color: a.color }
    });
    s.addText(a.name, { x: agentX, y: 4.55, w: 2.45, h: 0.85, fontSize: 12, bold: true, color: C.white, align: "center", valign: "middle" });
    agentX += 2.55;
  });

  // Lines from orchestrator down to agents
  for (let i = 0; i < 5; i++) {
    s.addShape(pres.shapes.LINE, {
      x: 6.65, y: 2.4, w: (0.4 + 2.45 / 2 + i * 2.55) - 6.65, h: 1.2,
      line: { color: C.gold, width: 1, endArrowType: "triangle" }
    });
  }

  // Output bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 5.7, w: 12.5, h: 1.2,
    fill: { color: C.navy }, line: { color: C.navy }
  });
  s.addText("DELIVERABLES", { x: 0.4, y: 5.78, w: 12.5, h: 0.32, fontSize: 12, bold: true, color: C.gold, align: "center", charSpacing: 3 });
  s.addText("DD Memo  ·  Composite Risk Score  ·  Red-Flag Log  ·  IC Pre-Read  ·  Side-Letter Issue Tracker", {
    x: 0.4, y: 6.15, w: 12.5, h: 0.4, fontSize: 14, color: C.white, align: "center"
  });
  s.addText("Generated as PDF/DOCX · Cryptographically signed · Logged to immutable audit trail", {
    x: 0.4, y: 6.55, w: 12.5, h: 0.32, fontSize: 11, color: C.grayLight, align: "center", italic: true
  });
}

// =====================================================
// SLIDE 8 — Agent prompts (1 of 2)
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addWatermark(s);
  addTitle(s, "Agent Prompts — A Look Inside (1/2)", "Each agent has a constrained, role-specific system prompt. Here are three of them.");

  const prompts = [
    {
      title: "Orchestrator",
      model: "Opus 4.6",
      text: "You are the Orchestrator for the World Bank Pension DD Platform.\n\nGUARDRAILS:\n• NEVER fabricate. If a fact has no cited source, state \"evidence not found\".\n• ALWAYS log every dispatch to the audit trail.\n• Apply the Four-Eyes Principle — defer to QA Agent before finalizing.\n• Apply IOPS, OECD, ILPA where applicable.\n\nOUTPUT: A single Markdown DD memo with: Summary · Score · Findings · Red Flags · IC Recommendation."
    },
    {
      title: "Legal & Compliance",
      model: "Sonnet 4.6",
      text: "You are the Legal & Compliance Agent.\n\nMANDATORY CHECKS for every named principal:\n1. OFAC SDN  2. UN sanctions  3. EU sanctions  4. UK HMT\n5. PEP screening (5-yr adverse media)\n6. Form ADV Item 11 (disciplinary)\n7. Court-record search\n\nESCALATE IMMEDIATELY for any sanctions match, felony, pending SEC enforcement, or material adverse media.\n\nDefault decision is \"no go\" if any zero-tolerance flag triggers."
    },
    {
      title: "QA / Review (Four-Eyes)",
      model: "Opus 4.6",
      text: "You are the QA / Review Agent. You DO NOT do original analysis.\n\nYOU MUST:\n1. Verify every cited fact against the underlying document.\n2. Re-derive every quantitative metric independently.\n3. Stress-test every assumption.\n4. Run the \"Top 5 Reasons This Goes Wrong\" exercise.\n\nPASS only when citations verified, metrics reconciled to ≤ 1bp / 0.5%, and assumptions documented.\n\nYour sign-off is a hard governance gate."
    }
  ];

  let x = 0.4;
  const w = 4.15;
  prompts.forEach(p => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.3, w: w, h: 5.6,
      fill: { color: C.lightBg }, line: { color: C.grayLight, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.3, w: w, h: 0.6,
      fill: { color: C.navy }, line: { color: C.navy }
    });
    s.addText(p.title, {
      x: x + 0.15, y: 1.3, w: w - 0.3, h: 0.35,
      fontSize: 14, bold: true, color: C.white, valign: "middle"
    });
    s.addText(p.model, {
      x: x + 0.15, y: 1.6, w: w - 0.3, h: 0.28,
      fontSize: 10, color: C.gold, italic: true
    });
    s.addText(p.text, {
      x: x + 0.2, y: 2.0, w: w - 0.4, h: 4.85,
      fontSize: 11, color: C.navy, fontFace: "Calibri", paraSpaceAfter: 3, valign: "top"
    });
    x += w + 0.1;
  });
}

// =====================================================
// SLIDE 9 — Agent prompts (2 of 2) + tools
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addWatermark(s);
  addTitle(s, "Agent Prompts — A Look Inside (2/2)", "Two more agents and the standard tool/data wiring used across all of them.");

  const prompts = [
    {
      title: "Risk Agent",
      model: "Opus 4.6",
      text: "You are the Risk Agent.\n\nFOR EVERY MANDATE:\n1. Market risk: VaR(95%, 99%, 1d) · realized vol · max drawdown\n2. Concentration: top-10 · top sector · top issuer\n3. Liquidity: days-to-liquidate at 25% ADV\n4. Counterparty: aggregated PB/broker exposure\n5. Stress: 2008 GFC · 2020 COVID · 2022 rates · 3 NGFS climate paths\n\nScore each 1–5. Flag any score ≤ 2.\n\nNever substitute model for stated mandate constraints — escalate breaches."
    },
    {
      title: "ESG & Climate",
      model: "Sonnet 4.6",
      text: "You are the ESG Agent.\n\nDELIVERABLES:\n• Framework alignment (UN PRI, TCFD, EDCI, GRESB, SFDR)\n• Climate stress under NGFS Net Zero / Delayed / Hot House\n• Stewardship: voting + engagement\n• Coverage: % portfolio with Scope 1+2+3 emissions\n\nWORLD BANK STANDARDS:\n• Scope 1+2 ≥ 80% by 2026\n• Scope 3 ≥ 60% by 2026\n• Climate transition plan required for high-emitting sectors"
    }
  ];

  let x = 0.4;
  const w = 4.15;
  prompts.forEach(p => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.3, w: w, h: 5.6,
      fill: { color: C.lightBg }, line: { color: C.grayLight, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.3, w: w, h: 0.6,
      fill: { color: C.navy }, line: { color: C.navy }
    });
    s.addText(p.title, {
      x: x + 0.15, y: 1.3, w: w - 0.3, h: 0.35,
      fontSize: 14, bold: true, color: C.white, valign: "middle"
    });
    s.addText(p.model, {
      x: x + 0.15, y: 1.6, w: w - 0.3, h: 0.28,
      fontSize: 10, color: C.gold, italic: true
    });
    s.addText(p.text, {
      x: x + 0.2, y: 2.0, w: w - 0.4, h: 4.85,
      fontSize: 11, color: C.navy, fontFace: "Calibri", paraSpaceAfter: 3, valign: "top"
    });
    x += w + 0.1;
  });

  // Tools box on right
  s.addShape(pres.shapes.RECTANGLE, {
    x: 8.9, y: 1.3, w: 4.0, h: 5.6,
    fill: { color: C.navy }, line: { color: C.navy }
  });
  s.addText("TOOLS WIRED TO AGENTS", {
    x: 9.05, y: 1.45, w: 3.8, h: 0.4,
    fontSize: 12, bold: true, color: C.gold, charSpacing: 2
  });
  const tools = [
    "SEC EDGAR (Form ADV, 10-K, 10-Q)",
    "OFAC SDN · UN · EU · UK lists",
    "LexisNexis Bridger / World-Check",
    "Cambridge Associates · HFRI · NCREIF",
    "Bloomberg · MSCI · Sustainalytics",
    "UN PRI · GRESB · EDCI · TCFD",
    "NGFS climate scenarios v5",
    "BarraOne / Axioma analytics",
    "Document Vault (vector RAG)",
    "Audit Log (Merkle-chained)",
    "Human-in-Loop escalation"
  ];
  let ty = 1.95;
  tools.forEach(t => {
    s.addText("● " + t, {
      x: 9.05, y: ty, w: 3.8, h: 0.32,
      fontSize: 10, color: C.white
    });
    ty += 0.42;
  });
}

// =====================================================
// SLIDE 10 — Governance & Standards
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addWatermark(s);
  addTitle(s, "Governance & Standards", "Built around the highest pension fund frameworks. Designed to become the global standard.");

  // Left: Framework grid
  s.addText("Frameworks Operationalized", {
    x: 0.4, y: 1.3, w: 6.4, h: 0.4,
    fontSize: 14, bold: true, color: C.navy, charSpacing: 1
  });
  const frameworks = [
    ["IOPS Principles", "Pension supervision"],
    ["OECD Core Principles", "Pension regulation"],
    ["ILPA Principles 3.0", "LP/GP alignment"],
    ["ILPA DDQ", "Standardized DDQ"],
    ["UN PRI", "Responsible investment"],
    ["TCFD / IFRS S2", "Climate disclosure"],
    ["NGFS Scenarios v5", "Climate stress"],
    ["SFDR", "EU sustainability"],
    ["EDCI / GRESB", "Private markets ESG"],
    ["FATF / OFAC", "AML / sanctions"],
    ["SOC 1/2 / SSAE 18", "Service-org controls"],
    ["ISO 27001 / NIST CSF", "Cybersecurity"]
  ];
  let fy = 1.75;
  let fx = 0.4;
  let col = 0;
  frameworks.forEach(f => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: fx, y: fy, w: 3.05, h: 0.7,
      fill: { color: C.lightBg }, line: { color: C.grayLight, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: fx, y: fy, w: 0.05, h: 0.7,
      fill: { color: C.gold }, line: { color: C.gold }
    });
    s.addText(f[0], {
      x: fx + 0.15, y: fy + 0.05, w: 2.85, h: 0.32,
      fontSize: 11, bold: true, color: C.navy
    });
    s.addText(f[1], {
      x: fx + 0.15, y: fy + 0.36, w: 2.85, h: 0.3,
      fontSize: 9, color: C.gray, italic: true
    });
    col++;
    if (col % 2 === 0) {
      fx = 0.4; fy += 0.8;
    } else {
      fx = 3.55;
    }
  });

  // Right: Ten Pillars
  s.addShape(pres.shapes.RECTANGLE, {
    x: 7.0, y: 1.3, w: 5.9, h: 5.6,
    fill: { color: C.navy }, line: { color: C.navy }
  });
  s.addText("THE TEN PILLARS", {
    x: 7.15, y: 1.45, w: 5.6, h: 0.36,
    fontSize: 13, bold: true, color: C.gold, charSpacing: 3
  });
  s.addText("Proposed World Bank Standard for Global Pension Funds", {
    x: 7.15, y: 1.82, w: 5.6, h: 0.3,
    fontSize: 10, color: C.white, italic: true
  });
  const pillars = [
    "1. Multi-Agent Independence (≥7 functions)",
    "2. Four-Eyes QA Principle (mandatory)",
    "3. Evidence-Based — every claim cited",
    "4. Immutable 25-yr Audit Trail",
    "5. Sanctions Zero-Tolerance",
    "6. Independent Valuation ≥ 90% of NAV",
    "7. Liquidity Stress at 200% historical",
    "8. Climate Stress Disclosure (NGFS, TCFD)",
    "9. Governance Documentation",
    "10. Continuous Monitoring (24/7)"
  ];
  let py = 2.25;
  pillars.forEach(p => {
    s.addText(p, {
      x: 7.25, y: py, w: 5.5, h: 0.4,
      fontSize: 11, color: C.white
    });
    py += 0.43;
  });
}

// =====================================================
// SLIDE 11 — Implementation Roadmap
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addWatermark(s);
  addTitle(s, "Implementation Roadmap", "From prototype to WB production to global standard — 24 months.");

  const phases = [
    { ph: "Phase 1", time: "Mo 0–3", title: "Discovery", desc: "Requirements · regulatory mapping · vendor short-list" },
    { ph: "Phase 2", time: "Mo 3–9", title: "Pilot — 3 GPs", desc: "End-to-end run · validate vs human DD · build connectors" },
    { ph: "Phase 3", time: "Mo 9–15", title: "Production", desc: "Full DD pipeline · ServiceNow · SSO · IC integration" },
    { ph: "Phase 4", time: "Mo 15–21", title: "Continuous Monitoring", desc: "23 GPs migrated · alert tuning · annual review automation" },
    { ph: "Phase 5", time: "Mo 21+", title: "Standard Adoption", desc: "IOPS / OECD WPPP endorsement · TA programs to client countries" }
  ];

  let px = 0.4;
  const pw = 2.50;
  phases.forEach((p, i) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: px, y: 1.4, w: pw, h: 3.1,
      fill: { color: C.navy }, line: { color: C.navy }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: px, y: 1.4, w: pw, h: 0.4,
      fill: { color: C.gold }, line: { color: C.gold }
    });
    s.addText(p.ph, {
      x: px, y: 1.4, w: pw, h: 0.4,
      fontSize: 12, bold: true, color: C.navy, align: "center", valign: "middle", charSpacing: 2
    });
    s.addText(p.time, {
      x: px, y: 1.85, w: pw, h: 0.3,
      fontSize: 11, color: C.gold, align: "center"
    });
    s.addText(p.title, {
      x: px, y: 2.2, w: pw, h: 0.6,
      fontSize: 14, bold: true, color: C.white, align: "center"
    });
    s.addText(p.desc, {
      x: px + 0.1, y: 2.85, w: pw - 0.2, h: 1.5,
      fontSize: 10, color: C.grayLight, align: "center"
    });
    px += pw + 0.1;
  });

  // Bottom: cost & benefits
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.7, w: 6.25, h: 2.2,
    fill: { color: C.lightBg }, line: { color: C.grayLight, width: 1 }
  });
  s.addText("Indicative Investment", {
    x: 0.55, y: 4.8, w: 6, h: 0.35,
    fontSize: 13, bold: true, color: C.navy
  });
  s.addText([
    { text: "Year 1 (build):  ", options: { bold: true, fontSize: 11, color: C.navy } },
    { text: "$8.2M", options: { fontSize: 11, color: C.blue, bold: true, breakLine: true } },
    { text: "Year 2 (run):    ", options: { bold: true, fontSize: 11, color: C.navy } },
    { text: "$4.5M", options: { fontSize: 11, color: C.blue, bold: true, breakLine: true } },
    { text: "Cloud · LLM · data subscriptions · integrator · 3 FTE · security audits", options: { fontSize: 9, color: C.gray, italic: true } }
  ], { x: 0.55, y: 5.15, w: 6, h: 1.6 });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 6.85, y: 4.7, w: 6.05, h: 2.2,
    fill: { color: C.gold }, line: { color: C.gold }
  });
  s.addText("Expected Benefits", {
    x: 7.0, y: 4.8, w: 5.8, h: 0.35,
    fontSize: 13, bold: true, color: C.navy
  });
  s.addText([
    { text: "−78% cycle time", options: { fontSize: 11, color: C.navy, bold: true, breakLine: true } },
    { text: "3× more managers screened per FTE", options: { fontSize: 11, color: C.navy, bold: true, breakLine: true } },
    { text: "100% citation-grade evidence on every claim", options: { fontSize: 11, color: C.navy, bold: true, breakLine: true } },
    { text: "1 unified standard across all asset classes", options: { fontSize: 11, color: C.navy, bold: true } }
  ], { x: 7.0, y: 5.15, w: 5.8, h: 1.6 });
}

// =====================================================
// SLIDE 12 — Risks & Mitigations
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addWatermark(s);
  addTitle(s, "Risks &amp; Mitigations", "We've designed for the obvious failure modes.");

  const tableData = [
    [
      { text: "Risk", options: { bold: true, color: C.white, fill: { color: C.navy }, valign: "middle" } },
      { text: "Mitigation", options: { bold: true, color: C.white, fill: { color: C.navy }, valign: "middle" } }
    ],
    ["LLM hallucination / fabricated facts", "Mandatory citation guardrail in every prompt; QA Agent re-verifies; uncited claims rejected"],
    ["Data privacy / IP exposure", "Private VPC; no data leaves WB perimeter; encryption at rest and in transit; PII redaction"],
    ["Model drift / version risk", "Frozen model versions per release; A/B tested on historical DD memos; quarterly re-validation"],
    ["Over-reliance / automation bias", "5 human gates: sub-agent sign-off · QA · Legal · CIO · IC. Humans always own the decision."],
    ["Regulatory questioning of AI use", "Full audit log; transparent agent prompts; explainable outputs; supervisor sign-off retained"],
    ["Vendor lock-in", "Multi-model architecture; standardized prompt schema; portable evidence vault"]
  ];

  s.addTable(tableData, {
    x: 0.4, y: 1.4, w: 12.5, h: 5.0,
    colW: [4.0, 8.5],
    fontSize: 11, color: C.navy, valign: "middle",
    border: { type: "solid", pt: 0.5, color: C.grayLight },
    fill: { color: C.white }
  });
}

// =====================================================
// SLIDE 13 — Next Steps / Call to Action
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.navy };
  addWatermark(s);

  // White hero block
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.5, w: 12.5, h: 6.6,
    fill: { color: C.white }, line: { color: C.gold, width: 2 }
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.5, w: 12.5, h: 0.7,
    fill: { color: C.navy }, line: { color: C.navy }
  });
  s.addText("NEXT STEPS — FROM PROTOTYPE TO STANDARD", {
    x: 0.6, y: 0.5, w: 12.1, h: 0.7,
    fontSize: 18, bold: true, color: C.gold, valign: "middle", charSpacing: 3
  });

  // 3 next steps
  const steps = [
    { n: "1", title: "Approve a 90-day Discovery Sprint", desc: "Treasury + Pensions + Risk + IT. Validate scope, security, integration design.\nDeliverable: Business Requirements Document + Risk & Governance Charter." },
    { n: "2", title: "Pilot — 3 GPs in Q3 2026", desc: "Run platform end-to-end on 3 new commitments. Compare to human DD baseline.\nValidate at IC. Iterate. Build connector library." },
    { n: "3", title: "Production + Standard Push", desc: "Roll to full DD pipeline (Mo 9–15). Migrate 23 existing GPs to monitoring (Mo 15–21).\nThen: take to IOPS, OECD WPPP, IFSWF — propose adoption as global standard." }
  ];

  let y = 1.5;
  steps.forEach(step => {
    s.addShape(pres.shapes.OVAL, {
      x: 0.8, y: y, w: 0.8, h: 0.8,
      fill: { color: C.gold }, line: { color: C.navy, width: 2 }
    });
    s.addText(step.n, {
      x: 0.8, y: y, w: 0.8, h: 0.8,
      fontSize: 28, bold: true, color: C.navy, align: "center", valign: "middle"
    });
    s.addText(step.title, {
      x: 1.85, y: y + 0.05, w: 10.7, h: 0.4,
      fontSize: 16, bold: true, color: C.navy
    });
    s.addText(step.desc, {
      x: 1.85, y: y + 0.45, w: 10.7, h: 1.0,
      fontSize: 11, color: C.gray
    });
    y += 1.65;
  });

  // CTA
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 6.55, w: 12.5, h: 0.55,
    fill: { color: C.gold }, line: { color: C.gold }
  });
  s.addText("Make this the World Bank Standard for global pension fund due diligence.", {
    x: 0.4, y: 6.55, w: 12.5, h: 0.55,
    fontSize: 14, bold: true, color: C.navy, align: "center", valign: "middle"
  });
}

// =====================================================
// SLIDE 14 — Q&A / Thank You
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.navy };
  addWatermark(s);

  // Big WB
  s.addShape(pres.shapes.OVAL, {
    x: 5.85, y: 1.3, w: 1.6, h: 1.6,
    fill: { color: C.white }, line: { color: C.gold, width: 3 }
  });
  s.addText("WBG", {
    x: 5.85, y: 1.3, w: 1.6, h: 1.6,
    fontSize: 32, bold: true, color: C.navy, align: "center", valign: "middle"
  });

  s.addText("Thank you.", {
    x: 0.4, y: 3.2, w: 12.5, h: 1.0,
    fontSize: 56, bold: true, color: C.white, align: "center"
  });
  s.addText("Questions?", {
    x: 0.4, y: 4.2, w: 12.5, h: 0.7,
    fontSize: 28, color: C.gold, align: "center", italic: true
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.0, y: 5.0, w: 3.3, h: 0.04,
    fill: { color: C.gold }, line: { color: C.gold }
  });
  s.addText("Jim Liew · Senior Investment Officer (prototype)", {
    x: 0.4, y: 5.2, w: 12.5, h: 0.4,
    fontSize: 14, color: C.white, align: "center"
  });
  s.addText("jim@sokat.com", {
    x: 0.4, y: 5.6, w: 12.5, h: 0.4,
    fontSize: 12, color: C.blueLight, align: "center", italic: true
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 6.7, w: 12.5, h: 0.5,
    fill: { color: C.gold }, line: { color: C.gold }
  });
  s.addText("PROTOTYPE · SIMULATION · FOR DEMO PURPOSES ONLY · NOT AN OFFICIAL WORLD BANK PRODUCT", {
    x: 0.4, y: 6.7, w: 12.5, h: 0.5,
    fontSize: 11, bold: true, color: C.navy, align: "center", valign: "middle", charSpacing: 2
  });
}

// SAVE
pres.writeFile({ fileName: "WB_Pension_DD_Demo.pptx" }).then(name => {
  console.log("Saved: " + name);
});
