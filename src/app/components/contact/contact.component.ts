import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
          style({ opacity: 1, transform: 'translateY(0)' }))
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
    ])
  ]
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild('contactSection') contactSection!: ElementRef;
  
  isVisible = true; // Set to true by default to make it visible
  isLoading = false;

  // Social media links
  socialLinks = {
    github: 'https://github.com/Itz-Zaib-here',
    linkedin: 'https://www.linkedin.com/in/shah-zaib-akmal/',
    email: 'itz.zaib.here@gmail.com',
    whatsapp: '+923707044870',
  };

  ngOnInit() {
    this.setupScrollAnimation();
  }

  ngAfterViewInit() {
    this.observeElement();
  }

  private setupScrollAnimation() {
    // Add scroll event listener for additional effects
    window.addEventListener('scroll', () => {
      this.checkScrollPosition();
    });
  }

  private observeElement() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            this.triggerAnimation();
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (this.contactSection?.nativeElement) {
      observer.observe(this.contactSection.nativeElement);
    }
  }

  private checkScrollPosition() {
    if (this.contactSection?.nativeElement) {
      const rect = this.contactSection.nativeElement.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInView && !this.isVisible) {
        this.isVisible = true;
        this.triggerAnimation();
      }
    }
  }

  private triggerAnimation() {
    // Add CSS classes for additional animations
    if (this.contactSection?.nativeElement) {
      this.contactSection.nativeElement.classList.add('animate-in');
    }
  }

  connectViaGithub() {
    this.animateButtonClick('github');
    window.open(this.socialLinks.github, '_blank');
  }

  connectViaLinkedin() {
    this.animateButtonClick('linkedin');
    window.open(this.socialLinks.linkedin, '_blank');
  }

  connectViaEmail() {
    this.animateButtonClick('email');
    const subject = encodeURIComponent("Let's Connect - Portfolio Inquiry");
    const body = encodeURIComponent(
      'Hi Itz-Zaib! I saw your portfolio and would like to connect with you.'
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${this.socialLinks.email}&su=${subject}&body=${body}`,
      '_blank'
    );
  }

  connectViaWhatsapp() {
    this.animateButtonClick('whatsapp');
    const message = encodeURIComponent(
      'Hi Itz-Zaib! I saw your portfolio and would like to connect with you.'
    );
    window.open(
      `https://wa.me/${this.socialLinks.whatsapp}?text=${message}`,
      '_blank'
    );
  }

  private animateButtonClick(buttonType: string) {
    const button = document.querySelector(`.social-btn.${buttonType}`) as HTMLElement;
    if (button) {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = '';
      }, 150);
    }
  }

  submitForm() {
    // Form submission logic here
  }
}
