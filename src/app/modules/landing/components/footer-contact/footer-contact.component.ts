import { Component, OnInit, Input } from '@angular/core';

const linkedingUrl = "https://www.linkedin.com/in/";

@Component({
    selector: 'footer-contact',
    templateUrl: './footer-contact.component.html',
    styleUrls: ['./footer-contact.component.scss']
})
export class FooterContactComponent implements OnInit {

    @Input() linkedinUserID: string;
    @Input() email: string;
    @Input() phone: string;

    fulllinkedingUrl: string = "";

    constructor() { }

    ngOnInit() {
        this.setupContactLinks();
    }


    private setupContactLinks() {
        this.fulllinkedingUrl = linkedingUrl + this.linkedinUserID;
    }
}
