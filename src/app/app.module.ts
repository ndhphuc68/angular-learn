import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './pages/product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './stores/reducers/todo.reducer';
import { FormsModule } from '@angular/forms';

const router: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'product', component: ProductComponent },
];

@NgModule({
  declarations: [AppComponent, ProductComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule,
    StoreModule.forRoot({ todos: todoReducer }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
