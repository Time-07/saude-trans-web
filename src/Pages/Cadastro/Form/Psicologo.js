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
  Profissionais,
  Medico,
  TextOpcao,
  Opcao,
  ButtonCadastro,
  ContainerCRM,
  Informacoes,
} from '../style';
import Input from '../../../components/Input';

const PsicologoForm = () => {
  const formik = useFormik({
    initialValues: {
      numberCRP: '',
      select: '',
    },
    validationSchema: yup.object({
      numberCRP: yup.string().required('O campo é obrigatório'),
      select: yup.string().required('O campo é obrigatório'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <ContainerCRM>
        <Input
          type='text'
          id='number'
          label='CRP'
          errors={formik.touched.email && formik.errors.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <Alerta>{formik.errors.email}</Alerta>
        ) : null}

        <FormControl
          fullWidth
          error={
            formik.errors.language && formik.touched.language ? true : false
          }
          sx={{
            paddingBottom: '3.125rem',
          }}
        >
          <InputLabel id='selectlinguagem'>
            Select the language of your Skill
          </InputLabel>
          <Select
            name='estado'
            labelId='selectlinguagem'
            value={formik.values.estado}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            label='Selecione Seu Estado'
          >
            <MenuItem value='AC'>Acre</MenuItem>
            <MenuItem value='AL'>Alagoas</MenuItem>
            <MenuItem value='AP'>Amapá</MenuItem>
            <MenuItem value='AM'>Amazonas</MenuItem>
            <MenuItem value='BA'>Bahia</MenuItem>
            <MenuItem value='CE'>Ceará</MenuItem>
            <MenuItem value='DF'>Distrito Federal</MenuItem>
            <MenuItem value='ES'>Espírito Santo</MenuItem>
            <MenuItem value='GO'>Goiás</MenuItem>
            <MenuItem value='MA'>Maranhão</MenuItem>
            <MenuItem value='MT'>Mato Grosso</MenuItem>
            <MenuItem value='MS'>Mato Grosso do Sul</MenuItem>
            <MenuItem value='MG'>Minas Gerais</MenuItem>
            <MenuItem value='PA'>Pará</MenuItem>
            <MenuItem value='PB'>Paraíba</MenuItem>
            <MenuItem value='PR'>Paraná</MenuItem>
            <MenuItem value='PE'>Pernambuco</MenuItem>
            <MenuItem value='PI'>Piauí</MenuItem>
            <MenuItem value='RJ'>Rio de Janeiro</MenuItem>
            <MenuItem value='RN'>Rio Grande do Norte</MenuItem>
            <MenuItem value='RS'>Rio Grande do Sul</MenuItem>
            <MenuItem value='RO'>Rondônia</MenuItem>
            <MenuItem value='RR'>Roraima</MenuItem>
            <MenuItem value='SC'>Santa Catarina</MenuItem>
            <MenuItem value='SP'>São Paulo</MenuItem>
            <MenuItem value='SE'>Sergipe</MenuItem>
            <MenuItem value='TO'>Tocantins</MenuItem>
            <MenuItem value='EX'>Estrangeiro</MenuItem>
          </Select>
          <FormHelperText>
            <ErrorMessage name='language' />
          </FormHelperText>
        </FormControl>
      </ContainerCRM>

      <ButtonCadastro type='submit'>Entrar</ButtonCadastro>

      <Informacoes>
        Por quê pedimos essas informações: Validamos seu CRP para garatir a
        segurança das pessoas que acessam a plataforma e a legitimidade dos
        anúncios reslizados!
      </Informacoes>
    </>
  );
};

export default PsicologoForm;
