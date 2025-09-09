import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';


import { PORTFOLIO_CONFIG } from './data/portfolio-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule, 
    FormsModule,
    NavigationComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,

  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class App implements OnInit {
  protected title = PORTFOLIO_CONFIG.personal.name + ' - ' + PORTFOLIO_CONFIG.personal.title;
  isScrolling: boolean = false;
  private scrollTimer: any = null;
  isHomeInView: boolean = true;

  ngOnInit() {
    this.setupSmoothScrolling();
    this.setupIntersectionObserver();
    this.setupScrollIdleDetector();
    this.observeHomeSection();
  }

  private setupSmoothScrolling() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (e.target as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }

  private setupIntersectionObserver() {
    // Animate elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-title, .about-content, .project-card, .timeline-item').forEach(el => {
      observer.observe(el);
    });
  }

  private setupScrollIdleDetector() {
    window.addEventListener('scroll', () => {
      this.isScrolling = true;
      if (this.scrollTimer) {
        clearTimeout(this.scrollTimer);
      }
      this.scrollTimer = setTimeout(() => {
        this.isScrolling = false;
      }, 200); // show when user stops for 200ms
    }, { passive: true });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private observeHomeSection() {
    const home = document.querySelector('#home');
    if (!home) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.isHomeInView = entry.isIntersecting;
      });
    }, { threshold: 0.4 });
    observer.observe(home);
  }
}
