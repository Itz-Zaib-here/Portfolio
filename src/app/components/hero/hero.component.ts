import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
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
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate('1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
          style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100px)' }),
        animate('1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
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
    trigger('bounceIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.3)' }),
        animate('600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', 
          style({ opacity: 1, transform: 'scale(1)' }))
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
    ])
  ]
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('heroSection') heroSection!: ElementRef;
  @ViewChild('heroTitle') heroTitle!: ElementRef;
  @ViewChild('heroSubtitle') heroSubtitle!: ElementRef;
  @ViewChild('heroActions') heroActions!: ElementRef;
  
  isVisible = false;
  isTyping = false;

  constructor(private animationService: AnimationService) {}

  ngOnInit() {
    this.setupAnimations();
  }

  ngAfterViewInit() {
    this.observeElements();
    this.startTypingAnimation();
  }

  private setupAnimations() {
    // Add scroll event listener for parallax effects
    window.addEventListener('scroll', () => {
      this.updateParallaxEffects();
    });
  }

  private observeElements() {
    // Observe hero section for scroll animations
    this.animationService.observeElement(this.heroSection, (isVisible) => {
      this.isVisible = isVisible;
      if (isVisible) {
        this.triggerHeroAnimations();
      }
    });
  }

  private updateParallaxEffects() {
    if (this.heroSection?.nativeElement) {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.5;
      this.heroSection.nativeElement.style.transform = `translateY(${rate}px)`;
    }
  }

  private triggerHeroAnimations() {
    // Add floating animations to background elements
    const blobs = this.heroSection?.nativeElement?.querySelectorAll('.blob');
    if (blobs) {
      blobs.forEach((blob: HTMLElement, index: number) => {
        blob.style.animationDelay = `${index * 0.5}s`;
        blob.style.animation = `float ${3 + index}s ease-in-out infinite`;
      });
    }

    // Add pulse animation to CTA buttons
    const buttons = this.heroSection?.nativeElement?.querySelectorAll('.btn');
    if (buttons) {
      buttons.forEach((button: HTMLElement) => {
        button.addEventListener('mouseenter', () => {
          this.animationService.addPulseAnimation({ nativeElement: button }, 1);
        });
        button.addEventListener('mouseleave', () => {
          button.style.animation = '';
        });
      });
    }
  }

  private startTypingAnimation() {
    if (this.heroTitle?.nativeElement) {
      const text = this.heroTitle.nativeElement.textContent;
      this.animationService.typeText(this.heroTitle.nativeElement, text, 100);
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  downloadResume() {
    // Add click animation
    const button = document.querySelector('.btn-primary') as HTMLElement;
    if (button) {
      this.animationService.animateButtonClick(button);
    }
    
    // Simulate download
    setTimeout(() => {
      // Add your resume download logic here
      console.log('Downloading resume...');
    }, 150);
  }

  //get resume link
  getResume() {
    window.open('https://drive.google.com/file/d/1D83lQlTciB2JHq5aXt5g4pKeC51LyTbO/view?usp=drivesdk', '_blank');
  }
}
