import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'legal-notice', component: LegalNoticeComponent}
];