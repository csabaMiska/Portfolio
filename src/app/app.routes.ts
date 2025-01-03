import { Routes } from '@angular/router';
import { PageContentComponent } from './page-content/page-content.component';
import { ImpressumComponent } from './impressum/impressum.component';

export const routes: Routes = [
    {path: '', component: PageContentComponent},
    {path: 'impressum', component: ImpressumComponent},
];
