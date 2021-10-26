import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should find banner-class in a div tag', (() => {
    const fixture = TestBed.createComponent(BannerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.query(By.css('.banner-class'));
    expect(compiled.nativeNode.localName).toEqual('div');
  }));

  it('should render title in a h1 tag', (() => {
    const fixture = TestBed.createComponent(BannerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to my application');
  }));

  it('should render title in a h3 tag', (() => {
    const fixture = TestBed.createComponent(BannerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('This is Banner Page');
  }));

  it('should render text in a p tag', (() => {
    const fixture = TestBed.createComponent(BannerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('The custom class attribute value we will use is called banner. This class attribute value needs to be added to the parent element of the call to action section of code.');
  }));
});
