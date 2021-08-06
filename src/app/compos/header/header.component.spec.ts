import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { waitForAsync } from '@angular/core/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render ShopMart title in a a tag', waitForAsync(() => {

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('ShopMart');
  }));
  it('should have Home a(RouterLink) tag', waitForAsync(() => {
    fixture.detectChanges();
    let ProductsRouterLink = fixture.debugElement.query(By.css('.nav-link')).nativeElement.getAttribute('routerLink');
    expect(ProductsRouterLink).toContain("home");
  }));

  // it('should have Products a(RouterLink) tag', waitForAsync(() => {
  //   fixture.detectChanges();
  //   let ProductsRouterLink = fixture.debugElement.query(By.css('.navbar-nav')).nativeElement.getAttribute('routerLink');
  //   expect(ProductsRouterLink).toContain("products");
  // }));
  
});
