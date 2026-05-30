import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

export type BadgeVariant = "available" | "busy" | "default";

@customElement("gl-badge")
export class GlBadge extends LitElement {
  static styles = css`
    :host {
      --gl-accent: #CC1500;
      --gl-bg: #0A0A0A;
      --gl-text: #ffffff;
      display: inline-flex;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 12px;
      font-family: "Poppins", sans-serif;
      font-size: 0.6rem;
      font-weight: 900;
      letter-spacing: 0.35em;
      text-transform: uppercase;
    }

    .badge--available {
      color: #10b981;
      background: rgba(16, 185, 129, 0.10);
      border: 1px solid rgba(16, 185, 129, 0.22);
    }
    .badge--busy {
      color: var(--gl-accent);
      background: rgba(204, 21, 0, 0.10);
      border: 1px solid rgba(204, 21, 0, 0.22);
    }
    .badge--default {
      color: rgba(255, 255, 255, 0.60);
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.12);
    }

    .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }
    .dot--available { background: #10b981; }
    .dot--busy      { background: var(--gl-accent); }
    .dot--default   { background: rgba(255,255,255,0.50); }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0.4; }
    }
  `;

  @property({ type: String }) label: string = "Available";
  @property({ type: String }) variant: BadgeVariant = "available";

  render() {
    return html`
      <span class="badge badge--${this.variant}">
        <span class="dot dot--${this.variant}"></span>
        ${this.label}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "gl-badge": GlBadge;
  }
}
