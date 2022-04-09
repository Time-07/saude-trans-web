import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Header from '../../components/Header';
import Input from '../../components/Input';
import {
  Alerta,
  ButtonLogin,
  Cadastro,
  ContainerCriar,
  ContainerLogin,
  EsquecerSenha,
  Form,
  TextCadastro,
  Title,
  WrapperInput,
  WrapperLogin,
} from './style';

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email('Email Invalido')
        .required('O campo é obrigatório'),
      password: yup.string().required('O campo é obrigatório'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      navigate('/perfil');
    },
  });

  return (
    <>
      <Header />
      <ContainerLogin>
        <WrapperLogin>
          <Form onSubmit={formik.handleSubmit} noValidate>
            <Title>login</Title>
            <WrapperInput>
              <Input
                type='email'
                id='email'
                label='Email'
                errors={formik.touched.email && formik.errors.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <Alerta>{formik.errors.email}</Alerta>
              ) : null}
            </WrapperInput>

            <WrapperInput>
              <Input
                type='password'
                id='password'
                label='Senha'
                errors={formik.touched.password && formik.errors.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <Alerta>{formik.errors.password}</Alerta>
              ) : null}
              <EsquecerSenha>Esqueci minha senha</EsquecerSenha>
            </WrapperInput>

            <ButtonLogin type='submit'>Entrar</ButtonLogin>

            <ContainerCriar>
              <TextCadastro> Ainda não tem uma conta?</TextCadastro>
              <Cadastro to='/login/cadastro'>Cadastre-se</Cadastro>
            </ContainerCriar>
          </Form>
        </WrapperLogin>
      </ContainerLogin>
    </>
  );
};

export default Login;
