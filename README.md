# World Bank Pension Fund Due Diligence Platform — PROTOTYPE

> ⚠ **PROTOTYPE · SIMULATION · FOR DEMO PURPOSES ONLY · NOT AN OFFICIAL WORLD BANK PRODUCT**
>
> This is a demonstration prototype. All fund data is illustrative — derived from public
> filings (Form ADV, 10-K, annual reports) and synthesized for demonstration. This is not
> investment advice and is not affiliated with the named funds.

A multi-agent due diligence platform built for the World Bank Group Staff Retirement Plan
& Trust (SRP). Designed to set the global standard for pension fund manager due diligence.

## What's in this repo

### Interactive simulated website (13 pages)
- `index.html` — Dashboard (KPIs, risk heat map, live agent activity)
- `pipeline.html` — DD pipeline across all active managers
- `fund-bridgewater.html` — Hedge fund (Bridgewater Associates · Pure Alpha)
- `fund-carlyle.html` — Private equity (The Carlyle Group · CP VIII)
- `fund-blackstone.html` — Real estate (Blackstone REIT / BREIT)
- `fund-fidelity.html` — Money manager (Fidelity Investments · multi-mandate)
- `agents.html` — Agent console: 10 agents, full system prompts, wiring diagram
- `risk.html` — Composite risk scoring & stress scenarios
- `documentation.html` — Immutable audit trail & evidence vault
- `governance.html` — Investment Committee & Four-Eyes governance gates
- `monitoring.html` — Continuous post-investment surveillance
- `standards.html` — Standards library & proposed "Ten Pillars" global standard
- `roadmap.html` — 24-month implementation plan

### 30-minute demo deck
- `WB_Pension_DD_Demo.pptx` — 14-slide PowerPoint for live presentation

## Architecture

One **Orchestrator Agent** (Claude Opus 4.6) coordinates **9 specialized sub-agents**:

| Agent | Model | Domain |
|-------|-------|--------|
| Intake | Sonnet 4.6 | DDQ, KYC, scoping |
| Financial DD | Opus 4.6 | Returns, fees, audit |
| Operational DD | Sonnet 4.6 | SOC, custody, BCP |
| Legal & Compliance | Sonnet 4.6 | Sanctions, litigation |
| ESG & Climate | Sonnet 4.6 | TCFD, NGFS, UN PRI |
| Risk | Opus 4.6 | VaR, stress, NGFS |
| Governance | Sonnet 4.6 | Board, conflicts, IPS |
| Liquidity | Sonnet 4.6 | Gates, stress, cash |
| Documentation | Haiku 4.5 | Evidence, audit trail |
| **QA / Review** | Opus 4.6 | **Four-Eyes principle (hard gate)** |

## Running the website

It's pure static HTML/CSS/JS — open `index.html` directly in a browser, or:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Standards referenced

IOPS · OECD Core Principles · ILPA Principles 3.0 · ILPA DDQ · UN PRI · TCFD/IFRS S2 ·
NGFS Scenarios · SFDR · EDCI · GRESB · FATF · OFAC/UN/EU/UK sanctions · SOC 1/2 (SSAE 18) ·
ISO 27001:2022 · NIST CSF 2.0 · World Bank Group Procurement Framework

## Disclaimer

All data shown is illustrative and synthesized from public filings. Not investment advice.
Not affiliated with Bridgewater Associates, The Carlyle Group, Blackstone, BREIT, or
Fidelity Investments. Not an official World Bank Group system or product.
