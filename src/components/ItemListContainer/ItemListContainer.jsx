import { Heading, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { PropagateLoader } from "react-spinners";
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/firebase'


const ItemListContainer = ({ title }) => {
  const [ productos, setProductos ] = useState([])
  const { categoryId } = useParams()
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    setLoading(true)
      const getData = async () => {
        const coleccion = collection (db, 'productos')
        const queryRef = !categoryId ?
        coleccion : query(coleccion, where('categoria', '==' , categoryId))
        const response = await getDocs(queryRef)
        const products = response.docs.map((doc) => {
          const newItem = {
            ...doc.data(),
              id: doc.id
          }
          return newItem
        })
        setProductos(products)
        setLoading(false)
      }

      getData()
  }, [categoryId])
console.log(productos)

  return (
    <Flex mb={'10'} direction={'column'} justify={'center'} align={'center'}>
        <Heading >{title}</Heading> 
        {
          loading ?
          <Flex justify={'center'} align={'center'} h={'50vh'}>
          <PropagateLoader color="#30341c" />
          </Flex>
          :
          <ItemList productos={productos} />
        }
    </Flex>
  )
}

export default ItemListContainer