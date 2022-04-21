import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../modules/user';
import { useUserData } from '../../context/useUserData';
import * as yup from 'yup';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import Erro from '../../assets/erroT.png';
import {
  Alerta,
  IconErro,
  ButtonLogin,
  Cadastro,
  ContainerCriar,
  ContainerLogin,
  Form,
  TextCadastro,
  Title,
  WrapperInput,
  WrapperLogin,
} from './style';
import Loginn from '../../assets/loginn.png';

const Login = () => {
  const navigate = useNavigate();
  const { error, setError, userLogin, loading, setLoading } = useUserData();

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
        const response = await loginUser(values);
        userLogin(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <Header />
      <ContainerLogin>
        <img src={Loginn} alt="" style={{ height: '526px' }} />

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
                <Alerta>
                  <IconErro src={Erro} />
                  {formik.errors.email}
                </Alerta>
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
                <Alerta>
                  <IconErro src={Erro} />
                  {formik.errors.password}
                </Alerta>
              ) : null}
              {error && (
                <Alerta>
                  <IconErro src={Erro} />
                  Usuário ou senha incorretos
                </Alerta>
              )}
            </WrapperInput>

            <ContainerCriar>
              <ButtonLogin type="submit" loading={loading.toString()}>
                {loading ? 'Carregando...' : 'Entrar'}
              </ButtonLogin>
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
