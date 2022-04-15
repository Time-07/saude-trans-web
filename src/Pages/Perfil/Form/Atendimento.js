import React from 'react';
import {
  Container,
  Contato,
  TextoAtendimento,
  ContainerInput,
  Especialidades,
  TitleEspecialista,
  ButtonSalvar,
} from './style';

import Input from '../../../components/Input';

const Atendimento = () => {
  return (
    <Container>
      <Contato>
        <TextoAtendimento>Informações de Atendimento</TextoAtendimento>
      </Contato>

      <Especialidades style={{ marginTop: '1rem' }}>
        <TitleEspecialista>Modalidades do atendimento</TitleEspecialista>
        <label className="container">
          Presencial
          <input
            type="radio"
            name="especialidade"
            value="endocrinologista"
            // checked={formik.values.especialidade === 'endocrinologista'}
            // onChange={() =>
            //   formik.setFieldValue('especialidade', 'endocrinologista')
            // }
          />
          <span className="checkmark" />
        </label>
        <label className="container">
          Online
          <input
            type="radio"
            name="especialidade"
            value="ginecologista"
            // checked={formik.values.especialidade === 'ginecologista'}
            // onChange={() =>
            //   formik.setFieldValue('especialidade', 'ginecologista')
            // }
          />
          <span className="checkmark" />
        </label>
        <label className="container">
          Presencial e Online
          <input
            type="radio"
            name="especialidade"
            value="psiquiatra"
            // checked={formik.values.especialidade === 'psiquiatra'}
            // onChange={() => formik.setFieldValue('especialidade', 'psiquiatra')}
          />
          <span className="checkmark" />
        </label>

        {/* {formik.touched.especialidade && formik.errors.especialidade ? (
            <Alerta>{formik.errors.especialidade}</Alerta>
          ) : null} */}
      </Especialidades>
      <ContainerInput>
        <Input
          name="preco"
          type="text"
          label="Preço médio da consulta"
          // errors={formik.touched.preco && formik.errors.preco}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.preco}
          // errorMsg={formik.errors.preco}
        />
      </ContainerInput>
      <Especialidades style={{ marginTop: '1rem' }}>
        <TitleEspecialista>Faz atendimento via convênio?</TitleEspecialista>
        <label className="container">
          Sim
          <input
            type="radio"
            name="especialidade"
            value="endocrinologista"
            // checked={formik.values.especialidade === 'endocrinologista'}
            // onChange={() =>
            //   formik.setFieldValue('especialidade', 'endocrinologista')
            // }
          />
          <span className="checkmark" />
        </label>
        <label className="container">
          Não
          <input
            type="radio"
            name="especialidade"
            value="ginecologista"
            // checked={formik.values.especialidade === 'ginecologista'}
            // onChange={() =>
            //   formik.setFieldValue('especialidade', 'ginecologista')
            // }
          />
          <span className="checkmark" />
        </label>
        {/* {formik.touched.especialidade && formik.errors.especialidade ? (
            <Alerta>{formik.errors.especialidade}</Alerta>
          ) : null} */}
      </Especialidades>
      <Especialidades style={{ marginTop: '1rem' }}>
        <TitleEspecialista>
          O banheiro do local de atendimento é inclusivo para pessoas trans?
        </TitleEspecialista>
        <label className="container">
          Sim
          <input
            type="radio"
            name="especialidade"
            value="endocrinologista"
            // checked={formik.values.especialidade === 'endocrinologista'}
            // onChange={() =>
            //   formik.setFieldValue('especialidade', 'endocrinologista')
            // }
          />
          <span className="checkmark" />
        </label>
        <label className="container">
          Não
          <input
            type="radio"
            name="especialidade"
            value="ginecologista"
            // checked={formik.values.especialidade === 'ginecologista'}
            // onChange={() =>
            //   formik.setFieldValue('especialidade', 'ginecologista')
            // }
          />
          <span className="checkmark" />
        </label>
        <label className="container">
          Atendimento apenas online
          <input
            type="radio"
            name="especialidade"
            value="psiquiatra"
            // checked={formik.values.especialidade === 'psiquiatra'}
            // onChange={() => formik.setFieldValue('especialidade', 'psiquiatra')}
          />
          <span className="checkmark" />
        </label>

        {/* {formik.touched.especialidade && formik.errors.especialidade ? (
            <Alerta>{formik.errors.especialidade}</Alerta>
          ) : null} */}
      </Especialidades>

      <ButtonSalvar>Salvar</ButtonSalvar>
    </Container>
  );
};

export default Atendimento;
