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

const AddJenis = () => {
  const API_URL = 'http://localhost:5000'
  const [nama, setNama] = useState('')

  const data = {
    nama_jenis: nama,
  }

  const redirect = useNavigate()

  const postData = () => {
    axios.post(`${API_URL}/type`, data).then(redirect('/admin/type'))
  }
  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Form Add Book Type</strong>
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3" onSubmit={postData}>
            <CCol md={12}>
              <CFormInput
                type="text"
                name="nama"
                label="Nama Jenis"
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

export default AddJenis
