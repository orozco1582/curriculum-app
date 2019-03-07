import { Component, OnInit } from '@angular/core';
import { CVService, GITService } from 'src/services';
import { Person, Repository } from 'src/types';

@Component({
    selector: 'landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

    busy: boolean = false;
    person: Person;
    repos: Array<Repository> = [];

    constructor(private CVService: CVService,
                private GITService: GITService) { }

    ngOnInit() {
        this.getCVInfo();
        this.getRepos();
    }

    private getCVInfo() {
        this.busy = true;
        this.CVService.getCVInfo().subscribe(
            response => {
                this.person = Person.import(response[0]);
                setTimeout(() => {
                    this.busy = false;
                }, 1000);
            },
            error => {
                console.warn(error);
            }
        );
    }

    private getRepos(){
        this.GITService.getReposByUserID("orozco1582").subscribe(
            response => {
                response.forEach(repo => {
                    this.repos.push(Object.assign(new Repository(), repo));
                });
            },
            error => {
                console.warn(error);
            }
        );
    }
}
