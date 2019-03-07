import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableCardComponent } from './components/expandable-card/expandable-card.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ExpandableCardComponent,
        NotFoundPageComponent
    ],
    declarations: [
        ExpandableCardComponent,
        NotFoundPageComponent
    ]
})
export class SharedModule { }
