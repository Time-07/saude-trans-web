import React from 'react';
import {
  Contato,
  TextoAtendimento,
  ContainerInput,
  Especialidades,
  TitleEspecialista,
  FormAtendimento,
  ButtonSalvar,
  ContainerButton,
} from './style';
import { useFormik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Alerta } from '../../Login/style';
import Input from '../../../components/Input';

const Atendimento = () => {
  const formik = useFormik({
    initialValues: {
      precoConsulta: '',
      atendimento: '',
      convenio: '',
      banheiroLocal: '',
    },
    validationSchema: yup.object({}),
    onSubmit: async values => {
      console.log(values);
    },
  });

  return (
    <FormAtendimento onSubmit={formik.handleSubmit} noValidate>
      <Contato>
        <TextoAtendimento>Informações de Atendimento</TextoAtendimento>
      </Contato>

      <Especialidades style={{ marginTop: '1rem' }}>
        <TitleEspecialista>Modalidades do atendimento</TitleEspecialista>
        <label className="container">
          Presencial
          <input
            type="radio"
            name="atendimento"
            value="presencial"
            checked={formik.values.atendimento === 'presencial'}
            onChange={() => formik.setFieldValue('atendimento', 'presencial')}
          />
          <span className="checkmark" />
        </label>
        <label className="container">
          Online
          <input
            type="radio"
            name="atendimento"
            value="online"
            checked={formik.values.atendimento === 'online'}
            onChange={() => formik.setFieldValue('atendimento', 'online')}
          />
          <span className="checkmark" />
        </label>
        <label className="container">
          Presencial e Online
          <input
            type="radio"
            name="atendimento"
            value="presencialeOnline"
            checked={formik.values.atendimento === 'presencialeOnline'}
            onChange={() =>
              formik.setFieldValue('atendimento', 'presencialeOnline')
            }
          />
          <span className="checkmark" />
        </label>

        {formik.touched.atendimento && formik.errors.atendimento ? (
          <Alerta>{formik.errors.atendimento}</Alerta>
        ) : null}
      </Especialidades>
      <ContainerInput>
        <Input
          name="precoConsulta"
          type="text"
          label="Preço médio da consulta"
          errors={formik.touched.precoConsulta && formik.errors.precoConsulta}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.precoConsulta}
          errorMsg={formik.errors.precoConsulta}
        />
      </ContainerInput>
      <Especialidades style={{ marginTop: '1rem' }}>
        <TitleEspecialista>Faz atendimento via convênio?</TitleEspecialista>
        <label className="container">
          Sim
          <input
            type="radio"
            name="convenio"
            value="sim"
            checked={formik.values.convenio === 'sim'}
            onChange={() => formik.setFieldValue('convenio', 'sim')}
          />
          <span className="checkmark" />
        </label>
        <label className="container">
          Não
          <input
            type="radio"
            name="convenio"
            value="nao"
            checked={formik.values.convenio === 'nao'}
            onChange={() => formik.setFieldValue('convenio', 'nao')}
          />
          <span className="checkmark" />
        </label>
        {formik.touched.convenio && formik.errors.convenio ? (
          <Alerta>{formik.errors.convenio}</Alerta>
        ) : null}
      </Especialidades>
      <Especialidades style={{ marginTop: '1rem' }}>
        <TitleEspecialista>
          O banheiro do local de atendimento é inclusivo para pessoas trans?
        </TitleEspecialista>
        <label className="container">
          Sim
          <input
            type="radio"
            name="banheiroLocal"
            value="sim"
            checked={formik.values.especialidade === 'sim'}
            onChange={() => formik.setFieldValue('especialidade', 'sim')}
          />
          <span className="checkmark" />
        </label>
        <label className="container">
          Não
          <input
            type="radio"
            name="banheiroLocal"
            value="nao"
            checked={formik.values.especialidade === 'nao'}
            onChange={() => formik.setFieldValue('especialidade', 'nao')}
          />
          <span className="checkmark" />
        </label>

        {formik.touched.banheiroLocal && formik.errors.banheiroLocal ? (
          <Alerta>{formik.errors.banheiroLocal}</Alerta>
        ) : null}
      </Especialidades>

      <ContainerButton>
        <ButtonSalvar type="submit">Salvar</ButtonSalvar>{' '}
      </ContainerButton>
    </FormAtendimento>
  );
};

export default Atendimento;
