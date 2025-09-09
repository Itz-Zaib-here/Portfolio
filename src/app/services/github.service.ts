import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project, PROJECTS } from '../data/portfolio-data';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  getRepositories(): Observable<Project[]> {
    return of(PROJECTS); // hardcoded data, no API call
  }
}
