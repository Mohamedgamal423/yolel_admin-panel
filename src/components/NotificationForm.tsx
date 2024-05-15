import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { AppDispatch, RootState } from '../store/store';
import Spinner from './Spinner/spinner';
import { sendNotifications } from '../store/sendNotifications/sendNotifications.slice';

const NotificationForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error } = useSelector(
    (state: RootState) => state.sendNotification,
  );

  const formik = useFormik({
    initialValues: {
      title: '',
      message: '',
      hasUrl: false,
      url: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      if (
        values.url !== '' ||
        values.url.match('/^(https?|ftp)://[^s/$.?#].[^s]*$/,')
      ) {
        values.url = `https://${values.url}`;
      }
      dispatch(sendNotifications(values));
      if (!loading) {
        setSubmitting(false);
        resetForm();
      }
    },
  });

  const handleCheckboxChange = () => {
    formik.setFieldValue('hasUrl', !formik.values.hasUrl);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-5.5 p-6.5 mt-10"
    >
      <div>
        <label className="mb-3 block text-black dark:text-white">
          Notification Title
        </label>
        <input
          type="text"
          name="title"
          placeholder="add notifications title"
          className="w-full rounded-lg border-[1px] border-black bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title && (
          <div className="text-red-500">{formik.errors.title}</div>
        )}
      </div>

      <div>
        <label className="mb-3 block text-black dark:text-white">
          Notification Message
        </label>
        <input
          type="text"
          name="message"
          placeholder="add notifications message"
          className="w-full rounded-lg border-[1px] border-black bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message && (
          <div className="text-red-500">{formik.errors.message}</div>
        )}
      </div>

      <div>
        <input
          className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={formik.values.hasUrl}
          onChange={handleCheckboxChange}
        />
        <label
          className="inline-block pl-[0.15rem] hover:cursor-pointer"
          htmlFor="flexSwitchCheckDefault"
        >
          Is have Url?
        </label>
      </div>

      {formik.values.hasUrl && (
        <div>
          <label className="mb-3 block font-medium text-black dark:text-white">
            add url (optional)
          </label>
          <input
            type="text"
            name="url"
            placeholder="Url"
            disabled={!formik.values.hasUrl}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.url}
          />
          {formik.touched.url && formik.errors.url && (
            <div className="text-red-500">{formik.errors.url}</div>
          )}
        </div>
      )}

      <button
        className="py-2 px-4 bg-primary text-white rounded-md hover:bg-red-600"
        type="submit"
      >
        {formik.isSubmitting ? <Spinner /> : 'Send'}
      </button>
    </form>
  );
};

export default NotificationForm;
