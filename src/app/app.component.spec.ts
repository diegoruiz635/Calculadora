import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  

  beforeEach(async(() =>{
    TestBed.configureTestingModule({
      declarations:[
        AppComponent
      ],
      providers: []
    }).compileComponents();

    TestBed.configureTestingModule({
      declarations: [AppComponent]
    })
    .createComponent(AppComponent);
  }));

  it('la suma debe dar 4', async(() =>{
    (<HTMLInputElement>document.getElementById("num1")).value = '2';
    (<HTMLInputElement>document.getElementById("num2")).value = '2';
    document.getElementById('calc').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('4');
  }));
});
