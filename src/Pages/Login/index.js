import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../modules/user';
import { useCadastro } from '../../context/useCadastro';
import * as yup from 'yup';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
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
  const { error, setError, loading, setLoading } = useCadastro();

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
    onSubmit: async values => {
      try {
        setLoading(true);
        await loginUser(values);
        navigate('/perfil');
      } catch (error) {
        setError(error.message);
        console.log(error.response.data);
      } finally {
        setLoading(false);
      }
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
                type="email"
                id="email"
                label="Email"
                errors={(formik.touched.email && formik.errors.email) || error}
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
                type="password"
                id="password"
                label="Senha"
                errors={
                  (formik.touched.password && formik.errors.password) || error
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <Alerta>{formik.errors.password}</Alerta>
              ) : null}
              {error && <Alerta>Usuário ou senha incorretos</Alerta>}
              <EsquecerSenha>Esqueci minha senha</EsquecerSenha>
            </WrapperInput>

            <ButtonLogin type="submit" disabled={loading}>
              Entrar
            </ButtonLogin>

            <ContainerCriar>
              <TextCadastro> Ainda não tem uma conta?</TextCadastro>
              <Cadastro to="/cadastro">Cadastre-se</Cadastro>
            </ContainerCriar>
          </Form>
        </WrapperLogin>
      </ContainerLogin>
      <Footer />
    </>
  );
};

export default Login;
