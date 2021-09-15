import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { vendedorCreate, vendedorEdit, vendedorList } from "./vendedor";

import { CarroCreate, CarroEdit, CarroList } from "./carro";

import { ClienteCreate, ClienteEdit, ClientelList } from "./cliente";

const dataProvider = jsonServerProvider("http://localhost:8080/");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="vendedor"
      list={vendedorList}
      create={vendedorCreate}
      edit={vendedorEdit}
    />
    <Resource
      name="carro"
      list={CarroList}
      create={CarroCreate}
      edit={CarroEdit}
    />
    <Resource
      name="cliente"
      list={ClientelList}
      create={ClienteCreate}
      edit={ClienteEdit}
    />
  </Admin>
);
export default App;
