import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Project } from '../../data/portfolio-data';
import { GitHubService } from '../../services/github.service';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule , NgFor],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('600ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('flipIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'rotateY(90deg)' }),
        animate('800ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', style({ opacity: 1, transform: 'rotateY(0deg)' }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('600ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(100, [
            animate('600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('projectsSection') projectsSection!: ElementRef;
  @ViewChild('projectsGrid') projectsGrid!: ElementRef;

  projects: Project[] = [];
  filteredProjects: Project[] = [];
  searchTerm: string = '';
  currentCategory: string = 'all';
  isVisible: boolean = true;
  isLoading: boolean = true;
  error: string | null = null;

  constructor(
    private githubService: GitHubService,
    private animationService: AnimationService
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  ngAfterViewInit(): void {
    this.setupAnimations();
        setTimeout(() => {
      this.triggerAboutAnimations();
    }, 100);
  }

  loadProjects(): void {
    this.isLoading = true;
    this.error = null;
    
    this.githubService.getRepositories().subscribe({
      next: (projects) => {
        this.projects = projects;
        this.applyFilters();
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading projects:', err);
        this.error = 'Failed to load projects from GitHub';
        this.isLoading = false;
      }
    });
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  filterByCategory(category: string): void {
    this.currentCategory = category;
    this.applyFilters();
  }

  private applyFilters(): void {
    const searchLower = this.searchTerm.trim().toLowerCase();

    const matchesSearch = (project: Project): boolean => {
      if (!searchLower) return true;
      return (
        project.name.toLowerCase().includes(searchLower) ||
        (!!project.description && project.description.toLowerCase().includes(searchLower)) ||
        (!!project.language && project.language.toLowerCase().includes(searchLower)) ||
        (!!project.topics && project.topics.some(topic => topic.toLowerCase().includes(searchLower)))
      );
    };

    const matchesCategory = (project: Project): boolean => {
      if (this.currentCategory === 'all') return true;
      const category = this.currentCategory.toLowerCase();
      const inTopics = Array.isArray(project.topics) && project.topics.some(t => t.toLowerCase() === category);
      const inLanguage = !!project.language && project.language.toLowerCase() === category;
      return inTopics || inLanguage;
    };

    this.filteredProjects = this.projects.filter(p => matchesSearch(p) && matchesCategory(p));
  }

  openProject(project: Project, target: EventTarget | null): void {
    if (target instanceof HTMLElement) {
      this.animationService.animateButtonClick(target);
    }
    if (project.html_url) {
      window.open(project.html_url, '_blank');
    }
  }

  private setupAnimations(): void {
    if (this.projectsSection) {
      this.animationService.observeElement(this.projectsSection, (isVisible) => {
        if (isVisible) {
          this.isVisible = true;
        }
      });
    }

    if (this.projectsGrid) {
      this.animationService.observeElement(this.projectsGrid, (isVisible) => {
        if (isVisible) {
          this.triggerProjectAnimations();
        }
      });
    }
  }

  private triggerProjectAnimations(): void {
    if (this.projectsGrid?.nativeElement) {
      const projectCards = this.projectsGrid.nativeElement.querySelectorAll('.project-card');
      projectCards.forEach((card: HTMLElement, index: number) => {
        setTimeout(() => {
          // this.animationService.addFloatingAnimation({ nativeElement: card } as ElementRef);
          this.animationService.addGlowEffect({ nativeElement: card } as ElementRef);
        }, index * 100);
      });
    }
  }
  private triggerAboutAnimations() {
    // Add floating animations to skill items
    const skillItems = this.projectsSection?.nativeElement?.querySelectorAll('.skill-item');
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
    const skillIcons = this.projectsSection?.nativeElement?.querySelectorAll('.skill-item i');
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
    const skillItemsHover = this.projectsSection?.nativeElement?.querySelectorAll('.skill-item');
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
