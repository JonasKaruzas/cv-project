import Card from 'react-bootstrap/Card';

export function WorkExperienceDisplay({children}) {
  return (
    <Card style={{margin: 10}} bg='light'>
      <Card.Header><h5>Work Experience</h5></Card.Header>
      {children}
    </Card>
  )
}
