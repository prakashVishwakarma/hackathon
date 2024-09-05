import { useNavigate } from 'react-router-dom';
import GreenButton from '../buttons/GreenButton/GreenButton'
import './Form.css'

import { useFormik } from "formik";
import * as Yup from "yup";
import { generateRandomMongoDBId, getDataFromLocalStorage, setLocalStorage, } from '../../Utils/Utils';
import { myLocalData } from '../../constants/constant';
const Form = ({ card }: any) => {
  console.log('challengeName', card)
  const navigate = useNavigate();


  // Define the validation schema with Yup
  const validationSchema = Yup.object({
    challengeName: Yup.string().required("Challenge Name is required"),
    startDate: Yup.date()
      .min(new Date("2024-09-01"), "Start Date cannot be before 2024-09-01")
      .max(new Date("2024-12-31"), "Start Date cannot be after 2024-12-31")
      .required("Start Date is required"),
    endDate: Yup.date()
      .min(Yup.ref("startDate"), "End Date cannot be before Start Date")
      .max(new Date("2024-12-31"), "End Date cannot be after 2024-12-31")
      .required("End Date is required"),
    description: Yup.string().required("Description is required"),
    // imageUpload: Yup.mixed().required("Image is required"),
    lavelType: Yup.string().required("LavelType is required"),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      challengeName: '',
      startDate: '',
      endDate: '',
      description: '',
      // imageUpload: '',
      lavelType: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
      console.log("Challenge created successfully!");

      const { id, success } = generateRandomMongoDBId();
      const { data } = getDataFromLocalStorage<any>(myLocalData);
      if (success) {
        data.card.push({ ...values, id });
        setLocalStorage(myLocalData, data)
      } else {
        console.log("Failed to generate ID.");
      }
      navigate("/");
    },
  });

  return (
    <div className="AdminCreateChallenge">
      <form onSubmit={formik.handleSubmit} className="form">
        <h1 style={{ marginBottom: "10px", marginTop: "10px" }}>Challenge Details</h1>

        <div>
          <label>Challenge Name</label>
          <input
            type="text"
            name="challengeName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.challengeName}
          />
          {formik.touched.challengeName && formik.errors.challengeName ? (
            <div className="error">{formik.errors.challengeName}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            min="2024-09-01"
            max="2024-12-31"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.startDate}
          />
          {formik.touched.startDate && formik.errors.startDate ? (
            <div className="error">{formik.errors.startDate}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            min="2024-09-01"
            max="2024-12-31"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endDate}
          />
          {formik.touched.endDate && formik.errors.endDate ? (
            <div className="error">{formik.errors.endDate}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows={8}
            cols={100}
            style={{ width: "40%", display: "flex", flexDirection: "column" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}
        </div>

        {/* <div>
          <label htmlFor="imageUpload">Image</label>
          <input
            type="file"
            id="imageUpload"
            name="imageUpload"
            accept="image/*"
            onChange={(event) => {
              const file = event.currentTarget.files ? event.currentTarget.files[0] : null;
              formik.setFieldValue("imageUpload", file);
            }}
            onBlur={formik.handleBlur}
          />
          {formik.touched.imageUpload && formik.errors.imageUpload ? (
            <div className="error">{formik.errors.imageUpload}</div>
          ) : null}
        </div> */}

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="lavelType">LavelType</label>
          <select
            name="lavelType"
            id="lavelType"
            style={{ width: "40%" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lavelType}
          >
            <option value="" label="Select difficulty" />
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          {formik.touched.lavelType && formik.errors.lavelType ? (
            <div className="error">{formik.errors.lavelType}</div>
          ) : null}
        </div>

        <GreenButton onClick={formik.handleSubmit} type="submit" text={"Create Challenge"} />
      </form>
    </div>
  )
}

export default Form