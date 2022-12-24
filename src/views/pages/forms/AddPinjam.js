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
import { useNavigate } from 'react-router-dom'

const AddPinjam = () => {
  const API_URL = 'http://localhost:5000'
  const [durasi, setDurasi] = useState('')
  const [idAnggota, setIdAnggota] = useState('')
  const [idBuku, setIdBuku] = useState('')
  const [tglPinjam, setTglPinjam] = useState('')
  const [users, setUsers] = useState([])
  const [books, setBooks] = useState([])

  const data = {
    lama_pinjam: durasi,
    id_anggota: idAnggota,
    status: 'belum dikembalikan',
    id_buku: idBuku,
    tgl_pinjam: tglPinjam,
  }

  const redirect = useNavigate()

  const getUsers = () => {
    axios.get(`${API_URL}/users`).then((res) => setUsers(res.data))
  }

  const getBooks = () => {
    axios.get(`${API_URL}/books`).then((res) => setBooks(res.data))
  }

  useEffect(() => {
    getUsers()
    getBooks()
  }, [])

  const postData = () => {
    axios.post(`${API_URL}/borrow`, data).then(redirect('/dashboard'))
  }
  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Form Tambah Peminjaman</strong>
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3" onSubmit={postData}>
            <CCol md={6}>
              <CFormInput
                type="number"
                name="nama"
                label="Lama Pinjam"
                value={durasi}
                onChange={(e) => setDurasi(e.target.value)}
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="date"
                name="nama"
                label="Tanggal Pinjam"
                value={tglPinjam}
                onChange={(e) => setTglPinjam(e.target.value)}
              />
            </CCol>
            <CCol md={6}>
              <CFormSelect onChange={(e) => setIdAnggota(e.target.value)}>
                <option>Pilih User...</option>
                {users.map((user, index) => (
                  <option key={index + 1} value={user.id_anggota}>
                    {user.nama_anggota}
                  </option>
                ))}
              </CFormSelect>
            </CCol>
            <CCol md={6}>
              <CFormSelect onChange={(e) => setIdBuku(e.target.value)}>
                <option>Pilih Buku...</option>
                {books.map((book, index) => (
                  <option key={index + 1} value={book.id_buku}>
                    {book.judul_buku}
                  </option>
                ))}
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

export default AddPinjam
