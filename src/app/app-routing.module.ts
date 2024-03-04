import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { GetDataComponent } from './get-data/get-data.component';
import { PostDataComponent } from './post-data/post-data.component';

const routes: Routes = 
[
{ path: 'about', component: AboutComponent },
{ path: 'home', component: HomeComponent },
{ path: 'templateform', component: TemplateDrivenFormComponent  },
{ path: 'reactiveform', component: ReactiveFormComponent  },
{ path: 'getdata', component: GetDataComponent },
{ path: 'postdata', component: PostDataComponent },
{ path: '', component: HomeComponent },
{path:'**',component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
