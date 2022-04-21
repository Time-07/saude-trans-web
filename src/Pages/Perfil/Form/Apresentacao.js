import React from 'react';
import {
  FormApresentacao,
  ButtonSalvar,
  TextoAtendimento,
  TextArea,
  ContainerButton,
  ContainerTextArea,
} from './style';
import { showToast } from '../../../util/Toast';
import { AtualizarDadosUsuario } from '../../../modules/user';
import { useFormik, ErrorMessage } from 'formik';
import { useUserData } from '../../../context/useUserData';
import * as yup from 'yup';
import { Alerta } from '../../Login/style';

const Apresentacao = () => {
  const { user, setUser } = useUserData();

  const formik = useFormik({
    initialValues: {
      experiencia: user.description || '',
      curriculo: user.courses || '',
    },
    validationSchema: yup.object({
      experiencia: yup.string().required('O campo é obrigatório'),
      curriculo: yup.string().required('O campo é obrigatório'),
    }),
    onSubmit: async values => {
      const dataForm = {
        description: values.experiencia,
        courses: values.curriculo,
      };

      try {
        // await AtualizarDadosUsuario(dataForm);
        setUser({ ...user, ...dataForm });
        showToast('success', 'Dados Atualizados com sucesso');
      } catch (error) {
        showToast('error', 'Erro ao atualizar');
      }
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
