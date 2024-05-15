import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import LogoDark from '../../images/logo.svg';
import Logo from '../../images/logo.svg';
import DefaultLayout from '../../layout/DefaultLayout';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../../store/auth/login/logInSlice';

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required'),
});

const SignIn: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { loading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.logIn,
  );

  useEffect(() => {
    if (!error && !loading && isAuthenticated) {
      navigate('/');
    }
  }, [error, navigate, loading]);

  // Form submission handler
  const handleSubmit = (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    dispatch(login(values));
    setSubmitting(false);
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Sign In" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className=" hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" to="/">
                <img className="hidden dark:block" src={Logo} alt="Logo" />
                <img className="dark:hidden" src={LogoDark} alt="Logo" />
              </Link>

              <p className="2xl:px-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse.
              </p>

              <span className="mt-15 inline-block">
                <svg
                  width="350"
                  height="350"
                  viewBox="0 0 350 350"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG path elements */}
                </svg>
              </span>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium">Log In</span>
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign In to uolel
              </h2>

              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-4">
                      <label className="mb-2.5 block font-medium text-black dark:text-white">
                        Email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 mt-1.5"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="mb-2.5 block font-medium text-black dark:text-white">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 mt-1.5"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-lg bg-primary text-white py-4 font-medium transition duration-300 ease-in-out hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark focus-visible:ring-opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Sign In'}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignIn;
