import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const PerformancesComponent = () => {
  const { t } = useTranslation();

  const performances = [
    {
      date: '2025-02-15',
      title: 'Winter Concert Series',
      venue: 'Grand Concert Hall',
      description: 'An evening of classical masterpieces featuring works by Mozart and Beethoven.',
      time: '19:30'
    },
    {
      date: '2025-03-20',
      title: 'Spring Chamber Music Festival',
      venue: 'Cultural Arts Center',
      description: 'Intimate chamber music performance with guest artists.',
      time: '20:00'
    },
    {
      date: '2025-04-10',
      title: 'Student Showcase',
      venue: 'Community Music School',
      description: 'Celebrating the achievements of our talented students.',
      time: '18:00'
    }
  ];

  return (
    <section className="performances-section py-5">
      <Container>
        <h2 className="text-center mb-5">Upcoming Performances</h2>
        <Row className="g-4">
          {performances.map((performance, index) => (
            <Col key={index} lg={4} md={6}>
              <Card className="performance-card h-100">
                <Card.Body>
                  <div className="performance-date mb-3">
                    <h3 className="mb-0">{new Date(performance.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</h3>
                    <p className="text-muted mb-0">{performance.time}</p>
                  </div>
                  <Card.Title>{performance.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{performance.venue}</Card.Subtitle>
                  <Card.Text>{performance.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <button className="btn btn-outline-primary">Learn More</button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PerformancesComponent;
