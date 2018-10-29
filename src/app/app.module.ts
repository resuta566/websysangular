import { BrowserModule, Title }  from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { YeonwooPipe }  from './yeonwoo.pipe';
import { GagoPipe }  from './gago.pipe';
import { CustomPipe }  from './custom.pipe';
import { RouterModule }  from '@angular/router';
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
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about/about.component';
import { OnepostComponent } from './onepost/onepost.component';

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
    NavBarComponent,
    HomeComponent,
    PostsComponent,
    AboutComponent,
    OnepostComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'users', component:UsersComponent},
      {path: 'posts/:id', component:OnepostComponent},
      {path: 'posts', component:PostsComponent},
      {path: 'about', component:AboutComponent},

    ])
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
