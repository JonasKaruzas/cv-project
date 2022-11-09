import Card from 'react-bootstrap/Card';

export function GeneralInfoDisplay({generalInfo}) {
  return (
    <>
      <Card.Header>
        <h3>{generalInfo.name}</h3> 
      </Card.Header>
      <Card.Text className='mx-3 my-3'>{generalInfo.email}<br />{generalInfo.phoneNumber}</Card.Text>
    </>
  )
}