import React from 'react';
import {
  Container,
  TextoContato,
  ContainerInput,
  Especialidades,
  TitleEspecialista,
  ButtonSalvar,
} from './style';

import Input from '../../../components/Input';

const Contato = () => {
  return (
    <Container>
      <TextoContato>Informações de Contato</TextoContato>

      <ContainerInput>
        <Input
          name="telefone"
          type="text"
          label="Telefone (Opcional)"
          // errors={formik.touched.telefone && formik.errors.telefone}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.telefone}
          // errorMsg={formik.errors.telefone}
        />
      </ContainerInput>
      <ContainerInput>
        <Input
          name="whatsapp"
          type="text"
          label="WhatsApp"
          // errors={formik.touched.whatsapp && formik.errors.whatsapp}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.whatsapp}
          // errorMsg={formik.errors.whatsapp}
        />
      </ContainerInput>
      <ContainerInput>
        <Input
          name="email"
          type="email"
          label="Email"
          // errors={formik.touched.email && formik.errors.email}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.email}
          // errorMsg={formik.errors.email}
        />
      </ContainerInput>
      <ContainerInput>
        <Input
          name="linkedIn"
          type="linkedIn"
          label="LinkedIn (opcional)"
          // errors={formik.touched.linkedIn && formik.errors.linkedIn}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.linkedIn}
          // errorMsg={formik.errors.linkedIn}
        />
      </ContainerInput>
      <ButtonSalvar>Salvar</ButtonSalvar>
    </Container>
  );
};

export default Contato;
