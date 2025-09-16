import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  isConnectModalOpen = false;
  isNavbarHidden = false;
  lastScrollTop = 0;
  indicatorLeft = 0;
  indicatorWidth = 0;

  // Social media links
  socialLinks = {
    github: 'https://github.com/Itz-Zaib-here',
    linkedin: 'https://www.linkedin.com/in/shah-zaib-akmal/',
    email: 'itz.zaib.here@gmail.com',
    whatsapp: '+923707044870',
  };

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.checkScroll();
    this.handleNavbarVisibility();
  }

  @HostListener('document:keydown.escape')
  onEscapeKey() {
    this.closeConnectModal();
  }

  private checkScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  private handleNavbarVisibility() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show navbar when scrolling up or at the top
    if (currentScrollTop <= 0) {
      this.isNavbarHidden = false;
    } else if (currentScrollTop < this.lastScrollTop) {
      // Scrolling up
      this.isNavbarHidden = false;
    } else if (currentScrollTop > this.lastScrollTop && currentScrollTop > 100) {
      // Scrolling down and not at the top
      this.isNavbarHidden = true;
    }
    
    this.lastScrollTop = currentScrollTop;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  openConnectModal() {
    this.isConnectModalOpen = true;
    this.closeMenu();
    document.body.style.overflow = 'hidden';
  }

  closeConnectModal() {
    this.isConnectModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  connectViaGithub() {
    window.open(this.socialLinks.github, '_blank');
  }

  connectViaLinkedin() {
    window.open(this.socialLinks.linkedin, '_blank');
  }

  connectViaEmail() {
    const subject = encodeURIComponent("Let's Connect - Portfolio Inquiry");
    const body = encodeURIComponent(
      'Hi Shahzaib ! I would like to connect with you.'
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${this.socialLinks.email}&su=${subject}&body=${body}`,
      '_blank'
    );
  }

  connectViaWhatsapp() {
    const message = encodeURIComponent(
      'Hi Shahzaib ! I would like to connect with you.'
    );
    window.open(
      `https://wa.me/${this.socialLinks.whatsapp}?text=${message}`,
      '_blank'
    );
  }

  moveIndicator(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const navLinks = target.closest('.nav-links') as HTMLElement;
    const navRect = navLinks.getBoundingClientRect();

    this.indicatorLeft = rect.left - navRect.left;
    this.indicatorWidth = rect.width;
  }

  hideIndicator() {
    this.indicatorLeft = 0;
    this.indicatorWidth = 0;
  }
}
