import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const API_URL = 'http://localhost:5000'
  const [nim, setNim] = useState('')
  const [nama, setNama] = useState('')
  const [jurusan, setJurusan] = useState('')
  const [tlp, setTlp] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const data = {
    nim: nim,
    nama: nama,
    jurusan: jurusan,
    tlp: tlp,
    username: username,
    pass: password,
  }
  const redirect = useNavigate()

  const postData = (e) => {
    e.preventDefault()
    axios.post(`${API_URL}/users`, data)
    redirect('/login')
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardHeader>
                <h4>Register</h4>
              </CCardHeader>
              <CCardBody className="p-4">
                <CForm className="row g-3" onSubmit={postData}>
                  <CCol md={6}>
                    <CFormInput
                      type="text"
                      name="nim"
                      label="NIM"
                      // onChange={handleChange}
                      value={nim}
                      onChange={(e) => setNim(e.target.value)}
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormInput
                      type="text"
                      name="nama"
                      label="Nama"
                      // onChange={handleChange}
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormInput
                      name="jurusan"
                      label="Jurusan"
                      // onChange={handleChange}
                      value={jurusan}
                      onChange={(e) => setJurusan(e.target.value)}
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormInput
                      name="tlp"
                      label="No Tlp"
                      // onChange={handleChange}
                      value={tlp}
                      onChange={(e) => setTlp(e.target.value)}
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormInput
                      name="username"
                      label="Username"
                      // onChange={handleChange}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormInput
                      type="password"
                      name="pass"
                      label="Password"
                      // onChange={handleChange}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </CCol>
                  <CCol xs={12}>
                    <CButton type="submit">register</CButton>
                  </CCol>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
