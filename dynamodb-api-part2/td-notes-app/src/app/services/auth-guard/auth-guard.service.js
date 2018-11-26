import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
export class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.isLoggedIn().then(() => {
            return true;
        }, () => {
            this.router.navigate(['login']);
            return false;
        });
    }
}
AuthGuard.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AuthGuard.ctorParameters = () => [
    { type: AuthService, },
    { type: Router, },
];
