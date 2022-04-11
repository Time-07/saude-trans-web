import React from 'react';
import { useFormik, ErrorMessage } from 'formik';
import * as yup from 'yup';
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
} from '../style.js';

import Input from '../../../components/Input';
import { useCadastro } from '../../../context/useCadastro';

const CadastroForm = () => {
  const { setStep, setData, data } = useCadastro();

  console.log(data);

  const formik = useFormik({
    initialValues: {
      email: '',
      senha: '',
      numeroConselho: data.numeroConselho,
      estadoConselho: data.estadoConselho,
      nome: '',
      identidadeGenero: '',
      cpf: '',
    },
    validationSchema: yup.object({
      email: yup.string().required('O campo é obrigatório'),
      senha: yup.string().required('O campo é obrigatório'),
      numeroConselho: yup.string().required('O campo é obrigatório'),
      estadoConselho: yup.string().required('O campo é obrigatório'),
      nome: yup.string().required('O campo é obrigatório'),
      identidadeGenero: yup.string().required('O campo é obrigatório'),
      cpf: yup.number().required('O campo é obrigatório'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      setStep(5);
    },
  });

  return (
    <>
      <Texto>
        Última etapa: preencha as informações para o seu acesso e suas
        informações pessoais.
      </Texto>
      <FormCadastro onSubmit={formik.handleSubmit} noValidate>
        <ContainerInput>
          <Input
            id="email"
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
            id="senha"
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
            id="senha"
            type="password"
            label="Confirmar senha"
            errors={formik.touched.senha && formik.errors.senha}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.senha}
            errorMsg={formik.errors.senha}
          />
        </ContainerInput>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '1rem',
            width: '100%',
            gap: ' 20px',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: '50%' }}>
            <Input
              id="numeroConselho"
              type="text"
              label="CRM/CRP"
              disabled
              errors={
                formik.touched.numeroConselho && formik.errors.numeroConselho
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.numeroConselho}
              errorMsg={formik.errors.numeroConselho}
            />
          </div>
          <FormControl
            fullWidth
            disabled
            error={
              formik.errors.language && formik.touched.language ? true : false
            }
            sx={{ width: '50%' }}
          >
            <InputLabel id="selectlinguagem">Estado</InputLabel>
            <Select
              name="estadoConselho"
              labelId="selectlinguagem"
              value={formik.values.estadoConselho}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              label="Estado"
              sx={{ height: '67px', borderRadius: '8px' }}
            >
              <MenuItem value="AC">Acre</MenuItem>
              <MenuItem value="AL">Alagoas</MenuItem>
              <MenuItem value="AP">Amapá</MenuItem>
              <MenuItem value="AM">Amazonas</MenuItem>
              <MenuItem value="BA">Bahia</MenuItem>
              <MenuItem value="CE">Ceará</MenuItem>
              <MenuItem value="DF">Distrito Federal</MenuItem>
              <MenuItem value="ES">Espírito Santo</MenuItem>
              <MenuItem value="GO">Goiás</MenuItem>
              <MenuItem value="MA">Maranhão</MenuItem>
              <MenuItem value="MT">Mato Grosso</MenuItem>
              <MenuItem value="MS">Mato Grosso do Sul</MenuItem>
              <MenuItem value="MG">Minas Gerais</MenuItem>
              <MenuItem value="PA">Pará</MenuItem>
              <MenuItem value="PB">Paraíba</MenuItem>
              <MenuItem value="PR">Paraná</MenuItem>
              <MenuItem value="PE">Pernambuco</MenuItem>
              <MenuItem value="PI">Piauí</MenuItem>
              <MenuItem value="RJ">Rio de Janeiro</MenuItem>
              <MenuItem value="RN">Rio Grande do Norte</MenuItem>
              <MenuItem value="RS">Rio Grande do Sul</MenuItem>
              <MenuItem value="RO">Rondônia</MenuItem>
              <MenuItem value="RR">Roraima</MenuItem>
              <MenuItem value="SC">Santa Catarina</MenuItem>
              <MenuItem value="SP">São Paulo</MenuItem>
              <MenuItem value="SE">Sergipe</MenuItem>
              <MenuItem value="TO">Tocantins</MenuItem>
              <MenuItem value="EX">Estrangeiro</MenuItem>
            </Select>
            <FormHelperText sx={{ color: '#c0392b', fontSize: '14px' }}>
              {formik.touched.estadoConselho && formik.errors.estadoConselho
                ? formik.errors.estadoConselho
                : null}
            </FormHelperText>
          </FormControl>
        </div>
        <ContainerInput>
          <Input
            id="nome"
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
            id="cpf"
            type="text"
            label="CPF"
            errors={formik.touched.cpf && formik.errors.cpf}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cpf}
            errorMsg={formik.errors.cpf}
          />
        </ContainerInput>
        <Especialidades style={{ marginTop: '1rem' }}>
          <label>
            <input type="radio" value="option1" checked={true} />
            Endocrinologista
          </label>

          <label>
            <input type="radio" value="option2" />
            Ginecologista
          </label>

          <label>
            <input type="radio" value="option3" />
            Psiquiatra
          </label>
          <label>
            <input type="radio" value="option3" />
            Urologista
          </label>
        </Especialidades>
        <Informacoes style={{ marginTop: '1rem' }}>
          <TextoFinal>antes de continuar</TextoFinal>
          <TextoInfo>
            As pessoas trans sofrem diariamente desrespeito e violência verbal
            quanto à sua identidade de gênero. Um dos principais objetivos dessa
            plataforma é que essas pessoas possam ter atendimento médico sem
            precisar se preocupar com esse tipo de discriminação. Portanto, ao
            finalizar o seu cadastro você estará se comprometendo em tratar os
            pacientes e as pacientes trans que você tiver contato com o máximo
            respeito e empatia, assim como estará concordando com nossos demais
            Termos de Uso e Responsabilidade. Combinado? ;)
          </TextoInfo>
        </Informacoes>
        <ButtonCadastro type="submit">Finalizar Cadastro</ButtonCadastro>
      </FormCadastro>
    </>
  );
};

export default CadastroForm;
