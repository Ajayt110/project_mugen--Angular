import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipArenaComponent } from './vip-arena.component';

describe('VipArenaComponent', () => {
  let component: VipArenaComponent;
  let fixture: ComponentFixture<VipArenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VipArenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VipArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
