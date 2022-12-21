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

const AddUser = () => {
  const API_URL = 'http://localhost:5000'
  const [nim, setNim] = useState('')
  const [nama, setNama] = useState('')
  const [jurusan, setJurusan] = useState('')
  const [tlp, setTlp] = useState('')
  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')
  const redirect = useNavigate()

  const postData = () => {
    axios
      .post(API_URL + '/users', {
        nim,
        nama,
        jurusan,
        tlp,
        username,
        pass,
      })
      .then(redirect('/admin/user'))
  }
  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Form Add User</strong>
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3" onSubmit={postData}>
            <CCol md={6}>
              <CFormInput
                type="text"
                id="nim"
                label="NIM"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="text"
                id="nama"
                label="Nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                id="jurusan"
                label="Jurusan"
                value={jurusan}
                onChange={(e) => setJurusan(e.target.value)}
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                id="no_tlp"
                label="No Tlp"
                value={tlp}
                onChange={(e) => setTlp(e.target.value)}
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                id="username"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="password"
                id="pass"
                label="Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
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

export default AddUser
