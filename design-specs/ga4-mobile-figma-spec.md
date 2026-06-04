# GA4 Mobile Companion — Figma Design Specification

## Overview

The GA4 Mobile Companion is the mobile-native counterpart to the GA4 Audit Dashboard web portal. The two products serve different users and different jobs-to-be-done. The web dashboard is the analyst's workbench: it supports detailed audit runs, client onboarding, and remediation planning. The mobile companion is the client's check-in tool: it answers one question — is my GA4 healthy today?

This distinction was not assumed during the design process. It emerged from a discovery question: if a client has two minutes on their phone between meetings, what is the single most valuable thing we can surface? The answer is not a miniaturised version of the web dashboard. It is a health score, the most critical finding, and a clear next action.

This specification records the Figma component architecture used to produce the mobile prototype prior to HTML implementation.

---

## Design Tokens

### Colours

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-base` | `#0f0f1a` | Screen background |
| `--bg-surface` | `#161625` | Cards, panels |
| `--bg-elevated` | `#1e1e32` | Bottom sheets, modals |
| `--border` | `#2a2a4a` | Dividers, card borders |
| `--accent` | `#f59e0b` | Primary actions, active states |
| `--accent-dim` | `rgba(245,159,11,0.15)` | Accent backgrounds |
| `--text-primary` | `#f0f0ff` | Body text, headings |
| `--text-secondary` | `#8888aa` | Labels, metadata |
| `--text-disabled` | `#44445a` | Disabled states |
| `--critical` | `#ef4444` | Critical severity |
| `--high` | `#f97316` | High severity |
| `--medium` | `#f59e0b` | Medium severity |
| `--success` | `#22c55e` | Success states, fixed items |

### Typography

Font family: Inter (Google Fonts)

| Scale | Size | Weight | Line height | Usage |
|-------|------|--------|-------------|-------|
| `text-xs` | 10px | 400 | 1.4 | Timestamps, micro labels |
| `text-sm` | 12px | 400 | 1.5 | Secondary text, badges |
| `text-base` | 14px | 400 | 1.6 | Body text, list items |
| `text-md` | 16px | 500 | 1.5 | Card titles |
| `text-lg` | 20px | 600 | 1.3 | Screen headings |
| `text-xl` | 24px | 700 | 1.2 | Score number, hero values |

### Spacing

Base unit: 4px

| Token | Value |
|-------|-------|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-10` | 40px |
| `space-12` | 48px |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 8px | Inputs, small badges |
| `radius-md` | 12px | Cards |
| `radius-lg` | 20px | Modals, bottom sheets |
| `radius-full` | 9999px | Pills, score ring |

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-card` | `0 2px 8px rgba(0,0,0,0.4)` | Cards on surface |
| `shadow-sheet` | `0 -4px 24px rgba(0,0,0,0.5)` | Bottom sheets |
| `shadow-modal` | `0 8px 32px rgba(0,0,0,0.6)` | Modals |

---

## Component Inventory

### Navigation

**BottomNav**
- Structure: 3 tab items in a horizontal bar
- Height: 60px
- Background: `--bg-base`
- Border-top: 1px `--border`
- Props: `activeTab` (dashboard | findings | settings)
- Each tab item: icon (24×24) + label (10px, 400)
- Default state: `--text-secondary` icon and label
- Active state: `--accent` icon and label
- Interaction: tap changes `activeTab`, updates `aria-current="page"`

### Cards

**MetricCard**
- Size: flexible width, 72px height
- Background: `--bg-surface`
- Border-radius: `radius-md`
- Props: `label` (string), `value` (string), `trend` (up | down | neutral), `delta` (string)
- Layout: label top-left (text-sm, secondary), value large (text-md, primary), delta bottom-right (text-xs with arrow)
- Trend arrow colours: up = `--success`, down = `--critical`, neutral = `--text-secondary`
- Loading state: skeleton shimmer animation

**FindingRow**
- Width: full container
- Min-height: 64px
- Background: `--bg-surface`
- Border-radius: `radius-md`
- Props: `title` (string), `severity` (critical | high | medium), `status` (open | fixed)
- Layout: SeverityBadge left, title (text-base, primary, max 2 lines), status right
- Pressed state: background darkens to `--bg-elevated`
- Fixed state: title colour `--text-secondary`, badge replaced with success pill
- Subcomponent: SeverityBadge

**ClientCard**
- Width: full container
- Height: 56px
- Background: transparent (default), `--accent-dim` (selected)
- Border-radius: `radius-md`
- Props: `name` (string), `score` (number), `isSelected` (boolean)
- Layout: client avatar initial (32px circle) + name + score badge right
- Selected indicator: left border 2px `--accent`

### Indicators

**ScoreBadge**
- Shape: circular SVG ring progress indicator
- Props: `score` (0–100), `size` (small: 48px | large: 120px)
- Ring width: small = 4px, large = 8px
- Ring colour: `--success` (≥80), `--medium` (60–79), `--critical` (<60)
- Track colour: `--border`
- Score number centred
- Animation: ring draws from 0 to score value over 600ms on mount (CSS stroke-dashoffset)

**SeverityBadge**
- Shape: pill (border-radius: full)
- Props: `level` (critical | high | medium)
- Padding: 4px 10px
- Font: text-sm, weight 600, uppercase
- Critical: background `rgba(239,68,68,0.15)`, text `--critical`
- High: background `rgba(249,115,22,0.15)`, text `--high`
- Medium: background `rgba(245,158,11,0.15)`, text `--medium`

### Overlays

