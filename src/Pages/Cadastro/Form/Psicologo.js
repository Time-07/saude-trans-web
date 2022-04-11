import React from 'react';
import { useFormik, ErrorMessage } from 'formik';
import { useCadastro } from '../../../context/useCadastro';
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
  ContainerForm,
  Texto,
} from '../style';
import Input from '../../../components/Input';

const PsicologoForm = () => {
  const { setStep, setData } = useCadastro();

  const formik = useFormik({
    initialValues: {
      numeroConselho: '',
      estadoConselho: '',
      tipoConselho: 'CRP',
    },
    validationSchema: yup.object({
      numeroConselho: yup.string().required('O campo é obrigatório'),
      estadoConselho: yup.string().required('O campo é obrigatório'),
    }),
    onSubmit: values => {
      setData(state => ({ ...state, ...values }));
      setStep(4);
    },
  });
  return (
    <>
      <Texto>
        Agora insira o seu registro do CRP e o estado no qual foi emitido!
      </Texto>
      <ContainerForm style={{ marginTop: '1rem' }}>
        <FormContainer onSubmit={formik.handleSubmit} noValidate>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              gap: ' 20px',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: '50%' }}>
              <Input
                id="numeroConselho"
                type="text"
                label="CRP"
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
          <ButtonCadastro type="submit">Continuar</ButtonCadastro>
        </FormContainer>
        <Informacoes>
          Por quê pedimos essas informações: <br /> Validamos seu CRM para
          garatir a segurança das pessoas que acessam a plataforma e a
          legitimidade dos anúncios reslizados!
        </Informacoes>
      </ContainerForm>
    </>
  );
};

export default PsicologoForm;
