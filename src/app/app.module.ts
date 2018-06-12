import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
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
import { APIDataService } from './APIDataService';
import { GuideResolver } from './GuideResolver';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatDialogRef} from '@angular/material';
import { SidenavitemComponent } from './sidenavitem/sidenavitem.component';
import { MobileNavIconComponent } from './mobile-nav-icon/mobile-nav-icon.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { NewguideComponent } from './newguide/newguide.component';
import { NewfaqComponent } from './newfaq/newfaq.component';
import {MatSelectModule} from '@angular/material/select';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { GuideFullViewComponent } from './guide-full-view/guide-full-view.component';
import {AddItemDialogComponent} from './add-item-dialog/add-item-dialog.component';
import { IconPickerComponent } from './icon-picker/icon-picker.component';
import { IconPickerModule } from 'ngx-icon-picker';
import { GuideItemComponent } from './guide-item/guide-item.component';
import { ConfirmDeletionDialogComponent } from './confirm-deletion-dialog/confirm-deletion-dialog.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage'
import { environment } from '../environments/environment';
import { NewguideitemComponent } from './newguideitem/newguideitem.component';
import { FileUploadModule } from 'ng2-file-upload';

const appRoutes: Routes = [
  { path: 'guides',
    component: GuidesComponent,
  },
  {
    path: 'guides/:id',
    component: GuideFullViewComponent,
    resolve: {
      guide: GuideResolver
    }
  },
  {
    path: 'guides/:id/new-guide',
    component: NewguideitemComponent,
    resolve: {
      guide: GuideResolver
    }
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
    GuideFullViewComponent,
    AddItemDialogComponent,
    IconPickerComponent,
    GuideItemComponent,
    ConfirmDeletionDialogComponent,
    ListHeaderComponent,
    NewguideitemComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    BrowserModule,
    FileUploadModule,
    PdfViewerModule,
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
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    IconPickerModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes,
      {enableTracing: true}) // <-- Debugging
  ],
  providers: [APIDataService, GuideResolver],
  bootstrap: [AppComponent],
  entryComponents: [AddItemDialogComponent, ConfirmDeletionDialogComponent]
})
export class AppModule { }
