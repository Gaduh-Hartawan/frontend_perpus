import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CBadge,
} from '@coreui/react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PeminjamanList = () => {
  const API_URL = 'http://localhost:5000'
  const [peminjaman, setPeminjaman] = useState([])

  const getBorrow = () => {
    axios.get(API_URL + '/borrow').then((res) => setPeminjaman(res.data))
  }
  useEffect(() => {
    getBorrow()
  }, [])

  const deleteData = (id) => {
    axios.delete(`${API_URL}/borrow/${id}`).then(getBorrow())
  }
  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Tabel Data Peminjaman</strong>
        </CCardHeader>
        <CCardBody>
          <Link className="btn btn-primary" to={`/admin/addpinjam`}>
            Tambah
          </Link>
          <CTable hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">NIM</CTableHeaderCell>
                <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                <CTableHeaderCell scope="col">Judul Buku</CTableHeaderCell>
                <CTableHeaderCell scope="col">Tgl Peminjaman</CTableHeaderCell>
                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {peminjaman.map((item) => (
                <CTableRow key={item.id_pinjam}>
                  <CTableDataCell>{item.nim}</CTableDataCell>
                  <CTableDataCell>{item.nama_anggota}</CTableDataCell>
                  <CTableDataCell>{item.judul_buku}</CTableDataCell>
                  <CTableDataCell>{item.tgl_pinjam}</CTableDataCell>
                  <CTableDataCell>
                    <CBadge color="danger">{item.status_pinjam}</CBadge>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton onClick={() => deleteData(item.id_pinjam)} color="danger">
                      Delete
                    </CButton>
                    <Link to={`/admin/editpinjam/${item.id_pinjam}`}>
                      <CButton className="btn btn-success">Update</CButton>
                    </Link>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </CRow>
  )
}

export default PeminjamanList
