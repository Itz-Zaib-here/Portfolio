import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { PORTFOLIO_CONFIG, SKILLS } from '../../data/portfolio-data';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
          style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
          style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('600ms cubic-bezier(0.34, 1.56, 0.64, 1)', 
          style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(150, [
            animate('600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('bounceIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.3)' }),
        animate('600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', 
          style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('aboutContent') aboutContent!: ElementRef;
  
  skills = SKILLS;
  personal = PORTFOLIO_CONFIG.personal;
  isVisible = true; // Set to true by default to make it visible

  constructor(private animationService: AnimationService) {}

  ngOnInit() {
    this.setupAnimations();
  }

  ngAfterViewInit() {
    this.observeElements();
    // Trigger animations immediately to ensure visibility
    setTimeout(() => {
      this.triggerAboutAnimations();
    }, 100);
  }

  private setupAnimations() {
    // Add scroll event listener for additional effects
    window.addEventListener('scroll', () => {
      this.checkScrollPosition();
    });
  }

  private observeElements() {
    // Observe about section for scroll animations
    this.animationService.observeElement(this.aboutSection, (isVisible) => {
      this.isVisible = isVisible;
      if (isVisible) {
        this.triggerAboutAnimations();
      }
    });
  }

  private checkScrollPosition() {
    if (this.aboutSection?.nativeElement) {
      const rect = this.aboutSection.nativeElement.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInView && !this.isVisible) {
        this.isVisible = true;
        this.triggerAboutAnimations();
      }
    }
  }

  private triggerAboutAnimations() {
    // Add floating animations to skill items
    const skillItems = this.aboutSection?.nativeElement?.querySelectorAll('.skill-item');
    if (skillItems) {
      skillItems.forEach((item: HTMLElement, index: number) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
          item.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, index * 100);
      });
    }

    // Add hover effects to skill icons
    const skillIcons = this.aboutSection?.nativeElement?.querySelectorAll('.skill-item i');
    if (skillIcons) {
      skillIcons.forEach((icon: HTMLElement) => {
        icon.addEventListener('mouseenter', () => {
          this.animationService.addGlowEffect({ nativeElement: icon }, 'rgba(139, 92, 246, 0.4)');
        });
        icon.addEventListener('mouseleave', () => {
          this.animationService.removeGlowEffect({ nativeElement: icon });
        });
      });
    }

    // Add pulse animation to skill items on hover
    const skillItemsHover = this.aboutSection?.nativeElement?.querySelectorAll('.skill-item');
    if (skillItemsHover) {
      skillItemsHover.forEach((item: HTMLElement) => {
        item.addEventListener('mouseenter', () => {
          this.animationService.addPulseAnimation({ nativeElement: item }, 1);
        });
        item.addEventListener('mouseleave', () => {
          item.style.animation = '';
        });
      });
    }
  }
}
