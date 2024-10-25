import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { AppDispatch, RootState } from '../store/store';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner/spinner';
import { useEffect } from 'react';
import { fetchOneEnhancement } from '../store/enhancement/getEnhancementByLevel.slice';
import { addAndUpdateEnhancement } from '../store/enhancement/add-update-Enhancement';
import { showSuccessToast } from '../store/toast/toast.slice';

const enhancementLevels = ['levelOne', 'levelTwo', 'levelThree'];

const EnhancementForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  // Fetch enhancement data from the store
  const { enhancement, loading } = useSelector(
    (state: RootState) => state.getEnhancement,
  );

  // Fetch the enhancement by ID
  useEffect(() => {
    if (id) {
      dispatch(fetchOneEnhancement(id as string));
    }
  }, [dispatch, id]);

  // Set up formik with initial values
  const formik = useFormik({
    enableReinitialize: true, // This allows formik to reinitialize when enhancement data is available
    initialValues: {
      count: enhancement?.count || 0,
      level: enhancement?.enhancementLevel || '',
      voteEnhancementCount: enhancement?.voteEnhancementCount || 0,
    },
    validationSchema: Yup.object({
      count: Yup.number()
        .typeError('Count must be a number')
        .required('Count is required')
        .min(1, 'Count must be greater than 0'),
      level: Yup.string().required('Level is required'),
      voteEnhancementCount: Yup.number()
        .typeError('Vote enhancement count must be a number')
        .required('Vote enhancement count is required')
        .min(1, 'Vote enhancement count must be greater than 0'),
    }),
    onSubmit: (values) => {
      dispatch(
        addAndUpdateEnhancement({
          count: values.count,
          level: values.level,
          voteEnhancementCount: values.voteEnhancementCount,
        }),
      );
      dispatch(showSuccessToast({ message: 'Enhancement added successfully' }));
    },
  });

  // If loading, return the spinner
  if (loading && id) {
    return <Spinner />;
  }

  // Render the form
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-5.5 p-6.5 mt-10"
    >
      <div>
        <label className="mb-3 block text-black dark:text-white">
          Enhancement Count
        </label>
        <input
          type="number"
          name="count"
          placeholder="enhancement count"
          className="w-full rounded-lg border-[1px] border-black bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.count}
        />
        {formik.touched.count && formik.errors.count && (
          <div className="text-red-500">{formik.errors.count as any}</div>
        )}
      </div>

      <div>
        <label className="mb-3 block text-black dark:text-white">
          Enhancement Level
        </label>
        <select
          name="level"
          className="w-full rounded-lg border-[1px] border-black bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.level}
          disabled={id ? true : false}
        >
          <option value="" label="Select level" />
          {enhancementLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
        {formik.touched.level && formik.errors.level && (
          <div className="text-red-500">{formik.errors.level as any}</div>
        )}
      </div>

      <div>
        <label className="mb-3 block text-black dark:text-white">
          Enhancement Vote Count
        </label>
        <input
          type="number"
          name="voteEnhancementCount"
          placeholder="add notifications title"
          className="w-full rounded-lg border-[1px] border-black bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.voteEnhancementCount}
        />
        {formik.touched.voteEnhancementCount &&
          formik.errors.voteEnhancementCount && (
            <div className="text-red-500">
              {formik.errors.voteEnhancementCount as any}
            </div>
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

export default EnhancementForm;
