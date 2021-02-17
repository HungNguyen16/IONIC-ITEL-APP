import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignInThreadingComponent } from './sign-in-threading.component';

describe('SignInThreadingComponent', () => {
  let component: SignInThreadingComponent;
  let fixture: ComponentFixture<SignInThreadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInThreadingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignInThreadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
