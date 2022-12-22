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

const AddBook = () => {
  const API_URL = 'http://localhost:5000'
  const [judul, setJudul] = useState('')
  const [penerbit, setPenerbit] = useState('')
  const [tahun, setTahun] = useState('')
  const [denda, setDenda] = useState()
  const [pengarang, setPengarang] = useState('')
  const [jumlah, setJumlah] = useState()
  const [idCategory, setIdCategory] = useState('')
  const [idType, setIdType] = useState('')
  const [category, setCategory] = useState([])
  const [type, setType] = useState([])

  const data = {
    judul: judul,
    penerbit: penerbit,
    tahun: tahun,
    pengarang: pengarang,
    denda: denda,
    jumlah: jumlah,
    id_jenis: idType,
    id_kategori: idCategory,
  }

  const getCategory = () => {
    axios.get(`${API_URL}/category`).then((res) => {
      console.log(res.data)
      setCategory(res.data)
    })
  }
  const getType = () => {
    axios.get(`${API_URL}/type`).then((res) => setType(res.data))
  }

  useEffect(() => {
    getCategory()
    getType()
  }, [])

  const redirect = useNavigate()

  const postData = (e) => {
    e.preventDefault()
    axios.post(`${API_URL}/books`, data).then(redirect('/admin/book'))
    // console.log(judul + penerbit + pengarang + idCategory + idType)
  }
  return (
    <CRow>
      <CCard>
        <CCardHeader>
          <strong>Form Add Book</strong>
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3" onSubmit={postData}>
            <CCol md={6}>
              <CFormInput
                type="text"
                name="judul"
                label="Judul Buku"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                name="penerbit"
                label="Penerbit"
                value={penerbit}
                onChange={(e) => setPenerbit(e.target.value)}
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                name="tahun"
                label="Tahun Terbit"
                value={tahun}
                onChange={(e) => setTahun(e.target.value)}
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="number"
                name="denda"
                label="Denda"
                value={denda}
                onChange={(e) => setDenda(e.target.value)}
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                name="pengarang"
                label="Pengarang"
                value={pengarang}
                onChange={(e) => setPengarang(e.target.value)}
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="number"
                name="pengarang"
                label="Jumlah"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
              />
            </CCol>
            <CCol md={6}>
              <CFormSelect
                size="sm"
                className="mb-3"
                aria-label="Small select example"
                name="status"
                onChange={(e) => setIdCategory(e.target.value)}
              >
                <option>Select Category...</option>
                {category.map((item) => (
                  <option key={item.id_kategori} value={item.id_kategori}>
                    {item.nama_kategori}
                  </option>
                ))}
              </CFormSelect>
            </CCol>
            <CCol md={6}>
              <CFormSelect
                size="sm"
                className="mb-3"
                aria-label="Small select example"
                name="status"
                onChange={(e) => setIdType(e.target.value)}
              >
                <option>Select Type...</option>
                {type.map((item) => (
                  <option key={item.id_jenis} value={item.id_jenis}>
                    {item.nama_jenis}
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

export default AddBook
