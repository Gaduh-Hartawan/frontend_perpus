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
} from '@coreui/react'
import axios from 'axios'

const PeminjamanList = () => {
  const API_URL = 'http://localhost:5000'
  const [peminjaman, setPeminjaman] = useState([])
  useEffect(() => {
    axios.get(API_URL + '/borrow').then((res) => setPeminjaman(res.data))
  }, [])
  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Tabel Data Peminjaman</strong>
        </CCardHeader>
        <CCardBody>
          <CTable hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">NIM</CTableHeaderCell>
                <CTableHeaderCell scope="col">Judul Buku</CTableHeaderCell>
                <CTableHeaderCell scope="col">Tgl Peminjaman</CTableHeaderCell>
                <CTableHeaderCell scope="col">Tgl Pengembalian</CTableHeaderCell>
                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {peminjaman.map((item) => (
                <CTableRow key={item.id_pinjam}>
                  <CTableDataCell>{item.nim}</CTableDataCell>
                  <CTableDataCell>{item.judul_buku}</CTableDataCell>
                  <CTableDataCell>{item.tgl_pinjam}</CTableDataCell>
                  <CTableDataCell>{item.tgl_balik}</CTableDataCell>
                  <CTableDataCell>{item.status_pinjam}</CTableDataCell>
                  <CTableDataCell>Delete | Edit</CTableDataCell>
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