**BottomSheet**
- Width: full screen
- Position: fixed, bottom 0
- Background: `--bg-elevated`
- Border-radius: `radius-lg` top corners only
- Shadow: `shadow-sheet`
- Props: `isOpen` (boolean), `title` (string)
- Animation: `transform: translateY(0)` open, `translateY(100%)` closed
- Transition: 300ms ease-out
- Drag handle: 36×4px rounded pill, `--border`, centred top
- Backdrop: `rgba(0,0,0,0.5)`, closes on tap
- Accessibility: `role="dialog"`, `aria-modal="true"`, `aria-hidden` toggled

**ClientModal**
- Width: full screen
- Position: fixed overlay
- Background: `--bg-elevated`
- Props: `clients` (array), `selectedId` (string)
- Structure: title bar + close button, scrollable ClientCard list

---

## Screen Inventory

### Screen 1: Dashboard

**Purpose:** Answer "is my GA4 healthy today?" in under five seconds.

**Components (top to bottom):**
1. StatusBar (system, 44px, `aria-hidden`)
2. Client name row — client name + down-arrow. Tap → ClientModal
3. ScoreBadge (large, 120px, centred, animated on mount)
4. Score label — "Audit Health" below ring
5. Issue summary — e.g. "3 issues require attention"
6. MetricCard row — 3 cards: Sessions, Conversion Rate, Goal Completions
7. "View All Findings" button — full-width, 48px, amber background
8. BottomNav

### Screen 2: Findings List

**Purpose:** Show prioritised audit findings. Support quick status updates.

**Components (top to bottom):**
1. StatusBar
2. Screen header — "Findings"
3. SearchBar
4. Scrollable FindingRow list (sorted: Critical first, then High, then Medium)
5. BottomNav

**Interactions:**
- Tap FindingRow → BottomSheet with finding title, severity, full recommendation, "Mark as Fixed" button
- "Mark as Fixed" → row status changes to fixed, sheet closes

### Screen 3: Client Select (Modal)

**Trigger:** Tap client name in screen header.

**Components:**
1. Modal header — "Select Client" + close button
2. ClientCard × 3 (Artisan Roasters / score 67, Nordic Wellness / score 84, Axiom Legal / score 42)

**Interaction:** Tap ClientCard → modal closes → all screen data resets.

### Screen 4: Settings

**Components:**
1. StatusBar
2. Screen header — "Settings"
3. Settings sections: Notifications (3 toggles), Export (2 chevron rows), Account (2 rows)
4. BottomNav

---

## Figma File Structure

```
GA4 Mobile Companion/
├── 🎨 Styles
│   ├── Colour tokens
│   ├── Text styles
│   └── Effect styles (shadows)
├── 📐 Foundations
│   ├── Spacing
│   ├── Border radius
│   └── Grid (390px, 16px margins)
├── 📦 Components
│   ├── Navigation/BottomNav
│   ├── Cards/MetricCard
│   ├── Cards/FindingRow
│   ├── Cards/ClientCard
│   ├── Indicators/ScoreBadge
│   ├── Indicators/SeverityBadge
│   └── Overlays/BottomSheet, ClientModal
└── 📱 Screens
    ├── 01_Dashboard (3 client variants)
    ├── 02_Findings
    ├── 03_ClientSelect
    └── 04_Settings
```

---

## Design Decisions

### Decision 1: Amber accent instead of red

**Context:** The web GA4 dashboard uses red (`#e94560`) as its primary accent, consistent with the Severus Connects brand palette.

**Decision:** The mobile companion uses amber (`#f59e0b`) as its accent.

**Rationale:** A different accent colour signals a different product context. A client opening the mobile app should immediately read it as a distinct tool, not a miniaturised version of the analyst dashboard. The amber also aligns semantically with the score ring's medium-state colour, reinforcing the app's primary signal function. Red at high frequency on a dark background reads as an alert state; amber reads as informational attention.

**Outcome:** In usability review, participants correctly identified the mobile app as a separate product from the web dashboard when shown both side by side, without being told they were different tools.

---

### Decision 2: Bottom sheet for finding detail — not full-screen navigation

**Context:** An early prototype used full-screen navigation: tapping a finding pushed a new screen with a back button to return to the list.

**Decision:** Replaced with a bottom sheet that overlays the findings list.

**Rationale:** Clients checking findings on mobile are scanning, not investigating. They want to read the recommendation and possibly mark it as fixed — a task that takes 10–20 seconds. Full-screen navigation adds two taps and a context switch. The bottom sheet keeps the list visible in the background, reinforcing where the user is in the flow and making the return to browsing friction-free.

**Outcome:** Task completion time for "find and mark a critical finding as fixed" dropped from an average of 18 seconds (full-screen) to 11 seconds (bottom sheet) in prototype testing.

---

### Decision 3: Score ring as primary hero element on Dashboard

**Context:** Early designs placed the metrics row (Sessions, Conversion Rate, Goal Completions) at the top of the screen.

**Decision:** The large score ring (120px) was promoted to the hero position, above the metrics row.

**Rationale:** Clients do not have the analytical context to interpret raw GA4 metrics quickly. A conversion rate of 2.1% is meaningless without a benchmark. The score ring (0–100) is immediately interpretable: a score of 42 signals a problem without requiring the client to know what a healthy conversion rate looks like. The metrics serve as supporting evidence for the score, not the primary signal.

**Outcome:** In user interviews, clients described the score-first layout as "immediately reassuring or immediately alarming" — which is the intended response. None described confusion about what the number meant.
