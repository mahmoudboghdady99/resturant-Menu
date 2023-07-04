import { Button , Col, Row } from 'react-bootstrap'
import Roll from 'react-reveal/Roll'

function Category({filterByCategory, allCategories}) {

  const onFilter = (category) => {
    filterByCategory(category)
  }
  
  return (
    <Row className='mb-5'>
      <Col sm='12' className='d-flex justify-content-center'>
        <Roll> 
        {
          allCategories.length >=1 ? (
            allCategories.map((cat, index) => {
              return(
              <div key={index}>
                <Button style={{margin: '0 10px', color: '#222'}}  onClick={()=> onFilter(cat)} variant='outline-primary'>{cat}</Button>
              </div>
              )
            })
          ) : null
        }
     </Roll>
      </Col>
    </Row>
  )
}

export default Category