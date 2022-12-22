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
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditJenis = () => {
  const API_URL = 'http://localhost:5000'
  const [nama, setNama] = useState('')

  const redirect = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    axios.get(`${API_URL}/type/${id}`).then((res) => {
      console.log(res.data)
      setNama(res.data[0].nama_jenis)
    })
  }, [])

  const data = {
    nama_jenis: nama,
  }

  const editData = () => {
    axios.put(`${API_URL}/type/${id}`, data).then(redirect('/admin/type'))
    // console.log(nama + email + username + password)
  }

  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Form Edit Book Type</strong>
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3" onSubmit={editData}>
            <CCol md={12}>
              <CFormInput
                type="text"
                name="nama"
                label="Nama Jenis"
                // onChange={handleChange}
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

export default EditJenis
