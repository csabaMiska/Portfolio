import { Routes } from '@angular/router';
import { PageContentComponent } from './page-content/page-content.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {path: '', component: PageContentComponent},
    {path: 'impressum', component: ImpressumComponent},
    {path: 'privacypolicy', component: PrivacyPolicyComponent},
];
