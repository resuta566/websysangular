import { BrowserModule, Title }  from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { YeonwooPipe }  from './yeonwoo.pipe';
import { GagoPipe }  from './gago.pipe';
import { CustomPipe }  from './custom.pipe';
import { BaliPipe }  from './bali.pipe';
import { ReactiveFormsModule }  from '@angular/forms';
import { FormsModule }  from '@angular/forms';
import { HttpModule }  from '@angular/http';
import { RatingComponent } from './rating/rating.component';
import { MinmaxComponent } from './minmax/minmax.component';
import { AvatarComponent } from './avatar/avatar.component';
import { LeedabinComponent } from './leedabin/leedabin.component';
import { MerchComponent } from './merch/merch.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FavoriteComponent,
    YeonwooPipe,
    GagoPipe,
    BaliPipe,
    CustomPipe,
    RatingComponent,
    MinmaxComponent,
    AvatarComponent,
    LeedabinComponent,
    MerchComponent,
    UsersComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
