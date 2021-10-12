import { Component, OnDestroy, OnInit } from '@angular/core';

import { KatexOptions } from 'ngx-markdown';
import { Subscription } from 'rxjs';
import { User } from 'src/app/backend-datatypes/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { routePaths } from 'src/app/shared/routes.const';


@Component({
    selector: 'igs-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    user: User;
    subscription: Subscription[] = [];
    list: string[] = [];
    private _tex: string;
    public get tex(): string {
        return this._tex;
    }
    public set tex(value: string) {
        this._tex = value;
        this.list = this.tex.split(/\r?\n/g)
    }
    options: KatexOptions = {
        displayMode: true
    }
    readonly routes = routePaths;

    constructor(private readonly authService: AuthenticationService) {}

    ngOnInit() {
        this.subscription.push(this.authService.user.subscribe(user => (this.user = user)));
    }

    ngOnDestroy() {
        this.subscription.forEach(s => s.unsubscribe);
    }
}
