import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
import { Link } from 'react-router-dom'

const BookList = () => {
  const API_URL = 'http://localhost:5000'
  const [books, setBooks] = useState([])
  useEffect(() => {
    axios.get(API_URL + '/books').then((res) => setBooks(res.data))
  })
  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Tabel Data Buku</strong>
        </CCardHeader>
        <CCardBody>
          <Link className="btn btn-primary" to={`/base/cards`}>
            Tambah
          </Link>
          <CTable hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Judul</CTableHeaderCell>
                <CTableHeaderCell scope="col">Kategori</CTableHeaderCell>
                <CTableHeaderCell scope="col">Pengarang</CTableHeaderCell>
                <CTableHeaderCell scope="col">Jumlah</CTableHeaderCell>
                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {books.map((item) => (
                <CTableRow key={item.id_buku}>
                  <CTableHeaderCell scope="row">{item.judul_buku}</CTableHeaderCell>
                  <CTableDataCell>{item.nama_kategori}</CTableDataCell>
                  <CTableDataCell>{item.pengarang}</CTableDataCell>
                  <CTableDataCell>{item.jumlah}</CTableDataCell>
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

export default BookList
