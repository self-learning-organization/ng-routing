import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },                     // localhost:4200
  { path: 'users', component: UsersComponent, children: [     // localhost:4200/users
    { path: ':id/:name', component: UserComponent },    // localhost:4200/users/<id>/<name>
  ]},   
  { path: 'servers', component: ServersComponent, children: [ // localhost:4200/servers
    { path: ':id', component: ServerComponent },              // localhost:4200/servers/<id>
    { path: ':id/edit', component: EditServerComponent }      // localhost:4200/servers/<id>/edit
  ]}, 
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }                    // Wildcard route, catches all paths we don't know. 
                                                              // And list this last because routes get parsed top to bottom
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
