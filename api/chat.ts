import Anthropic from '@anthropic-ai/sdk';

/**
 * Portfolio assistant. POST { messages: [{role,content}] } -> { reply }.
 * Requires ANTHROPIC_API_KEY in the Vercel environment. Without it (or on any
 * error) it returns a graceful fallback so the widget never hard-fails.
 */

const SYSTEM = `You are the portfolio guide for Idris Bakare, a London-based product designer, front-end engineer, and founder of the agency Severus Connects.

About Idris:
- Product/UI design plus front-end engineering in React and TypeScript, with motion and WebGL.
- Builds multi-agent AI systems, n8n automations, and AI infrastructure ("Hermes OS").
- Google-certified across Analytics (GA4), AI-Powered Performance Ads, and Shopping Ads.

The portfolio is a "two worlds" experience: a white Frontend world (design and UI) and a black Backend world (systems, AI, automation).

Shipped interactive demos (all live, the visitor can open them):
- Mission Control (/demos/mission-control.html): operations console with Kanban, CRM, agent status, run logs.
- Dual-LLM Contract Review (/demos/portswigger.html): Claude vs Gemini reading a contract in parallel.
- GA4 Audit Dashboard (/demos/ga4-audit.html): 3-client B2B analytics portal with live charts.
- GA4 Companion (/demos/ga4-mobile.html): the audit tool as a mobile app.
- Triple-Tool Flywheel (/demos/triple-tool.html): three content tools unified with auto handoffs.
- Pipeline Command (/demos/pipeline-mobile.html): mobile control surface for an automation pipeline.
- Automation Node Inspector (/demos/n8n-workflows.html): 8 n8n workflows, node by node.
- Agent Permission Framework (/demos/agent-stack.html): IAM matrix for 8 AI agents.

Contact: email idris.bakare92@outlook.com, LinkedIn linkedin.com/in/idrisbakare, hire via Upwork.

Style: concise, friendly, professional. Point visitors to the most relevant demo or section. Keep replies under 90 words unless asked for detail. If a question is unrelated to Idris or his work, answer briefly and steer back to the portfolio.`;

const FALLBACK = "I'm offline at the moment. You can reach Idris directly at idris.bakare92@outlook.com or on LinkedIn (linkedin.com/in/idrisbakare).";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(200).json({ reply: FALLBACK });
    return;
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const incoming = Array.isArray(body.messages) ? body.messages : [];
    const messages = incoming
      .filter((m: any) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .slice(-10);

    if (messages.length === 0) {
      res.status(400).json({ error: 'No messages' });
      return;
    }

    const client = new Anthropic({ apiKey });
    const msg = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 600,
      system: SYSTEM,
      messages,
    });

    const reply = msg.content
      .filter((b: any) => b.type === 'text')
      .map((b: any) => b.text)
      .join('\n')
      .trim();

    res.status(200).json({ reply: reply || '…' });
  } catch (err) {
    res.status(200).json({ reply: "Something went wrong reaching the model. Email idris.bakare92@outlook.com and Idris will get back to you." });
  }
}
