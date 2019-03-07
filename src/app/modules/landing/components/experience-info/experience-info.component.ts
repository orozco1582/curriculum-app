import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/types/experience.type';

@Component({
  selector: 'experience-info',
  templateUrl: './experience-info.component.html',
  styleUrls: ['./experience-info.component.scss']
})
export class ExperienceInfoComponent implements OnInit {

  @Input() experience: Experience;

  constructor() { }

  ngOnInit() {
  }

}
