import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './clientes/clientes.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { NuevoUserComponent } from './users/nuevo-user/nuevo-user.component';
import { EditarUserComponent } from './users/editar-user/editar-user.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { NuevoClienteComponent } from './clientes/nuevo-cliente/nuevo-cliente.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { NuevoTrabajadorComponent } from './trabajadores/nuevo-trabajador/nuevo-trabajador.component';
import { EditarTrabajadorComponent } from './trabajadores/editar-trabajador/editar-trabajador.component';
import { PlatosComponent } from './platos/platos.component';
import { NuevoPlatoComponent } from './platos/nuevo-plato/nuevo-plato.component';
import { EditarPlatoComponent } from './platos/editar-plato/editar-plato.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { NuevoPedidoComponent } from './pedidos/nuevo-pedido/nuevo-pedido.component';
import { EditarPedidoComponent } from './pedidos/editar-pedido/editar-pedido.component';
import { OrdenComponent } from './orden/orden.component';
import { NuevoOrdenComponent } from './orden/nuevo-orden/nuevo-orden.component';
import { EditarOrdenComponent } from './orden/editar-orden/editar-orden.component';
import { PedidoDetalleComponent } from './pedido-detalle/pedido-detalle.component';
import { NuevoPedidoDetalleComponent } from './pedido-detalle/nuevo-pedido-detalle/nuevo-pedido-detalle.component';
import { EditarPedidoDetalleComponent } from './pedido-detalle/editar-pedido-detalle/editar-pedido-detalle.component';
import { DocumentoVentaComponent } from './documento-venta/documento-venta.component';
import { NuevoDocumentoVentaComponent } from './documento-venta/nuevo-documento-venta/nuevo-documento-venta.component';
import { EditarDocumentoVentaComponent } from './documento-venta/editar-documento-venta/editar-documento-venta.component';

const routers:Routes=[
  { path:'',redirectTo:'/principal/login',pathMatch:'full'},
  { path:'principal', component:PrincipalComponent},
  { path: 'principal/login', component:LoginComponent},

  { path: 'principal/users', component:UsersComponent},
  { path: 'principal/users/nuevo', component:NuevoUserComponent},
  { path: 'principal/users/editar', component:EditarUserComponent},
  { path: 'principal/users/editar/:id', component:EditarUserComponent},

  { path: 'principal/cliente', component:ClientesComponent},
  { path: 'principal/cliente/nuevo', component:NuevoClienteComponent},
  { path: 'principal/cliente/editar', component:EditarClienteComponent},
  { path: 'principal/cliente/editar/:id', component:EditarClienteComponent},

  { path: 'principal/trabajador', component:TrabajadoresComponent},
  { path: 'principal/trabajador/nuevo', component:NuevoTrabajadorComponent},
  { path: 'principal/trabajador/editar', component:EditarTrabajadorComponent},
  { path: 'principal/trabajador/editar/:id', component:EditarTrabajadorComponent},

  { path: 'principal/pedido', component:PedidosComponent},
  { path: 'principal/pedido/nuevo', component:NuevoPedidoComponent},
  { path: 'principal/pedido/editar', component:EditarPedidoComponent},
  { path: 'principal/pedido/editar/:id', component:EditarPedidoComponent},

  { path: 'principal/plato', component:PlatosComponent},
  { path: 'principal/plato/nuevo', component:NuevoPlatoComponent},
  { path: 'principal/plato/editar', component:EditarPlatoComponent},
  { path: 'principal/plato/editar/:id', component:EditarPlatoComponent},

  { path: 'principal/orden', component:OrdenComponent},
  { path: 'principal/orden/nuevo', component:NuevoOrdenComponent},
  { path: 'principal/orden/editar', component:EditarOrdenComponent},
  { path: 'principal/orden/editar/:id', component:EditarOrdenComponent},

  { path: 'principal/pedidoDetalle', component:PedidoDetalleComponent},
  { path: 'principal/pedidoDetalle/nuevo', component:NuevoPedidoDetalleComponent},
  { path: 'principal/pedidoDetalle/editar', component:EditarPedidoDetalleComponent},
  { path: 'principal/pedidoDetalle/editar/:id', component:EditarPedidoDetalleComponent},

  { path: 'principal/documentoVenta', component:DocumentoVentaComponent},
  { path: 'principal/documentoVenta/nuevo', component:NuevoDocumentoVentaComponent},
  { path: 'principal/documentoVenta/editar', component:EditarDocumentoVentaComponent},
  { path: 'principal/documentoVenta/editar/:id', component:EditarDocumentoVentaComponent},
  

]

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ClientesComponent,
    LoginComponent,
    UsersComponent,
    NuevoUserComponent,
    EditarUserComponent,
    EditarClienteComponent,
    NuevoClienteComponent,
    TrabajadoresComponent,
    NuevoTrabajadorComponent,
    EditarTrabajadorComponent,
    PlatosComponent,
    NuevoPlatoComponent,
    EditarPlatoComponent,
    PedidosComponent,
    NuevoPedidoComponent,
    EditarPedidoComponent,
    OrdenComponent,
    NuevoOrdenComponent,
    EditarOrdenComponent,
    PedidoDetalleComponent,
    NuevoPedidoDetalleComponent,
    EditarPedidoDetalleComponent,
    DocumentoVentaComponent,
    NuevoDocumentoVentaComponent,
    EditarDocumentoVentaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routers),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
