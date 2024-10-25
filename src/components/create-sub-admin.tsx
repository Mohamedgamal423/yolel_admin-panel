import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { AppDispatch } from '../store/store';
import { showSuccessToast, showErrorToast } from '../store/toast/toast.slice';
import { CreateSubAdmin } from '../store/auth/createSubAdmin/create-new-sub-admin.slice';

const SubAdminForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Set up formik with initial values
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        await dispatch(CreateSubAdmin(values)).unwrap();
        dispatch(
          showSuccessToast({ message: 'SubAdmin created successfully' }),
        );
      } catch (error) {
        dispatch(showErrorToast({ message: 'Failed to create SubAdmin' }));
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-5.5 p-6.5 mt-10"
    >
      <div>
        <label className="mb-3 block text-black dark:text-white">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter SubAdmin's name"
          className="w-full rounded-lg border-[1px] border-black bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500">{formik.errors.name as any}</div>
        )}
      </div>

      <div>
        <label className="mb-3 block text-black dark:text-white">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter SubAdmin's email"
          className="w-full rounded-lg border-[1px] border-black bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500">{formik.errors.email as any}</div>
        )}
      </div>

      <div>
        <label className="mb-3 block text-black dark:text-white">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter a password"
          className="w-full rounded-lg border-[1px] border-black bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-500">{formik.errors.password as any}</div>
        )}
      </div>

      <button
        className="py-2 px-4 bg-primary text-white rounded-md hover:bg-red-600"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default SubAdminForm;
