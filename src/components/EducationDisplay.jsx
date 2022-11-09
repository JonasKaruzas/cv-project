import Card from 'react-bootstrap/Card';

export function EducationDisplay({children}) {
  return (
    <Card style={{margin: 10}} bg='light'>
      <Card.Header><h5>Education</h5></Card.Header>
      {children}
    </Card>
  )
}
