import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { LocalStorageDataComponent } from './local-storage-data/local-storage-data.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditItemComponent } from './edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AddTaskComponent,
    LocalStorageDataComponent,
    DeleteItemComponent,
    EditItemComponent
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
