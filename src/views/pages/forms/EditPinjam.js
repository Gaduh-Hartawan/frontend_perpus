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
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditPinjam = () => {
  const API_URL = 'http://localhost:5000'
  const [status, setStatus] = useState('')
  const [tglKembali, setTglKembali] = useState('')

  const redirect = useNavigate()
  const { id } = useParams()

  const data = {
    status: status,
    tgl_kembali: tglKembali,
  }

  const editData = () => {
    axios.put(`${API_URL}/borrow/${id}`, data).then(redirect('/dashboard'))
    // console.log(nama + email + username + password)
  }

  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Form Edit Peminjaman</strong>
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3" onSubmit={editData}>
            <CCol md={12}>
              <CFormSelect onChange={(e) => setStatus(e.target.value)}>
                <option>Pilih Status...</option>
                <option value="dikembalikan">Dikembalikan</option>
                <option value="belum dikembalikan">Belum Dikembalikan</option>
              </CFormSelect>
            </CCol>
            <CCol md={12}>
              <CFormInput
                label="Tanggal Dikembalikan"
                type="date"
                value={tglKembali}
                onChange={(e) => setTglKembali(e.target.value)}
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

export default EditPinjam
