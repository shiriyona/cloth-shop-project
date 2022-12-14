import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClothModule } from './cloth/cloth.module';
import { JewelModule } from './jewel/jewel.module';
import { HelpModule } from './help/help.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { CanActivateRouteGuard } from './core/can-activate-route.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInterceptor } from './core/http-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    ClothModule,
    JewelModule,
    HelpModule,
    SwiperModule
  ],

  providers: [CanActivateRouteGuard,
    { 
      provide: HTTP_INTERCEPTORS,  
      useClass: HttpClientInterceptor, 
      multi: true 
    }
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
