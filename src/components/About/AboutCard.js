import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Shailja Mishra </span>
            from <span className="purple"> INDIA.</span>
            <br />
            I am currently getting trained as a software developer at Lexicon.
            <br />
            I have completed Masters in Computer Application in Computer Science at Pune University, INDIA.
            <br />
            <br />
            Apart from learning coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Danceing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Self belief is the key to success!"{" "}
          </p>
          <footer className="blockquote-footer">Shailja Mishra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
