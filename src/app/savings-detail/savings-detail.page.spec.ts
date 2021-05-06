import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavingsDetailPage } from './savings-detail.page';

describe('SavingsDetailPage', () => {
  let component: SavingsDetailPage;
  let fixture: ComponentFixture<SavingsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavingsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
