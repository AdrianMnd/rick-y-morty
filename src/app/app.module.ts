import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { RickYMortyService } from './api/services/rickAndMortyService.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetasComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [RickYMortyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
