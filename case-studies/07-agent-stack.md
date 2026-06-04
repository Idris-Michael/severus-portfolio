# 8-Agent Permission Framework

## Context

The Severus Connects Pantheon comprises eight AI agents — Jack of Clubs, Queen of Clubs, King of Clubs, Ace of Clubs, Jack of Diamonds, Queen of Hearts, King of Hearts, and Jack of Spades — each with a distinct role, capability set, and risk profile. As the system scaled, the question of who could do what became an operational concern: an agent with publish and budget rights presents a different risk profile than one with read-only access to analytics data. The permission framework was built to make those distinctions explicit, manageable, and auditable.

## My Role

I defined the permission model, designed the three-role view system, implemented the access control matrix with live toggle state, and built the audit log as a first-class interface element rather than a hidden record.

## Discovery

IAM interfaces typically fail by optimising for permission administrators rather than auditors. An administrator wants to know the current state and to change it efficiently. An auditor wants to know how the system arrived at its current state — which changes were made, by whom, and when. These are different questions, and an interface designed only for administrators is inadequate for accountability purposes.

The discovery finding that shaped this product was that the audit trail is the most important feature of an access control interface for a team that operates with multiple principals. Making the audit log visible by default — rather than burying it in a settings menu or requiring a separate export — was the central product decision.

## Design Decisions

**Audit log as a first-class panel.** The audit log occupies a persistent panel alongside the permission matrix. Every toggle change is recorded immediately with a timestamp, the agent name, the capability affected, the new state, and the role that made the change. The log is visible by default; it does not need to be accessed via a settings page or exported to review. This makes accountability a default property of the interface rather than a feature that requires deliberate use.

**Role viewer pattern.** Three views are available: Admin, Analyst, and Client. Switching view changes which toggles are interactive. Admin can change any permission. Analyst can see all permissions but cannot change them. Client sees the matrix but cannot interact with it. This pattern makes the permission model legible — a new team member can switch between views to understand what each role can and cannot do without consulting documentation.

**Conflict detection as a passive warning.** When two specific permissions — Publish and Manage Budget — are both enabled for the same agent in a Client role context, a warning banner appears automatically. The detection requires no user action; it runs on every permission change. This models the kind of automated policy enforcement that exists in enterprise IAM tools, where certain permission combinations are flagged as potential violations of least-privilege principles.

## Technical Constraints

Single-page, no backend. All permission state is held in JavaScript memory and resets on page load. The design constraint — no persistent state — was absorbed by treating the demo as a demonstration of the interface pattern rather than a production system. The audit log's reset on reload is consistent with this framing. A production version would persist toggle history to a database and provide export functionality; the demo makes the audit log pattern visible without needing the persistence layer.

## What Shipped

A fully interactive permission matrix at https://severus-six.vercel.app/demos/agent-stack.html with eight agent rows, six capability columns with live toggle state, a three-role viewer (Admin, Analyst, Client) that changes interactivity, a real-time audit log recording every permission change, and automatic conflict detection for the Publish + Manage Budget combination.

## Outcome

IAM and access control interfaces are notoriously difficult to design well — most are either incomplete (administrator-only, no audit visibility) or overwhelming (every permission and every log entry visible at full fidelity without hierarchy). This product demonstrates the ability to design enterprise-grade administrative interfaces that balance completeness with usability. The audit-first design principle, the role viewer pattern, and passive conflict detection are all decisions relevant to B2B SaaS, enterprise tooling, or any product where multiple user types need different levels of access to the same underlying data.
