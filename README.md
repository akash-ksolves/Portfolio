# Enterprise Portfolio Ecosystem 

> **Mission**: Design and orchestration of a high-performance, resilient, and secure professional showcase for a Senior Systems Architect.

This repository is not just a personal website; it is a **Production-Grade System Prototype** engineered to demonstrate expertise in **Microservices, IoT Orchestration, and Enterprise Cloud Architectures**. Built with **Next.js 16**, the system prioritizes **Engineering Excellence** over simple visual design.

---

## 🛠 Engineering Core (Architectural Pillars)

### 1. Data Integrity & State Orchestration
The system utilizes a **Single Source of Truth (SSoT)** pattern. Local or remote payloads are processed through a strict **Zod Validation Layer** upon application hydration, ensuring **Schema Integrity**. Validated data is then injected into a **React Context Provider**, preventing prop-drilling and ensuring deep-tree immutability.

### 2. Lifecycle & Memory Safety
Engineered for long-running SPA sessions, the **IoT MQTT Simulator** strictly follows **Lifecycle Safety** protocols. All event listeners and intervals are governed by robust `useEffect` cleanup patterns to mitigate memory leaks and redundant execution cycles during navigation.

### 3. Defensive Security Posture
The system implements multiple layers of mitigation against common web vulnerabilities:
- **Honeypot Technical Pattern**: Mitigates automated bot submissions in the contact flow.
- **Input Sanitization**: All user-generated payloads are sanitized to prevent **XSS (Cross-Site Scripting)**.
- **Content Security Policy**: Optimized for Vercel deployment to enforce strict resource fetching rules.

---

## 🚀 Performance & Orchestration

| Metric Category | Optimization Strategy |
| :--- | :--- |
| **LCP (Loading)** | `next/image` prioritization for critical viewport assets to ensure sub-100ms visual readiness. |
| **Interactive Latency** | **LazyMotion Orchestration** reduces initial JS execution payload by deferred loading of the animation engine. |
| **Content Delivery** | Ready for **Incremental Static Regeneration (ISR)** to support real-time data propagation without full system rebuilds. |

---

## 🏗 Tech Stack

- **Framework**: `Next.js 16` (App Router)
- **Language**: `TypeScript` (Strict Mode)
- **Validation**: `Zod`
- **Animations**: `Framer Motion 12`
- **Styling**: `Tailwind CSS 4`
- **Iconography**: `Lucide React`

---

## 📄 Deep-Dive Documentation

For a comprehensive architectural audit, including system diagrams, design tokens, and the detailed technical roadmap, please refer to the:

👉 **[TECHNICAL_DESIGN_DOCUMENT (TDD.md)](./TDD.md)**

---

## ⚙️ Local Development

1. **Clone the ecosystem**:
   ```bash
   git clone https://github.com/A2K12/Portfolio.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Orchestrate development server**:
   ```bash
   npm run dev
   ```

4. **Production Build**:
   ```bash
   npm run build
   ```

---

## 🗺 Strategic Roadmap
- [ ] Transition Validation Layer to **Next.js Edge Middleware**.
- [ ] Implement **gRPC-Web** bridge for live telemetry ingestion.
- [ ] Decouple content via **Headless CMS** integration.

---

© 2026 Akash Kharat • Full Stack Developer • [LinkedIn](https://linkedin.com/in/akash-kharat-58949a135)
