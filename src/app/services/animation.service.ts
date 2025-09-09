import { Injectable, ElementRef } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, state } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  // Reusable animation triggers
  static fadeInUp = trigger('fadeInUp', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(50px)' }),
      animate('800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
        style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ]);

  static fadeInDown = trigger('fadeInDown', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-50px)' }),
      animate('800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
        style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ]);

  static slideInLeft = trigger('slideInLeft', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(-50px)' }),
      animate('700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
        style({ opacity: 1, transform: 'translateX(0)' }))
    ])
  ]);

  static slideInRight = trigger('slideInRight', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(50px)' }),
      animate('700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
        style({ opacity: 1, transform: 'translateX(0)' }))
    ])
  ]);

  static scaleIn = trigger('scaleIn', [
    transition(':enter', [
      style({ opacity: 0, transform: 'scale(0.8)' }),
      animate('600ms cubic-bezier(0.34, 1.56, 0.64, 1)', 
        style({ opacity: 1, transform: 'scale(1)' }))
    ])
  ]);

  static staggerAnimation = trigger('staggerAnimation', [
    transition('* => *', [
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        stagger(150, [
          animate('600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
            style({ opacity: 1, transform: 'translateY(0)' }))
        ])
      ], { optional: true })
    ])
  ]);

  static bounceIn = trigger('bounceIn', [
    transition(':enter', [
      style({ opacity: 0, transform: 'scale(0.3)' }),
      animate('600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', 
        style({ opacity: 1, transform: 'scale(1)' }))
    ])
  ]);

  static rotateIn = trigger('rotateIn', [
    transition(':enter', [
      style({ opacity: 0, transform: 'rotate(-200deg)' }),
      animate('800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
        style({ opacity: 1, transform: 'rotate(0deg)' }))
    ])
  ]);

  static flipIn = trigger('flipIn', [
    transition(':enter', [
      style({ opacity: 0, transform: 'perspective(400px) rotateY(90deg)' }),
      animate('600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
        style({ opacity: 1, transform: 'perspective(400px) rotateY(0deg)' }))
    ])
  ]);

  static zoomIn = trigger('zoomIn', [
    transition(':enter', [
      style({ opacity: 0, transform: 'scale(0.5)' }),
      animate('500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
        style({ opacity: 1, transform: 'scale(1)' }))
    ])
  ]);

  static slideInUp = trigger('slideInUp', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(100px)' }),
      animate('700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
        style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ]);

  // Scroll-triggered animation observer
  createScrollObserver(callback: (isVisible: boolean) => void, threshold: number = 0.3) {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          callback(entry.isIntersecting);
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );
  }

  // Observe element for scroll animations
  observeElement(element: ElementRef, callback: (isVisible: boolean) => void) {
    const observer = this.createScrollObserver(callback);
    if (element?.nativeElement) {
      observer.observe(element.nativeElement);
    }
    return observer;
  }

  // Animate on scroll with CSS classes
  animateOnScroll(element: ElementRef, animationClass: string = 'animate-in') {
    const observer = this.createScrollObserver((isVisible) => {
      if (isVisible && element?.nativeElement) {
        element.nativeElement.classList.add(animationClass);
      }
    });
    
    if (element?.nativeElement) {
      observer.observe(element.nativeElement);
    }
    return observer;
  }

  // Stagger animation for lists
  staggerListAnimation(elements: ElementRef[], delay: number = 100) {
    elements.forEach((element, index) => {
      if (element?.nativeElement) {
        element.nativeElement.style.opacity = '0';
        element.nativeElement.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
          element.nativeElement.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          element.nativeElement.style.opacity = '1';
          element.nativeElement.style.transform = 'translateY(0)';
        }, index * delay);
      }
    });
  }

  // Button click animation
  animateButtonClick(element: HTMLElement, scale: number = 0.95) {
    if (element) {
      element.style.transform = `scale(${scale})`;
      setTimeout(() => {
        element.style.transform = '';
      }, 150);
    }
  }

  // Text typing animation
  typeText(element: HTMLElement, text: string, speed: number = 50) {
    if (element) {
      element.textContent = '';
      let i = 0;
      const timer = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
          clearInterval(timer);
        }
      }, speed);
    }
  }

  // Parallax effect
  createParallaxEffect(element: ElementRef, speed: number = 0.5) {
    window.addEventListener('scroll', () => {
      if (element?.nativeElement) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed;
        element.nativeElement.style.transform = `translateY(${rate}px)`;
      }
    });
  }

  // Floating animation
  addFloatingAnimation(element: ElementRef, duration: number = 3) {
    if (element?.nativeElement) {
      element.nativeElement.style.animation = `float ${duration}s ease-in-out infinite`;
    }
  }

  // Pulse animation
  addPulseAnimation(element: ElementRef, duration: number = 2) {
    if (element?.nativeElement) {
      element.nativeElement.style.animation = `pulse ${duration}s ease-in-out infinite`;
    }
  }

  // Shake animation
  addShakeAnimation(element: ElementRef, duration: number = 0.5) {
    if (element?.nativeElement) {
      element.nativeElement.style.animation = `shake ${duration}s ease-in-out`;
    }
  }

  // Glow effect
  addGlowEffect(element: ElementRef, color: string = 'rgba(139, 92, 246, 0.5)') {
    if (element?.nativeElement) {
      element.nativeElement.style.boxShadow = `0 0 5px ${color}`;
      element.nativeElement.style.transition = 'box-shadow 0.3s ease';
    }
  }

  // Remove glow effect
  removeGlowEffect(element: ElementRef) {
    if (element?.nativeElement) {
      element.nativeElement.style.boxShadow = '';
    }
  }
}
