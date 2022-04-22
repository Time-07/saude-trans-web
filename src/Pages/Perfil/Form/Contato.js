import React from 'react';
import {
  FormContato,
  TextoContato,
  ContainerInput,
  ButtonSalvar,
  ContainerButton,
} from './style';
import { AtualizarDadosUsuario } from '../../../modules/user';
import { showToast } from '../../../util/Toast';
import InputMask from 'react-input-mask';
import { useUserData } from '../../../context/useUserData';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Input from '../../../components/Input';

const Contato = () => {
  const { user, setUser, setStep } = useUserData();

  const formik = useFormik({
    initialValues: {
      telefone: user.phone || '',
      whatsapp: user.cellPhone || '',
      email: user.email || '',
    },
    validationSchema: yup.object({
      whatsapp: yup.string().required('O campo é obrigatório'),
      email: yup
        .string()
        .email('Email Invalido')
        .required('O campo é obrigatório'),
    }),

    onSubmit: async values => {
      const dataForm = {
        id: user.id,
        phone: values.telefone,
        cellPhone: values.whatsapp,
        email: values.email,
      };

      try {
        await AtualizarDadosUsuario(dataForm);
        setUser({ ...user, ...dataForm });
        setStep(3);
        showToast('success', 'Dados Atualizados com sucesso');
      } catch (error) {
        showToast('error', 'Erro ao atualizar');
      }
    },
  });

  return (
    <FormContato onSubmit={formik.handleSubmit} noValidate>
      <TextoContato>Informações de Contato</TextoContato>

      <ContainerInput>
        <InputMask
          mask="(99) 99999-9999"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.telefone}
        >
          {() => (
            <Input
              name="telefone"
              type="text"
              label="Telefone (Opcional)"
              errors={formik.touched.telefone && formik.errors.telefone}
              errorMsg={formik.errors.telefone}
            />
          )}
        </InputMask>
      </ContainerInput>
      <ContainerInput>
        <InputMask
          mask="(99) 99999-9999"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.whatsapp}
        >
          {() => (
            <Input
              name="whatsapp"
              type="text"
              label="WhatsApp"
              errors={formik.touched.whatsapp && formik.errors.whatsapp}
              errorMsg={formik.errors.whatsapp}
            />
          )}
        </InputMask>
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

      <ContainerButton>
        <ButtonSalvar type="submit">Salvar e Continuar</ButtonSalvar>
      </ContainerButton>
    </FormContato>
  );
};

export default Contato;
