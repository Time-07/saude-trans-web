import React from 'react';
import {
  Container,
  Contato,
  ImagemPerfil,
  ContainerInput,
  Especialidades,
  TitleEspecialista,
  ButtonSalvar,
} from './style';
import perfil from '../../../assets/logoo.jpeg';
import Input from '../../../components/Input';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Profissional = () => {
  return (
    <Container>
      <Contato>
        <ImagemPerfil src={perfil} alt="" />
        <p>Adicionar contato</p>
      </Contato>
      <ContainerInput>
        <Input
          name="nome"
          type="text"
          label="Nome"
          // errors={formik.touched.nome && formik.errors.nome}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.nome}
          // errorMsg={formik.errors.nome}
        />
      </ContainerInput>
      <ContainerInput>
        <Input
          name="conselho"
          type="text"
          label="CRM/CRP"
          // errors={formik.touched.conselho && formik.errors.conselho}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.conselho}
          // errorMsg={formik.errors.conselho}
        />
      </ContainerInput>
      <ContainerInput>
        <FormControl
          // fullWidth
          // error={formik.errors.language && formik.touched.language ? true : false}
          sx={{ width: '100%' }}
        >
          <InputLabel id="selectlinguagem">Estado</InputLabel>
          <Select
            name="estadoConselho"
            labelId="selectlinguagem"
            // value={formik.values.estadoConselho}
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
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
          {/* <FormHelperText sx={{ color: '#c0392b', fontSize: '14px' }}>
          {formik.touched.estadoConselho && formik.errors.estadoConselho
            ? formik.errors.estadoConselho
            : null}
        </FormHelperText> */}
        </FormControl>
      </ContainerInput>
      <ContainerInput>
        <Input
          name="cidade"
          type="text"
          label="Cidade"
          // errors={formik.touched.cidade && formik.errors.cidade}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.cidade}
          // errorMsg={formik.errors.cidade}
        />
      </ContainerInput>
      <ContainerInput>
        <Input
          name="endereço"
          type="text"
          label="Endereço (opcional)"
          // errors={formik.touched.endereço && formik.errors.endereço}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.endereço}
          // errorMsg={formik.errors.endereço}
        />
      </ContainerInput>
      <ContainerInput>
        <Input
          name="numero"
          type="text"
          label="Número (opcional)"
          // errors={formik.touched.numero && formik.errors.numero}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.numero}
          // errorMsg={formik.errors.numero}
        />
      </ContainerInput>
      <ContainerInput>
        <Input
          name="complemento"
          type="text"
          label="Complemento (opcional)"
          // errors={formik.touched.complemento && formik.errors.complemento}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.complemento}
          // errorMsg={formik.errors.complemento}
        />
      </ContainerInput>
      <InputLabel id="selectGenero">identidade de gênero</InputLabel>
      <Select
        name="identidadeGenero"
        labelId="selectGenero"
        // value={formik.values.identidadeGenero}
        // onBlur={formik.handleBlur}
        // onChange={formik.handleChange}
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

      <Especialidades style={{ marginTop: '1rem' }}>
        <TitleEspecialista>Especialidade médica</TitleEspecialista>
        <label className="container">
          Endocrinologista
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
          Ginecologista
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
          Psiquiatra
          <input
            type="radio"
            name="especialidade"
            value="psiquiatra"
            // checked={formik.values.especialidade === 'psiquiatra'}
            // onChange={() => formik.setFieldValue('especialidade', 'psiquiatra')}
          />
          <span className="checkmark" />
        </label>
        <label className="container">
          Urologista
          <input
            type="radio"
            name="especialidade"
            value="urologista"
            // checked={formik.values.especialidade === 'urologista'}
            // onChange={() => formik.setFieldValue('especialidade', 'urologista')}
          />
          <span className="checkmark" />
        </label>
        <label className="container">
          Psicólogo
          <input
            type="radio"
            name="especialidade"
            value="urologista"
            // checked={formik.values.especialidade === 'urologista'}
            // onChange={() =>
            //   formik.setFieldValue('especialidade', 'urologista')
            // }
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

export default Profissional;
