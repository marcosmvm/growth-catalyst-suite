# Quantum Insights Brand Style Guide

## Brand Voice

### Core Principles
- **Confident, not arrogant** — We know what we're doing. We don't need to oversell.
- **Clear, not clever** — Direct language wins. Avoid jargon and fluff.
- **Results-focused** — Lead with outcomes. Clients care about pipeline, not process.
- **Professional brevity** — Say more with less. Every word earns its place.

### Tone
- Assertive and authoritative
- Straightforward and honest
- Calm confidence, not hype
- Peer-to-peer, not vendor-to-client

### Writing Guidelines

#### Headlines
- Lead with the result or benefit
- Use periods for finality and confidence
- Keep it short (5-8 words ideal)
- Avoid exclamation marks

**Examples:**
- ✅ "Pipeline in 30 days. Here's how."
- ✅ "Cold email that works."
- ✅ "Your inbox. Their decision-makers."
- ❌ "The Ultimate Cold Email Solution!"
- ❌ "Transform Your Outreach Today"

#### Body Copy
- Short sentences. Short paragraphs.
- Active voice only
- Specific numbers over vague claims
- No filler words (very, really, just, actually)

**Examples:**
- ✅ "We've booked 10,000+ meetings. The system works."
- ✅ "Full-service. Full transparency. Full pipeline."
- ❌ "We're really passionate about helping you succeed"
- ❌ "Our comprehensive solution will transform your business"

#### CTAs (Calls to Action)
- Action-oriented, specific
- One clear action per context
- Confident but not pushy

**Examples:**
- ✅ "Get Started"
- ✅ "Book a Call"
- ✅ "See It Work"
- ❌ "Schedule Your Free Demo Today!"
- ❌ "Click Here to Learn More"

---

## Typography

### Font Family
- **Primary Font:** Inter
- **Usage:** All headings, body text, and UI elements

### Font Weights
- **Headings:** 600 (Semibold) to 700 (Bold)
- **Body:** 400 (Regular)
- **Emphasis:** 500 (Medium)

### Hierarchy
```
H1: 3rem - 4rem (48px - 64px) — Page headlines
H2: 2rem - 2.5rem (32px - 40px) — Section headlines
H3: 1.5rem - 1.75rem (24px - 28px) — Subsection headlines
Body: 1rem - 1.125rem (16px - 18px) — Paragraph text
Small: 0.875rem (14px) — Captions, metadata
```

---

## Color Palette

### Primary Colors
| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--primary` | 240 100% 75% | Primary brand color, CTAs, links |
| `--primary-foreground` | 0 0% 100% | Text on primary backgrounds |

### Background Colors
| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--background` | 228 40% 6% | Main background (dark theme) |
| `--foreground` | 0 0% 95% | Primary text color |

### Secondary Colors
| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--secondary` | 228 25% 12% | Secondary surfaces, cards |
| `--secondary-foreground` | 0 0% 95% | Text on secondary surfaces |

### Accent Colors
| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--accent` | 240 80% 70% | Highlights, hover states |
| `--muted` | 228 20% 18% | Muted backgrounds |
| `--muted-foreground` | 228 10% 60% | Secondary text |

### Semantic Colors
| Token | Usage |
|-------|-------|
| `--success` | Success states, positive metrics |
| `--destructive` | Errors, warnings, negative actions |

---

## Visual Elements

### Gradients
- Use gradient backgrounds for hero sections and premium cards
- Primary gradient: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`

### Shadows
- Subtle glow effects using primary color with transparency
- `--shadow-glow`: `0 0 40px hsl(var(--primary) / 0.3)`

### Effects
- Glass morphism for cards: `backdrop-blur` with semi-transparent backgrounds
- Noise overlay for texture
- Subtle animations on hover and scroll

### Border Radius
- `--radius`: 0.5rem (8px)
- Use consistent rounding across all components

---

## Component Guidelines

### Buttons
- Primary buttons: `variant="hero"` for main CTAs
- Secondary buttons: `variant="outline"` for secondary actions
- Keep button text short (2-4 words)

### Cards
- Use `glass` or `premium-card` classes for elevated surfaces
- Consistent padding: 1.5rem - 2rem
- Subtle border with `border-border`

### Forms
- Clear labels above inputs
- Helpful placeholder text
- Validation messages in destructive color

### Modals
- Clear, action-oriented titles
- Progress indicators for multi-step flows
- Single primary CTA per step

---

## Brand Messaging Examples

### Taglines
- "Cold email that works. Pipeline that grows. Results you can measure."
- "From first contact to closed deal."
- "Your pipeline. Engineered."

### Value Propositions
- "We send the emails. You close the deals."
- "Full-service. Full transparency. Full pipeline."
- "Meetings booked. Revenue generated. Time saved."

### Social Proof
- Lead with specific numbers
- Use client results, not vague testimonials
- Format: "[Metric]. [Timeframe]. [Client type]."
- Example: "47 meetings in 60 days. SaaS founder."

---

## Don'ts

- ❌ Use exclamation marks in headlines
- ❌ Use buzzwords (revolutionary, cutting-edge, game-changing)
- ❌ Make vague promises without specifics
- ❌ Use passive voice
- ❌ Add unnecessary adjectives
- ❌ Use colors outside the design system
- ❌ Overcomplicate messaging

---

## Quick Reference

| Element | Guidance |
|---------|----------|
| Headlines | Short. Confident. End with period. |
| Body text | Direct. Specific. No fluff. |
| CTAs | 2-4 words. Action verb first. |
| Numbers | Always specific, never "many" or "lots" |
| Tone | Professional peer, not salesperson |
