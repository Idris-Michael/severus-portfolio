# Dual-LLM Contract Review

## Context

Agency contracts carry risk that is easy to overlook when moving quickly. Unlimited liability clauses, broad IP assignment terms, and auto-renewal provisions with asymmetric notice requirements have real financial consequences for small agencies. The brief was to build a contract review tool that surfaces those risks before a contract is signed — and to use two AI models rather than one, exploiting the fact that disagreement between models is itself a signal worth surfacing.

## My Role

I defined the product concept, made the key UX decisions around how to present AI output, and implemented the interface. The central product question — whether to merge outputs or show them side by side — was mine to answer before implementation began.

## Discovery

Existing AI-assisted legal tools fall into two categories. The first presents one model's output as authoritative, which creates false confidence: the user has no basis for knowing whether findings were missed or overstated. The second merges outputs from multiple models into a single result, which loses the signal that divergence carries. A contract clause that one model flags as critical and another rates as medium is more interesting than a clause both models agree on — but a merged output erases that distinction.

The product insight was that agreement between models increases confidence in a finding, and disagreement between models flags a finding that requires closer human review. Making that relationship explicit rather than hidden was the design premise.

## Design Decisions

**Side-by-side panels rather than a merged view.** Each model's output occupies its own panel. The panels are visually parallel — same structure, same badge system, same confidence display — which makes comparison straightforward. Findings are labelled with "Agreement" or "Divergence" badges where the models' severity assessments align or differ. The UI treats the comparison as the product, not a footnote.

**Confidence scores per finding.** AI tools that present output without uncertainty signal are less trustworthy in practice, not more. Displaying confidence as a percentage (Claude 92%, Gemini 94%) gives the user a basis for calibrating how much weight to place on each finding. A finding rated with 75% confidence invites more scrutiny than one rated at 94%. Removing that information would make the interface appear cleaner but would reduce its actual utility.

**Clause reference as primary anchor.** Each finding is anchored to a specific contract clause (Clause 8.3, Section 12.1) rather than paraphrased. This allows the user to verify any finding against the source text directly. Paraphrasing without a reference introduces a layer of interpretation between the AI output and the user's verification step.

## Technical Constraints

The demo contains no live API integration. Findings are pre-computed and rendered after a simulated analysis delay of 900–1200ms per panel. The delay is intentional — it sets an accurate expectation for real-world API latency and prevents the interface from appearing to return results instantaneously, which would misrepresent how the product would behave in production.

## What Shipped

A fully interactive contract review interface at https://severus-six.vercel.app/demos/portswigger.html. Users can paste or edit contract text, trigger an analysis, and receive findings from both Claude 3.5 Sonnet and Gemini 1.5 Pro in parallel side-by-side panels. Each finding shows severity, clause reference, confidence score, and agreement/divergence status. The Analyse button re-runs with a fresh simulation on each click.

## Outcome

Demonstrates the ability to design user interfaces for generative AI output — a category of product that requires explicit thinking about trust, uncertainty, and how to present non-deterministic results to users making real decisions. The core design decisions here (side-by-side over merged, confidence scores surfaced rather than hidden, disagreement treated as signal) are the kind of PM-level choices that distinguish a product that builds appropriate user trust from one that creates false confidence.
