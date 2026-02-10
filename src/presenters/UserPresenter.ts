import { User } from '../entities/User';

export class UserPresenter {
  static toJson(user: User): {
    id: string;
    name: string;
    email: string;
    createdAt: string;
  } {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt.toISOString(),
    };
  }

  static toHtml(user: User): string {
    return `
      <article class="user-card">
        <h3>${this.escapeHtml(user.name)}</h3>
        <p><strong>Email:</strong> ${this.escapeHtml(user.email)}</p>
        <p><small>Created: ${user.createdAt.toLocaleString()}</small></p>
      </article>
    `;
  }

  private static escapeHtml(text: string): string {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (char) => map[char]);
  }
}
