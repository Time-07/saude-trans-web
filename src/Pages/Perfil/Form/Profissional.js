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
import { showToast } from '../../../util/Toast';
import { AtualizarDadosUsuario } from '../../../modules/user';
import { useUserData } from '../../../context/useUserData';
import { TextoContatoInfo } from '../style';
import { conselhoMask } from '../../../util/maskInput';
import InputMask from 'react-input-mask';
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
const number = 123456.789;

const Profissional = () => {
  const { user, setUser, setStep } = useUserData();

  const initialValues = {
    nome: user.name,
    numeroConselho: user.crmCrp,
    estado: user.state || '',
    cidade: user.city || '',
    endereco: user.address || '',
    numeroEndereco: user.number || '',
    complemento: '',
    identidadeGenero: user.gender || '',
    especialidade: user.specialty || '',
    image: undefined,
  };
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
    initialValues: initialValues,
    validationSchema: yup.object({
      nome: yup.string().required('O campo é obrigatório'),
      numeroConselho: yup
        .string()
        .min(8, 'Numero Incompleto')
        .required('O campo é obrigatório'),
      estado: yup.string().required('O campo é obrigatório'),
      cidade: yup.string().required('O campo é obrigatório'),
      identidadeGenero: yup.string().required('O campo é obrigatório'),
      especialidade: yup.string().required('O campo é obrigatório'),
    }),

    onSubmit: async values => {
      const dataForm = {
        name: values.nome,
        crmCrp: values.numeroConselho,
        state: values.estado,
        city: values.cidade,
        address: values.endereco,
        number: values.numeroEndereco,
        gender: values.identidadeGenero,
        specialty: values.especialidade,
      };

      try {
        // await AtualizarDadosUsuario(dataForm);
        setUser({ ...user, ...dataForm });
        setStep(1);
        showToast('success', 'Dados Atualizados com sucesso');
      } catch (error) {
        showToast('error', 'Erro ao atualizar');
      }
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
                <img src={imageUpload?.imagePreviewUrl || Avatar} alt="" />{' '}
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
          <InputMask
            mask="99/999999"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.numeroConselho}
          >
            {() => (
              <Input
                name="numeroConselho"
                type="text"
                label="CRM/CRP"
                errors={
                  formik.touched.numeroConselho && formik.errors.numeroConselho
                }
                errorMsg={formik.errors.numeroConselho}
              />
            )}
          </InputMask>
        </ContainerInput>
        <ContainerInput>
          <FormControl
            fullWidth
            error={formik.errors.estado && formik.touched.estado ? true : false}
            sx={{ width: '100%' }}
          >
            <InputLabel id="selectlinguagem">Estado</InputLabel>
            <Select
              name="estado"
              labelId="selectlinguagem"
              value={formik.values.estado}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              label="Estado"
              sx={{ height: '67px', borderRadius: '8px' }}
            >
              <MenuItem value="">Selecione um estado</MenuItem>
              {estadosCidades?.estados.map(estado => (
                <MenuItem key={estado.sigla} value={estado.sigla}>
                  {estado.nome}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText sx={{ color: '#c0392b', fontSize: '14px' }}>
              {formik.touched.estado && formik.errors.estado
                ? formik.errors.estado
                : null}
            </FormHelperText>
          </FormControl>
        </ContainerInput>
        <ContainerInput>
          <FormControl
            fullWidth
            error={formik.errors.cidade && formik.touched.cidade ? true : false}
            disabled={!formik.values.estado}
            sx={{ width: '100%' }}
          >
            <InputLabel id="selectCidade">Cidade</InputLabel>
            <Select
              name="cidade"
              labelId="selectCidade"
              value={formik.values.cidade || ''}
              onBlur={formik.handleBlur}
              disabled={!formik.values.estado}
              onChange={formik.handleChange}
              label="Cidade"
              sx={{ height: '67px', borderRadius: '8px' }}
            >
              {estadosCidades?.estados
                .filter(estado => estado.sigla === formik.values.estado)[0]
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
            name="endereco"
            type="text"
            label="Endereço (opcional)"
            errors={formik.touched.endereco && formik.errors.endereco}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endereco}
            errorMsg={formik.errors.endereco}
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

        <ContainerButton>
          <ButtonSalvar type="submit">Salvar e Continuar</ButtonSalvar>
        </ContainerButton>
      </FormProfissionais>
    </>
  );
};

export default Profissional;
