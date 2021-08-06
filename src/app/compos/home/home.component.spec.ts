import { ComponentFixture, TestBed } from '@angular/core/testing';
import { waitForAsync } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('welcome test',()=>{
  //   const data=fixture.nativeElement;
  //   //expect(data.querySelector(".container").TextContent).toContain("Welcome to ShopKart")
  //   expect(data.querySelector('h1').TextContent).toBe("Welcome to ShopKart")
  // })

  it('should render title in a h1 tag', waitForAsync(() => {
       const fixture1 = TestBed.createComponent(HomeComponent);
       fixture1.detectChanges();
      const compiled = fixture1.debugElement.nativeElement;
       expect(compiled.querySelector('h1').textContent).toContain('Welcome to ShopMart')
  }));
  // it(`should have as title 'Amazon'`, waitForAsync(() => {
  //   const fixture1 = TestBed.createComponent(HomeComponent);
  //   const app1 = fixture1.debugElement.componentInstance;
  //   expect(app1.title).toEqual('app-home')
  // }
  // )
  // )

  // it(`should have as title 'Amazon'`, waitForAsync(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Amazon');
  // }));
  // it('should render title in a h1 tag', waitForAsync(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toCont

});
