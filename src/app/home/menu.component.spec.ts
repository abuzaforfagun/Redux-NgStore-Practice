import { AuthService } from './../user/auth.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { Router } from '@angular/router';
class RouterStub {
    navigate(params) {

    }
}
describe('MenuComponent', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;
    let authService: AuthService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [MenuComponent],
            providers: [
                { provide: Router, useClass: RouterStub }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call logout method of auth service', () => {
        authService = TestBed.get(AuthService);
        const spy = spyOn(authService, 'logout');
        component.logOut();

        expect(spy).toHaveBeenCalled();
    });
});
