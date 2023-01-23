import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from "axios";

import { useState, useEffect } from 'react';

import './index.scss'

import Nav from '../../components/Nav/index'
import Footer from '../../components/Footer/index'

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  subTitle: Yup.string()
    .min(2, 'Too Short!')
    .max(520, 'Too Long!')
    .required('Required'),
  image: Yup.string()
    .min(2, 'Too Short!')
    .max(250, 'Too Long!')
    .required('Required'),
});



export default function Index() {

  const [data, setData] = useState([])

  

  async function getData() {
    const URL = "http://localhost:1515/areas"
    let result = await axios.get(URL)
    setData(result.data)
  }

  async function addData(obj) {
    const URL = "http://localhost:1515/areas"
    let result = await axios.post(URL, {...obj})
    getData()
    
  }

  async function deleteData(_id) {
    const URL = "http://localhost:1515/areas/" + _id
    let result = await axios.delete(URL)
    getData()
  }

  useEffect(() => {
    getData()
  }, [])

 
  return (

    <div className='add-page'>
      <Nav />
      <section className="crud">
        <div className="container">
          <h2 className="heading"> Area Management </h2>
          <Formik
            initialValues={{
              title: '',
              subTitle: '',
              image: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              addData(values)
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="input-group">
                  <Field name="title" placeholder="Title" />
                  <ErrorMessage name="title" />
                </div>
                <div className="input-group">
                  <Field name="subTitle" placeholder="Sub title" />
                  <ErrorMessage name="subTitle" />
                </div>
                <div className="input-group">
                  <Field name="image" placeholder="Image Source" />
                  <ErrorMessage name="image" />
                </div>


                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>

          <div className="row">
           {data.map (x =>  <Box data={x} deleteData={deleteData}  /> )}
          </div>

        </div>

      </section>

      <Footer />
    </div>
  )
}

function Box(props) {
  const {deleteData} = props
  const {  _id, title, subTitle, image ,  } = props.data;
  return (
    <div className="box">
      <h2 className="title"> {title} </h2>
      <h2 className="subtitle"> {subTitle} </h2>
      <img src={image} alt="" />
      <button onClick={ () =>  deleteData(_id)  } > Delete  </button>
    </div>
  )
}

