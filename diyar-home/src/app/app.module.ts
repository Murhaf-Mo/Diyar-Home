import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    NbThemeModule,
    NbLayoutModule,
    NbCardModule,
    NbTabsetModule,
    NbActionsModule,
    NbIconModule, NbInputModule, NbButtonModule, NbCheckboxModule, NbRadioModule, NbChatModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {NgOptimizedImage} from "@angular/common";
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ChatComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NbThemeModule.forRoot({name: 'corporate'}),
        NbLayoutModule,
        NbEvaIconsModule,
        NbCardModule,
        NbIconModule,
        NbTabsetModule,
        NbActionsModule,
        NbIconModule,
        NgOptimizedImage,
        NbInputModule,
        NbButtonModule,
        NbCheckboxModule,
        NbRadioModule,
        NbChatModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
