import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Disaster Relief and Emergency Support App"
              description="Emergency support app to provide shelter to victims and people can also volunteer for help."
              ghLink ="https://github.com/Rishavkapil/disaster-relief-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Deployment On EKS"
              description="Deployed Static NGINX application on AWS EKS cluster using the deployment files and exposed it using a service and route traffic with Ingress."
              ghLink="https://github.com/Rishavkapil/Deployment-on-eks"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Deployment on minikube"
              description="Deployed a simple web application on minikube , a local kubernetes environment and also integrated Jenkins CI/CD pipeline to automate the workflow."
              ghLink="https://github.com/Rishavkapil/Deployment-on-minikube"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="MongoDB Statefulset Deployment"
              description="Deployed a mongodb Statefulset on AWS EKS cluster and also create PV, PVC and storage class for it."
              ghLink="https://github.com/Rishavkapil/mongodb-statefulset"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Ec2 instance deployment using Terraform"
              description="Created an EC2 instance with attached security group and key pair to ssh into that instance. All this is done using Terraform."
              ghLink="https://github.com/Rishavkapil/terraform-ec2"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
