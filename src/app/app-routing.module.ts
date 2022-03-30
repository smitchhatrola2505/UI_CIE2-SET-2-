import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  {path:'post',component:PostComponent},
  {path:'stock',component:StockComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'stock',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
