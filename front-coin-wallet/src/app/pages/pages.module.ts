import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsenseModule } from 'ng2-adsense';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';

import { Pages } from './pages.component';

import { UserState } from '../user.state';

import { FacebookModule, FacebookService } from 'ngx-facebook';


@NgModule({
    imports: [
        CommonModule,
        NgaModule,
        FacebookModule.forRoot(),
        // shown passing optional global defaults
        AdsenseModule.forRoot({
            adClient: 'ca-pub-5721689054603180',
            adSlot: 6949772221,
        }),
        routing],
    declarations: [
        Pages
    ],
    providers: [
        FacebookService
    ]
})
export class PagesModule {
}
