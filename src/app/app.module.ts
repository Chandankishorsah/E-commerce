import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './User/home/home.component';
import { MainComponent } from './User/main/main.component';
import { RegisterComponent } from './User/register/register.component';
import { LoginComponent } from './Admin/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatToolbarModule,
  MatDividerModule,
  MatFormFieldModule,
 MatInputModule, MatRadioModule, MatSliderModule, MatProgressSpinnerModule, MatTooltipModule
} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,HeaderComponent,  FooterComponent,HomeComponent,MainComponent,RegisterComponent,LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FormsModule, ReactiveFormsModule, MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatToolbarModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule, MatInputModule, MatRadioModule, MatSliderModule, MatProgressSpinnerModule, MatTooltipModule,FlexLayoutModule ,MatSelectModule,MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
