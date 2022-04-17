import React from 'react';
import {
  FormApresentacao,
  ButtonSalvar,
  TextoAtendimento,
  TextArea,
  ContainerButton,
  ContainerTextArea,
} from './style';
import { useFormik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Alerta } from '../../Login/style';

const Apresentacao = () => {
  const formik = useFormik({
    initialValues: {
      experiencia: '',
      curriculo: '',
    },
    validationSchema: yup.object({
      experiencia: yup.string().required('O campo é obrigatório'),
      curriculo: yup.string().required('O campo é obrigatório'),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <FormApresentacao onSubmit={formik.handleSubmit} noValidate>
      <TextoAtendimento>Apresentação</TextoAtendimento>
      <ContainerTextArea>
        <TextArea
          name="experiencia"
          placeholder="Experiência com pacientes trans"
          onChange={formik.handleChange}
          value={formik.values.experiencia}
        />
        {formik.touched.experiencia && formik.errors.experiencia ? (
          <Alerta>{formik.errors.experiencia}</Alerta>
        ) : null}
      </ContainerTextArea>
      <ContainerTextArea>
        <TextArea
          name="curriculo"
          placeholder="Currículo e/ou formação"
          onChange={formik.handleChange}
          value={formik.values.curriculo}
        />
        {formik.touched.curriculo && formik.errors.curriculo ? (
          <Alerta>{formik.errors.curriculo}</Alerta>
        ) : null}
      </ContainerTextArea>

      <ContainerButton>
        <ButtonSalvar type="submit" style={{ width: '99px', height: '56px' }}>
          Salvar
        </ButtonSalvar>
      </ContainerButton>
    </FormApresentacao>
  );
};

export default Apresentacao;
