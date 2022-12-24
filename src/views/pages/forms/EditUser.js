import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CRow,
  CCol,
  CFormInput,
  CButton,
  CFormSelect,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
  const API_URL = 'http://localhost:5000'
  const [nim, setNim] = useState('')
  const [nama, setNama] = useState('')
  const [jurusan, setJurusan] = useState('')
  const [tlp, setTlp] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')

  const data = {
    nim: nim,
    nama: nama,
    jurusan: jurusan,
    no_tlp: tlp,
    username: username,
    pass: password,
    status: status,
  }

  // const handleChange = (e) => {
  //   setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  // }
  const redirect = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    axios.get(`${API_URL}/users/${id}`).then((res) => {
      console.log(res.data[0])
      setNim(res.data[0].nim)
      setNama(res.data[0].nama_anggota)
      setJurusan(res.data[0].jurusan)
      setTlp(res.data[0].no_tlp)
      setUsername(res.data[0].username)
      setPassword(res.data[0].password)
    })
  }, [])

  const updateData = () => {
    axios.put(`${API_URL}/users/${id}`, data).then(redirect('/admin/user'))
  }

  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Form Edit User</strong>
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3" onSubmit={updateData}>
            <CCol md={6}>
              <CFormInput
                type="text"
                name="nim"
                label="NIM"
                // onChange={handleChange}
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                required
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
            <CCol md={12}>
              <CFormSelect
                size="sm"
                className="mb-3"
                aria-label="Small select example"
                name="status"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Select Status...</option>
                <option value="active">active</option>
                <option value="banned">banned</option>
              </CFormSelect>
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

export default EditUser
