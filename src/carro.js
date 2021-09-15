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

export const CarroList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="modelo" />
      <TextField source="valor" />
      <TextField source="fabricante" />
      <TextField source="vendedor" />

      <EditButton />
    </Datagrid>
  </List>
);

export const CarroEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="modelo" />
      <TextInput source="valor" />
      <TextInput source="fabricante" />
      <TextInput source="vendedor" />
    </SimpleForm>
  </Edit>
);

export const CarroCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="modelo" />
      <TextInput source="valor" />
      <TextInput source="fabricante" />
      <TextInput source="vendedor" />
    </SimpleForm>
  </Create>
);
