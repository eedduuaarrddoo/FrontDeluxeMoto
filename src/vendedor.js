import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  Create,
} from "react-admin";

export const vendedorList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="nome" />

      <EditButton />
    </Datagrid>
  </List>
);

export const vendedorEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="nome" />
    </SimpleForm>
  </Edit>
);

export const vendedorCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nome" />
    </SimpleForm>
  </Create>
);
