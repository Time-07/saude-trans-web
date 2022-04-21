import React from 'react';
import { useFormik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { cpfMask } from '../../../util/maskInput';
import { RegisterUser, TipoUsuario } from '../../../modules/user';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { Alerta } from '../../Login/style';
import {
  ButtonCadastro,
  FormContainer,
  Informacoes,
  FormCadastro,
  TextoFinal,
  TextoInfo,
  Texto,
  ContainerInput,
  Especialidades,
  TitleEspecialista,
} from '../style.js';

import Input from '../../../components/Input';
import { useCadastro } from '../../../context/useCadastro';

const CadastroForm = () => {
  const { setStep, setData, data } = useCadastro();

  const formik = useFormik({
    initialValues: {
      email: '',
      senha: '',
      nome: '',
      identidadeGenero: '',
      cpf: '',
      especialidade: '',
      confirmaSenha: '',
    },
    validationSchema: yup.object({
      nome: yup.string().required('O campo é obrigatório'),
      email: yup
        .string()
        .email('Email Invalido')
        .required('O campo é obrigatório'),
      senha: yup.string().required('O campo é obrigatório'),
      confirmaSenha: yup
        .string()
        .oneOf([yup.ref('senha'), null], 'Senha precisa ser igual'),
      identidadeGenero: yup.string().required('O campo é obrigatório'),
      especialidade: yup.string().required('O campo é obrigatório'),
      cpf: yup
        .string()
        .min(11, 'dados incompleto')
        .required('O campo é obrigatório'),
    }),
    onSubmit: async values => {
      try {
        const tipoUsuario = {
          name: 'Profissional',
        };
        const response = await TipoUsuario(tipoUsuario);

        const dataForm = {
          name: values.nome,
          email: values.email,
          password: values.senha,
          cpf: values.cpf,
          gender: values.identidadeGenero,
          specialty: values.especialidade,
          crmCrp: data.numeroConselho,
          role_id: response.id,
        };

        await RegisterUser(dataForm);
        setStep(5);
      } catch (error) {
        Alerta('Erro ao cadastrar', 'error');
      }
    },
  });

  return (
    <>
      <Texto>
        <strong> Última etapa:</strong>preencha as informações para o seu acesso
        e suas informações pessoais.
      </Texto>
      <FormCadastro onSubmit={formik.handleSubmit} noValidate>
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
            name="senha"
            type="password"
            label="Senha"
            errors={formik.touched.senha && formik.errors.senha}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.senha}
            errorMsg={formik.errors.senha}
          />
        </ContainerInput>
        <ContainerInput>
          <Input
            name="confirmaSenha"
            type="password"
            label="Confirmar senha"
            errors={formik.touched.confirmaSenha && formik.errors.confirmaSenha}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmaSenha}
            errorMsg={formik.errors.confirmaSenha}
          />
        </ContainerInput>

        <ContainerInput>
          <Input
            name="nome"
            type="text"
            label="Nome"
            errors={formik.touched.nome && formik.errors.nome}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nome}
            errorMsg={formik.errors.nome}
          />
        </ContainerInput>
        <ContainerInput>
          <FormControl
            fullWidth
            error={
              formik.errors.identidadeGenero && formik.touched.identidadeGenero
                ? true
                : false
            }
          >
            <InputLabel id="selectGenero">identidade de gênero</InputLabel>
            <Select
              name="identidadeGenero"
              labelId="selectGenero"
              value={formik.values.identidadeGenero}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              label="identidade de gênero"
              sx={{ height: '67px', borderRadius: '8px', width: '570px' }}
            >
              <MenuItem value="HC">Homem Cisgênero</MenuItem>
              <MenuItem value="HT">Homem Transgênero</MenuItem>
              <MenuItem value="MC">Mulher Cisgênero</MenuItem>
              <MenuItem value="MT">Mulher Transgênero</MenuItem>
              <MenuItem value="GN">Gênero não Binário</MenuItem>
              <MenuItem value="Outra">Outra</MenuItem>
            </Select>
            <FormHelperText sx={{ color: '#c0392b', fontSize: '14px' }}>
              {formik.touched.identidadeGenero && formik.errors.identidadeGenero
                ? formik.errors.identidadeGenero
                : null}
            </FormHelperText>
          </FormControl>
        </ContainerInput>
        <ContainerInput>
          <Input
            name="cpf"
            type="text"
            label="CPF"
            errors={formik.touched.cpf && formik.errors.cpf}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={cpfMask(formik.values.cpf)}
            errorMsg={formik.errors.cpf}
          />
        </ContainerInput>

        <Especialidades style={{ marginTop: '1rem' }}>
          <TitleEspecialista>Especialidade médica</TitleEspecialista>
          <label className="container">
            Endocrinologista
            <input
              type="radio"
              name="especialidade"
              value="endocrinologista"
              checked={formik.values.especialidade === 'endocrinologista'}
              onChange={() =>
                formik.setFieldValue('especialidade', 'endocrinologista')
              }
            />
            <span className="checkmark" />
          </label>
          <label className="container">
            Ginecologista
            <input
              type="radio"
              name="especialidade"
              value="ginecologista"
              checked={formik.values.especialidade === 'ginecologista'}
              onChange={() =>
                formik.setFieldValue('especialidade', 'ginecologista')
              }
            />
            <span className="checkmark" />
          </label>
          <label className="container">
            Psiquiatra
            <input
              type="radio"
              name="especialidade"
              value="psiquiatra"
              checked={formik.values.especialidade === 'psiquiatra'}
              onChange={() =>
                formik.setFieldValue('especialidade', 'psiquiatra')
              }
            />
            <span className="checkmark" />
          </label>
          <label className="container">
            Urologista
            <input
              type="radio"
              name="especialidade"
              value="urologista"
              checked={formik.values.especialidade === 'urologista'}
              onChange={() =>
                formik.setFieldValue('especialidade', 'urologista')
              }
            />
            <span className="checkmark" />
          </label>
          <label className="container">
            Psicólogo(a)
            <input
              type="radio"
              name="especialidade"
              value="urologista"
              checked={formik.values.especialidade === 'urologista'}
              onChange={() =>
                formik.setFieldValue('especialidade', 'urologista')
              }
            />
            <span className="checkmark" />
          </label>

          {formik.touched.especialidade && formik.errors.especialidade ? (
            <Alerta>{formik.errors.especialidade}</Alerta>
          ) : null}
        </Especialidades>

        <Informacoes style={{ marginTop: '1rem' }}>
          <TextoFinal>Antes de continuar</TextoFinal>
          <TextoInfo style={{ marginTop: '1rem' }}>
            As pessoas trans sofrem diariamente desrespeito e violência verbal
            quanto à sua identidade de gênero. Um dos principais objetivos dessa
            plataforma é que essas pessoas possam ter atendimento médico sem
            precisar se preocupar com esse tipo de discriminação.
            <br />
            <br />
            Portanto, ao finalizar o seu cadastro você estará se comprometendo
            em tratar os pacientes e as pacientes trans que você tiver contato
            com o máximo respeito e empatia, assim como estará concordando com
            nossos demais{' '}
            <span style={{ textDecoration: 'underline' }}>
              Termos de Uso e Responsabilidade.
            </span>
            <br /> <br /> Combinado? ;)
          </TextoInfo>
        </Informacoes>
        <ButtonCadastro
          type="submit"
          style={{ width: '195px', height: '56px', marginTop: '1rem' }}
        >
          Finalizar Cadastro
        </ButtonCadastro>
      </FormCadastro>
    </>
  );
};

export default CadastroForm;
