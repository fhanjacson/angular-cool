import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpstackInfoComponent } from './ipstack-info.component';

describe('IpstackInfoComponent', () => {
  let component: IpstackInfoComponent;
  let fixture: ComponentFixture<IpstackInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpstackInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpstackInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
