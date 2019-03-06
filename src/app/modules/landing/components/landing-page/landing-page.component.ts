import { Component, OnInit } from '@angular/core';
import { CVService } from 'src/services';
import { Person } from 'src/types';

@Component({
    selector: 'landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

    busy: boolean = false;
    person: Person;

    constructor(private CVService: CVService) { }

    ngOnInit() {
        this.getCVInfo();
    }

    private getCVInfo() {
        this.busy = true;
        this.CVService.getCVInfo().subscribe(response => {
            this.person = Person.import(response[0]);
            setTimeout(() => {
                this.busy = false;
            }, 1500);
        });
    }
}
