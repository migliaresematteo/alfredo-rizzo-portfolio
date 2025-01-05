import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { IoMusicalNotesOutline, IoLaptopOutline } from "react-icons/io5";

const LessonsComponent = () => {
  const { t } = useTranslation();

  const lessonTypes = [
    {
      title: 'Private Lessons',
      description: 'One-on-one personalized instruction tailored to your goals and skill level. Experience focused guidance to develop your musical abilities.',
      icon: <IoMusicalNotesOutline />
    },
    {
      title: 'Online Lessons',
      description: 'Flexible remote learning options from the comfort of your home. Professional instruction with high-quality audio setup for optimal learning experience.',
      icon: <IoLaptopOutline />
    }
  ];

  return (
    <section className="lessons-section py-5">
      <Container>
        <h2 className="text-center mb-5">Music Lessons</h2>
        <Row className="g-4 justify-content-center">
          {lessonTypes.map((lesson, index) => (
            <Col key={index} md={6}>
              <Card className="h-100 lesson-card">
                <Card.Body className="text-center">
                  <div className="lesson-icon mb-3">
                    {lesson.icon}
                  </div>
                  <Card.Title className="mb-3">{lesson.title}</Card.Title>
                  <Card.Text>{lesson.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          <button className="btn btn-outline-primary">Schedule a Lesson</button>
        </div>
      </Container>
    </section>
  );
};

export default LessonsComponent;
