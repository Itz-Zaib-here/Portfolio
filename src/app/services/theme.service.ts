import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'portfolio.theme';
  private readonly themeSubject = new BehaviorSubject<Theme>(this.getInitialTheme());

  readonly theme$ = this.themeSubject.asObservable();

  constructor() {
    this.applyTheme(this.themeSubject.value);
  }

  get theme(): Theme {
    return this.themeSubject.value;
  }

  setTheme(theme: Theme): void {
    if (theme === this.themeSubject.value) return;
    this.themeSubject.next(theme);
    this.persistTheme(theme);
    this.applyTheme(theme);
  }

  toggleTheme(): void {
    this.setTheme(this.themeSubject.value === 'dark' ? 'light' : 'dark');
  }

  private getInitialTheme(): Theme {
    if (typeof window === 'undefined') return 'dark';

    const stored = window.localStorage.getItem(this.storageKey);
    if (stored === 'dark' || stored === 'light') return stored;

    const prefersDark =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    return prefersDark ? 'dark' : 'light';
  }

  private persistTheme(theme: Theme): void {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(this.storageKey, theme);
    } catch {
      // ignore
    }
  }

  private applyTheme(theme: Theme): void {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    root.dataset['theme'] = theme;

    // Helps built-in form controls match the theme.
    root.style.colorScheme = theme;
  }
}
