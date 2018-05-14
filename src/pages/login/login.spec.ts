import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { LoginPage } from './login';
import { IonicModule, NavController, DeepLinker } from 'ionic-angular';
import { NavMock, DeepLinkerMock } from '../../../test-config/mocks-ionic';
import { By } from "@angular/platform-browser";

describe('Login Page', () => {

    let de: DebugElement;
    let instance: LoginPage;
    let comp: LoginPage;
    let fixture: ComponentFixture<LoginPage>;
    // let username: HTMLInputElement;
    // let password: HTMLInputElement;
    let btnLogin: HTMLInputElement;


    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [LoginPage],
            imports: [
                IonicModule.forRoot(LoginPage)
            ],
            providers: [
                { provide: DeepLinker, useClass: DeepLinkerMock },
                { provide: NavController, useClass: NavMock }
            ]
        });

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginPage);
        instance = fixture.debugElement.componentInstance;
        comp = fixture.componentInstance;
        // username = fixture.debugElement.query(By.css('.username')).nativeElement;
        // password = fixture.debugElement.query(By.css('.password')).nativeElement;
        btnLogin = fixture.debugElement.query(By.css('.btnLogin')).nativeElement;
    });

    it('should be create login component', () => {
        expect(comp instanceof LoginPage).toBe(true);
    });

    it('should be init input username to empty', () => {
        expect(instance.username).toBeUndefined();
    });

    it('should be init input password to empty', () => {
        expect(instance.password).toBeUndefined();
    });

    it('should be init disable button login', () => {
        fixture.detectChanges();
        expect(btnLogin.disabled).toBe(true);
    });

    it('should be fill input username', () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            instance.username = 'user01';
            expect(instance.username).toBe('user01');
            expect(btnLogin.disabled).toBe(true);
        });
    });

    it('should be fill input password', () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            instance.password = 'password1234';
            expect(instance.password).toBe('password1234');
            expect(btnLogin.disabled).toBe(true);
        });
    });

    it('should be fill input username and password', () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            instance.username = 'user01';
            instance.password = 'password1234';
            fixture.detectChanges();
            expect(instance.username).toBe('user01');
            expect(instance.password).toBe('password1234');
            expect(btnLogin.disabled).toBe(false);
        });
    });

});