import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { KatexModule } from 'ng-katex';
import { MarkdownModule } from 'ngx-markdown';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './base/footer/footer.component';
import { HeaderComponent } from './base/header/header.component';
import { LoginComponent } from './base/header/login/login.component';
import { RecoverPasswordComponent } from './misc/recover-password/recover-password.component';
import { AuthenticationService } from './services/authentication.service';
import { DialogService } from './services/dialog.service';
import { AddHeaderInterceptor } from './shared/header.interceptor';
import { IsLoggedInDirective } from './shared/is-logged-in.directive';
import { MatPaginatorIntlDE } from './shared/paginator-int';
import { ServermanagementComponent } from './superuser/servermanagement/servermanagement.component';
import { UsermanagementComponent } from './superuser/usermanagement/usermanagement.component';
import { ConfirmTemplateComponent } from './template/confirm-template/confirm-template.component';
import { LoginTemplateComponent } from './template/login/login-template.component';
import { ResetPasswordComponent } from './template/reset-password/reset-password.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        LoginTemplateComponent,
        ResetPasswordComponent,
        IsLoggedInDirective,
        ConfirmTemplateComponent,
        RecoverPasswordComponent,
        FooterComponent,
        ServermanagementComponent,
        UsermanagementComponent
    ],
    imports: [
        KatexModule,
        MatProgressSpinnerModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatMenuModule,
        MatChipsModule,
        MatSortModule,
        MatPaginatorModule,
        HttpClientModule,
        MatToolbarModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatGridListModule,
        MatSnackBarModule,
        MatDialogModule,
        MatTooltipModule,
        MatExpansionModule,
        MatRippleModule,
        ReactiveFormsModule,
        FormsModule,
        MarkdownModule.forRoot(),
        MarkdownModule.forRoot({ loader: HttpClient }),
        LMarkdownEditorModule
    ],
    providers: [
        AuthenticationService,
        DialogService,
        { provide: MatPaginatorIntl, useClass: MatPaginatorIntlDE },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AddHeaderInterceptor,
            multi: true
        }
    ],
    entryComponents: [LoginTemplateComponent, ResetPasswordComponent, ConfirmTemplateComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
