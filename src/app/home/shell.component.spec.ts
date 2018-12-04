import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu.component';
import { ShellComponent } from './shell.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('ShellComponent', () => {
    let component: ShellComponent;
    let fixture: ComponentFixture<ShellComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [ShellComponent, MenuComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have router outlet', () => {
        const de = fixture.debugElement.query(By.directive(RouterOutlet));

        expect(de).not.toBeNull();
    });
});
