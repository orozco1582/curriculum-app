import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'expandable-card',
    templateUrl: './expandable-card.component.html',
    styleUrls: ['./expandable-card.component.scss']
})
export class ExpandableCardComponent implements OnInit {

    @Input() icon: string;
    @Input() title: string;

    expanded: boolean = true;
    iconExpand: string = 'keyboard_arrow_up';

    constructor() { }

    ngOnInit() {
    }

    toggle(): void {
        this.iconExpand = this.expanded ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
        this.expanded = !this.expanded;
    }

}
