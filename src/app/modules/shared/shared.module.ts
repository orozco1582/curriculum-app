import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableCardComponent } from './components/expandable-card/expandable-card.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ExpandableCardComponent
    ],
    declarations: [
        ExpandableCardComponent
    ]
})
export class SharedModule { }
