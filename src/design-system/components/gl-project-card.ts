import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("gl-project-card")
export class GlProjectCard extends LitElement {
  static styles = css`
    :host {
      --gl-accent: #CC1500;
      --gl-bg: #0A0A0A;
      --gl-text: #ffffff;
      display: block;
    }

    .card {
      position: relative;
      background: #111111;
      border: 1px solid rgba(255, 255, 255, 0.10);
      padding: 28px;
      transition: border-color 0.25s ease;
      overflow: hidden;
    }
    .card:hover {
      border-color: var(--gl-accent);
    }
    .card::before {
      content: "";
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: var(--gl-accent);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }
    .card:hover::before {
      transform: scaleX(1);
    }

    .title {
      font-family: "Poppins", sans-serif;
      font-size: 1.05rem;
      font-weight: 900;
      letter-spacing: -0.02em;
      color: var(--gl-text);
      margin: 0 0 8px;
    }

    .description {
      font-size: 0.82rem;
      color: rgba(255, 255, 255, 0.45);
      line-height: 1.6;
      margin: 0 0 18px;
    }

    .stack {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 22px;
    }

    .stack-item {
      font-family: "Courier New", monospace;
      font-size: 0.6rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      padding: 3px 8px;
      color: rgba(255, 255, 255, 0.35);
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(255, 255, 255, 0.03);
    }

    .links {
      display: flex;
      gap: 10px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      font-family: "Poppins", sans-serif;
      font-size: 0.6rem;
      font-weight: 900;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      transition: background 0.2s, color 0.2s, border-color 0.2s;
      border: none;
    }
    .btn--primary {
      background: #ffffff;
      color: #0a0a0a;
    }
    .btn--primary:hover {
      background: var(--gl-accent);
      color: #ffffff;
    }
    .btn--ghost {
      background: transparent;
      color: rgba(255, 255, 255, 0.50);
      border: 1px solid rgba(255, 255, 255, 0.18);
    }
    .btn--ghost:hover {
      border-color: rgba(255, 255, 255, 0.50);
      color: #ffffff;
    }
  `;

  @property({ type: String }) title: string = "";
  @property({ type: String }) description: string = "";
  @property({ type: String }) stack: string = "";
  @property({ attribute: "github-url", type: String }) githubUrl: string = "";
  @property({ attribute: "live-url",   type: String }) liveUrl: string = "";

  get stackItems(): string[] {
    return this.stack.split(",").map(s => s.trim()).filter(Boolean);
  }

  render() {
    return html`
      <div class="card">
        <p class="title">${this.title}</p>
        <p class="description">${this.description}</p>
        <div class="stack">
          ${this.stackItems.map(t => html`<span class="stack-item">${t}</span>`)}
        </div>
        <div class="links">
          ${this.liveUrl ? html`<a class="btn btn--primary" href="${this.liveUrl}" target="_blank" rel="noreferrer">Live ↗</a>` : ""}
          ${this.githubUrl ? html`<a class="btn btn--ghost" href="${this.githubUrl}" target="_blank" rel="noreferrer">GitHub</a>` : ""}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "gl-project-card": GlProjectCard;
  }
}
