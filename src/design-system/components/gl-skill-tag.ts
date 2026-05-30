import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

export type SkillLevel = "strong" | "learning" | "familiar";

@customElement("gl-skill-tag")
export class GlSkillTag extends LitElement {
  static styles = css`
    :host {
      --gl-accent: #CC1500;
      --gl-bg: #0A0A0A;
      --gl-text: #ffffff;
      display: inline-flex;
    }

    .tag {
      display: inline-flex;
      align-items: center;
      padding: 4px 10px;
      font-family: "Courier New", "Fira Code", monospace;
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    .tag--strong {
      color: var(--gl-accent);
      border: 1px solid rgba(204, 21, 0, 0.40);
      background: rgba(204, 21, 0, 0.08);
    }
    .tag--learning {
      color: #7c3aed;
      border: 1px solid rgba(124, 58, 237, 0.40);
      background: rgba(124, 58, 237, 0.08);
    }
    .tag--familiar {
      color: rgba(255, 255, 255, 0.55);
      border: 1px solid rgba(255, 255, 255, 0.15);
      background: rgba(255, 255, 255, 0.04);
    }
  `;

  @property({ type: String }) label: string = "TypeScript";
  @property({ type: String }) level: SkillLevel = "strong";

  render() {
    return html`<span class="tag tag--${this.level}">${this.label}</span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "gl-skill-tag": GlSkillTag;
  }
}
