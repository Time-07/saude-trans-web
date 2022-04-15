import React from 'react';
import {
  FormContato,
  TextoContato,
  ContainerInput,
  Especialidades,
  TitleEspecialista,
  ButtonSalvar,
  ContainerButton,
} from './style';
import { conselhoCelular } from '../../../util/maskInput';
import { useFormik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Alerta } from '../../Login/style';
import Input from '../../../components/Input';

const Contato = () => {
  const formik = useFormik({
    initialValues: {
      telefone: '',
      whatsapp: '',
      email: '',
      linkedIn: '',
    },
    validationSchema: yup.object({
      whatsapp: yup.string().required('O campo é obrigatório'),
      email: yup
        .string()
        .email('Email Invalido')
        .required('O campo é obrigatório'),
    }),

    onSubmit: async values => {
      console.log(values);
    },
  });

  return (
    <FormContato onSubmit={formik.handleSubmit} noValidate>
      <TextoContato>Informações de Contato</TextoContato>

      <ContainerInput>
        <Input
          name="telefone"
          type="text"
          label="Telefone (Opcional)"
          errors={formik.touched.telefone && formik.errors.telefone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={conselhoCelular(formik.values.telefone)}
          errorMsg={formik.errors.telefone}
        />
      </ContainerInput>
      <ContainerInput>
        <Input
          name="whatsapp"
          type="text"
          label="WhatsApp"
          errors={formik.touched.whatsapp && formik.errors.whatsapp}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={conselhoCelular(formik.values.whatsapp)}
          errorMsg={formik.errors.whatsapp}
        />
      </ContainerInput>
      <ContainerInput>
        <Input
          name="email"
          type="email"
          label="Email"
          errors={formik.touched.email && formik.errors.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          errorMsg={formik.errors.email}
        />
      </ContainerInput>
      <ContainerInput>
        <Input
          name="linkedIn"
          type="linkedIn"
          label="LinkedIn (opcional)"
          errors={formik.touched.linkedIn && formik.errors.linkedIn}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.linkedIn}
          errorMsg={formik.errors.linkedIn}
        />
      </ContainerInput>
      <ContainerButton>
        <ButtonSalvar type="submit">Salvar</ButtonSalvar>
      </ContainerButton>
    </FormContato>
  );
};

export default Contato;
