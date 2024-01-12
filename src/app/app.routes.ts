import { Routes } from '@angular/router';
import { ProfileGalleryComponent } from './layout/profile-gallery/profile-gallery.component';
import { SetupDateComponent } from './layout/setup-date/setup-date.component';

export const routes: Routes = [
    {path: '', component: ProfileGalleryComponent},
    {path: 'setup-date/:name', component: SetupDateComponent}
];
