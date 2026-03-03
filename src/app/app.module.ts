import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerModule } from './components/spinner/spinner.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';

import { SpinnerInterceptor } from './components/interceptors/spinner.interceptor';
import { AuthInterceptor } from './components/interceptors/auth.interceptor';
import { MockBackendInterceptor } from './core/interceptors/mock-backend.interceptor';

import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angularMaterial/angular-material/angular-material.module';
import { TokenInterceptor } from './components/interceptors/token.interceptor';
import { MessageInterceptor } from './components/interceptors/message.interceptor';
import { PipesModule } from './pipes/pipes.module';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [AppComponent, ErrorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
    ComponentsModule,
    HttpClientModule,
    SpinnerModule,
    PipesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return sessionStorage.getItem('token');
        },
      },
    }),
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MockBackendInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: MessageInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
