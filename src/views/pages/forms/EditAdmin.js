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

const EditAdmin = () => {
  const API_URL = 'http://localhost:5000'
  const [nama, setNama] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const redirect = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    axios.get(`${API_URL}/admin/${id}`).then((res) => {
      console.log(res.data)
      setNama(res.data[0].nama_admin)
      setEmail(res.data[0].email)
      setUsername(res.data[0].username)
      setPassword(res.data[0].password)
    })
  }, [])

  const data = {
    nama: nama,
    email: email,
    username: username,
    password: password,
  }

  const editData = () => {
    axios.put(`${API_URL}/admin/${id}`, data).then(redirect('/admin/list'))
    // console.log(nama + email + username + password)
  }

  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Form Edit Admin</strong>
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3" onSubmit={editData}>
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
                name="email"
                label="Email"
                type="email"
                // onChange={handleChange}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                name="password"
                label="Password"
                // onChange={handleChange}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

export default EditAdmin
