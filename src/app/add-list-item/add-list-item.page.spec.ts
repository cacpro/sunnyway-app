import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddListItemPage } from './add-list-item.page';

describe('AddListItemPage', () => {
  let component: AddListItemPage;
  let fixture: ComponentFixture<AddListItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddListItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddListItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
