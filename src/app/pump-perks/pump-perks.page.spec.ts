import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PumpPerksPage } from './pump-perks.page';

describe('PumpPerksPage', () => {
  let component: PumpPerksPage;
  let fixture: ComponentFixture<PumpPerksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PumpPerksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PumpPerksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
