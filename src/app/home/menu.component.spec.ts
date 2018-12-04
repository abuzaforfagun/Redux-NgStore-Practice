import { AuthService } from './../user/auth.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { Router, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';
import { link } from 'fs';
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

    it('should display title ', () => {
        const title = 'Hello World';
        component.pageTitle = title;
        fixture.detectChanges();

        const element: HTMLElement = fixture.debugElement.query(By.css('.navbar-brand')).nativeElement;

        expect(element.innerText).toBe(title);
    });

    it('should have login link ', () => {
        const elements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

        expect(elements.find(de => de.properties['href'] === '/login'));
    });

    it('should have products link ', () => {
        const elements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

        expect(elements.find(de => de.properties['href'] === '/products'));
    });

    it('should have welcome link ', () => {
        const elements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

        expect(elements.find(de => de.properties['href'] === '/welcome'));
    });

    it('logout() should call when logout button clicked', () => {
        const links = fixture.debugElement.queryAll(By.css('.nav-link'));
        const logOutLink = links.find(da => da.nativeElement.innerText.contains('Log Out'));
        console.log(logOutLink);
        // const spy = spyOn(authService, 'logout');
        // // links.find(i => i.attributes['value'] === 'lo')
        // fixture.detectChanges();
        // logOutLink.nativeElement.click();
        // expect(spy).toHaveBeenCalled();
    });
});
