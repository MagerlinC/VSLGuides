import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { GuidesComponent } from './guides/guides.component';
import { FaqlistComponent } from './faqlist/faqlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GuideComponent } from './guide/guide.component';
import { FaqitemComponent } from './faqitem/faqitem.component';
import { DataService } from './DataService';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatDialogRef} from '@angular/material';
import { SidenavitemComponent } from './sidenavitem/sidenavitem.component';
import { MobileNavIconComponent } from './mobile-nav-icon/mobile-nav-icon.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { NewguideComponent } from './newguide/newguide.component';
import { NewfaqComponent } from './newfaq/newfaq.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

const appRoutes: Routes = [
  { path: 'guides',
    component: GuidesComponent,
  },
  { path: 'FAQ', component: FaqlistComponent,
  },
  {
    path: 'new-guide', component: NewguideComponent,
  },
  {
    path: 'new-faq', component: NewfaqComponent,
  },
  { path: '',
    redirectTo: '/guides',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent  }
];

@NgModule({
  declarations: [
    AppComponent,
    GuidesComponent,
    FaqlistComponent,
    PagenotfoundComponent,
    GuideComponent,
    FaqitemComponent,
    SidenavitemComponent,
    MobileNavIconComponent,
    NewguideComponent,
    NewfaqComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes,
      {enableTracing: true}) // <-- Debugging
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
