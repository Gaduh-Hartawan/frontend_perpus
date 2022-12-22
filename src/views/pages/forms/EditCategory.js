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

const EditCategory = () => {
  const API_URL = 'http://localhost:5000'
  const [nama, setNama] = useState('')

  const redirect = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    axios.get(`${API_URL}/category/${id}`).then((res) => {
      console.log(res.data)
      setNama(res.data[0].nama_kategori)
    })
  }, [])

  const data = {
    nama_kategori: nama,
  }

  const editData = () => {
    axios.put(`${API_URL}/category/${id}`, data).then(redirect('/admin/category'))
    // console.log(nama + email + username + password)
  }

  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Form Edit Category</strong>
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3" onSubmit={editData}>
            <CCol md={12}>
              <CFormInput
                type="text"
                name="nama"
                label="Nama Kategori"
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

export default EditCategory
