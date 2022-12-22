import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CRow,
  CCol,
  CFormInput,
  CButton,
} from '@coreui/react'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddCategory = () => {
  const API_URL = 'http://localhost:5000'
  const [nama, setNama] = useState('')

  const data = {
    nama_kategori: nama,
  }

  const redirect = useNavigate()

  const postData = () => {
    axios.post(`${API_URL}/category`, data).then(redirect('/admin/category'))
  }
  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Form Add Category</strong>
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3" onSubmit={postData}>
            <CCol md={12}>
              <CFormInput
                type="text"
                name="nama"
                label="Nama Kategori"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </CCol>
            <CCol xs={12}>
              <CButton type="submit">Submit</CButton>
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
    </CRow>
  )
}

export default AddCategory
