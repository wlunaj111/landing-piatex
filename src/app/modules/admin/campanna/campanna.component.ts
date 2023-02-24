import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-campanna',
  templateUrl: './campanna.component.html',
  styleUrls: ['./campanna.component.scss']
})
export class CampannaComponent {

  favoriteSeason: string = '';
  seasons: string[] = ['Ventas. Impulsar las ventas online, en la aplicación, por teléfono o en la tienda', 'Clientes potenciales. LLega a un gran número de usuarios y aumenta la notoriedad',
   'Cobertura y notoriedad de marca. Impulsa las visitas a tiendas locales, incluidos restaurantes y concesionarios', 'Crear una campaña sin un objetivo concreto'];

  selectTipo: string = '';
  tiposCampannas: string[] = ['Display', 'Video',];

  selectSegmentacion: string = '';
  tiposSegmentacion: string[] = ['Nacional', 'Internacional',];

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  toppings = new FormControl('');
  toppingList: string[] = ['Isla de la Juventud', 'Pinar del Río', 'La Habana', 'Matanzas', 'Cienfuegos', 'Villa Clara',
  'Camagüey','Las Tunas','Santiago de Cuba','Guantánamo','Artemisa','Mayabeque','Granma','Holguín','Ciego de Ávila','Sancti Spíritus'];


  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
}
