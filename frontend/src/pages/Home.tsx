import { Col, Row } from 'react-bootstrap'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductItem from '../components/ProductItem'
import { Helmet } from 'react-helmet-async'
import { useGetProductsQuery } from '../hooks/productHooks'
import { getError } from '../utils'
import { ApiError } from '../types/ApiError'

export default function Home() {
  const { data: products, isLoading, error } = useGetProductsQuery()

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">
      {getError(error as unknown as ApiError)}
    </MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>Guldan</title>
      </Helmet>
      {products!.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  )
}
