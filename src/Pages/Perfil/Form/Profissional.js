import React, { useState } from 'react';
import {
  FormProfissionais,
  Card,
  Contato,
  ImagemPerfil,
  ContainerInput,
  Especialidades,
  TitleEspecialista,
  ButtonSalvar,
  ContainerButton,
} from './style';

import { TextoContatoInfo } from '../style';
import { conselhoMask } from '../../../util/maskInput';
import perfil from '../../../assets/logoo.jpeg';
import Avatar from '../../../assets/avatar.png';
import Input from '../../../components/Input';
import estadosCidades from '../../../util/estadosCidades';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import * as yup from 'yup';
import { Alerta } from '../../Login/style';
import { useFormik, ErrorMessage } from 'formik';

const Profissional = () => {
  const [imageUpload, setImageUpload] = useState({
    file: '',
    imagePreviewUrl: Avatar,
  });

  const photoUpload = e => {
    e.preventDefault();
    const reader = new FileReader();
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    reader.onloadend = () => {
      setImageUpload({
        ...imageUpload,
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const formik = useFormik({
    initialValues: {
      nome: '',
      numeroConselho: '',
      estadoConselho: '',
      cidade: '',
      endereço: '',
      numeroEndereco: '',
      complemento: '',
      identidadeGenero: '',
      especialidade: '',
      image: undefined,
    },
    validationSchema: yup.object({
      nome: yup.string().required('O campo é obrigatório'),
      numeroConselho: yup
        .string()
        .min(8, 'Numero Incompleto')
        .required('O campo é obrigatório'),
      estadoConselho: yup.string().required('O campo é obrigatório'),
      identidadeGenero: yup.string().required('O campo é obrigatório'),
      especialidade: yup.string().required('O campo é obrigatório'),
    }),

    onSubmit: async values => {
      // const dataForm = {
      //   name: values.name,
      //   crmCrp: data.numeroConselho,

      //   gender: values.identidadeGenero,
      //   specialty: values.especialidade,
      // };
      console.log(values);
      // try {
      //   await RegisterUser(dataForm);
      //   setStep(5);
      // } catch (error) {
      //   Alerta('Erro ao cadastrar', 'error');
      // }
    },
  });
  return (
    <>
      <TextoContatoInfo>Informações do(a) contato</TextoContatoInfo>
      <FormProfissionais onSubmit={formik.handleSubmit} noValidate>
        <Contato>
          <Card>
            <label htmlFor="photo-upload" className="custom-file-upload fas">
              <div className="img-wrap img-upload">
                <img src={imageUpload?.imagePreviewUrl || Avatar} alt="" />
              </div>
              <input
                name="image"
                id="photo-upload"
                type="file"
                onBlur={formik.handleBlur}
                onChange={event => {
                  photoUpload(event);
                  formik.setFieldValue('image', event.currentTarget.files?.[0]);
                }}
              />
            </label>
          </Card>
        </Contato>
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
          <Input
            name="numeroConselho"
            type="text"
            label="CRM/CRP"
            errors={
              formik.touched.numeroConselho && formik.errors.numeroConselho
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={conselhoMask(formik.values.numeroConselho)}
            errorMsg={formik.errors.numeroConselho}
          />
        </ContainerInput>
        <ContainerInput>
          <FormControl
            fullWidth
            error={
              formik.errors.estadoConselho && formik.touched.estadoConselho
                ? true
                : false
            }
            sx={{ width: '100%' }}
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
              {estadosCidades?.estados.map(estado => (
                <MenuItem key={estado.sigla} value={estado.sigla}>
                  {estado.nome}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText sx={{ color: '#c0392b', fontSize: '14px' }}>
              {formik.touched.estadoConselho && formik.errors.estadoConselho
                ? formik.errors.estadoConselho
                : null}
            </FormHelperText>
          </FormControl>
        </ContainerInput>
        <ContainerInput>
          <FormControl
            fullWidth
            error={formik.errors.cidade && formik.touched.cidade ? true : false}
            disabled={!formik.values.estadoConselho}
            sx={{ width: '100%' }}
          >
            <InputLabel id="selectCidade">Cidade</InputLabel>
            <Select
              name="cidade"
              labelId="selectCidade"
              value={formik.values.cidade || ''}
              onBlur={formik.handleBlur}
              disabled={!formik.values.estadoConselho}
              onChange={formik.handleChange}
              label="Cidade"
              sx={{ height: '67px', borderRadius: '8px' }}
            >
              {estadosCidades?.estados
                .filter(
                  estado => estado.sigla === formik.values.estadoConselho,
                )[0]
                ?.cidades?.map(cidade => (
                  <MenuItem key={cidade} value={cidade}>
                    {cidade}
                  </MenuItem>
                ))}
            </Select>
            <FormHelperText sx={{ color: '#c0392b', fontSize: '14px' }}>
              {formik.touched.cidade && formik.errors.cidade
                ? formik.errors.cidade
                : null}
            </FormHelperText>
          </FormControl>
        </ContainerInput>
        <ContainerInput>
          <Input
            name="endereço"
            type="text"
            label="Endereço (opcional)"
            errors={formik.touched.endereço && formik.errors.endereço}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endereço}
            errorMsg={formik.errors.endereço}
          />
        </ContainerInput>
        <ContainerInput>
          <Input
            name="numeroEndereco"
            type="text"
            label="Número (opcional)"
            errors={
              formik.touched.numeroEndereco && formik.errors.numeroEndereco
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.numeroEndereco}
            errorMsg={formik.errors.numeroEndereco}
          />
        </ContainerInput>
        <ContainerInput>
          <Input
            name="complemento"
            type="text"
            label="Complemento (opcional)"
            errors={formik.touched.complemento && formik.errors.complemento}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.complemento}
            errorMsg={formik.errors.complemento}
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
            sx={{ width: '100%' }}
          >
            <InputLabel id="selectGenero">identidade de gênero</InputLabel>
            <Select
              name="identidadeGenero"
              labelId="selectGenero"
              value={formik.values.identidadeGenero}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              label="identidade de gênero"
              sx={{ height: '67px', borderRadius: '8px', width: '530px' }}
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
            Psicólogo
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

        <ContainerButton>
          <ButtonSalvar type="submit">Salvar e Continuar</ButtonSalvar>{' '}
        </ContainerButton>
      </FormProfissionais>
    </>
  );
};

export default Profissional;
