import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmadeusRoutingModule } from './amadeus-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { AmadeusService } from './amadeus.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './amadeus.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AmadeusEffects } from './amadeus.effects';
import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
import { HotelDetailComponent } from './hotel/hotel-detail/hotel-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AmadeusRoutingModule,
    LayoutModule,
    StoreModule.forFeature('amadeus', reducers),
    EffectsModule.forFeature([AmadeusEffects])
  ],
  declarations: [HotelListComponent, HotelDetailComponent],
  providers: [AmadeusService],
  exports: [HotelListComponent, HotelDetailComponent]
})
export class AmadeusModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AmadeusModule,
      providers: [AmadeusService]
    };
  }
}
