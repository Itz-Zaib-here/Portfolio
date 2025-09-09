import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { WORK_EXPERIENCE } from '../../data/portfolio-data';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('600ms cubic-bezier(0.34, 1.56, 0.64, 1)', 
          style({ opacity: 1, transform: 'scale(1)' }))
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
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(200, [
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
export class ExperienceComponent implements OnInit, AfterViewInit {
  @ViewChild('experienceSection') experienceSection!: ElementRef;
  @ViewChild('experienceGrid') experienceGrid!: ElementRef;
  
  workExperience = WORK_EXPERIENCE;
  isVisible = true; // Set to true by default to make it visible

  constructor(private animationService: AnimationService) {}

  ngOnInit() {
    this.setupAnimations();
  }

  ngAfterViewInit() {
    this.observeElements();
    // Trigger animations immediately to ensure visibility
    setTimeout(() => {
      this.triggerExperienceAnimations();
    }, 100);
  }

  private setupAnimations() {
    // Add scroll event listener for additional effects
    window.addEventListener('scroll', () => {
      this.checkScrollPosition();
    });
  }

  private observeElements() {
    // Observe experience section for scroll animations
    this.animationService.observeElement(this.experienceSection, (isVisible) => {
      this.isVisible = isVisible;
      if (isVisible) {
        this.triggerExperienceAnimations();
      }
    });
  }

  private checkScrollPosition() {
    if (this.experienceSection?.nativeElement) {
      const rect = this.experienceSection.nativeElement.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInView && !this.isVisible) {
        this.isVisible = true;
        this.triggerExperienceAnimations();
      }
    }
  }

  private triggerExperienceAnimations() {
    // Add floating animations to experience cards
    const experienceCards = this.experienceSection?.nativeElement?.querySelectorAll('.experience-card');
    if (experienceCards) {
      experienceCards.forEach((card: HTMLElement, index: number) => {
        card.style.animationDelay = `${index * 0.3}s`;
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
          card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 300);
      });
    }

    // Add hover effects to job icons
    const jobIcons = this.experienceSection?.nativeElement?.querySelectorAll('.job-icon');
    if (jobIcons) {
      jobIcons.forEach((icon: HTMLElement) => {
        icon.addEventListener('mouseenter', () => {
          this.animationService.addGlowEffect({ nativeElement: icon }, 'rgba(139, 92, 246, 0.4)');
        });
        icon.addEventListener('mouseleave', () => {
          this.animationService.removeGlowEffect({ nativeElement: icon });
        });
      });
    }

    // Add pulse animation to tech tags
    const techTags = this.experienceSection?.nativeElement?.querySelectorAll('.tech-tag');
    if (techTags) {
      techTags.forEach((tag: HTMLElement) => {
        tag.addEventListener('mouseenter', () => {
          this.animationService.addPulseAnimation({ nativeElement: tag }, 1);
        });
        tag.addEventListener('mouseleave', () => {
          tag.style.animation = '';
        });
      });
    }
  }
}
