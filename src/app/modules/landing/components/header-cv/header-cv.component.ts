import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'header-cv',
    templateUrl: './header-cv.component.html',
    styleUrls: ['./header-cv.component.scss']
})
export class HeaderCvComponent implements OnInit {

    @Input() name: string;
    @Input() location: string;
    @Input() occupation: string;

    constructor() { }

    ngOnInit() {
    }

}
