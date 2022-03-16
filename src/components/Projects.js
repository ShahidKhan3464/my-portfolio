import React from 'react'
import Card from 'react-bootstrap/Card'
import Underline from './Underline'
import { projects } from './utils'
import '..//Style/Projects.css'

const Projects = () => {

    return (
        <div className="Projects" id='projects'>
            <h1>Projects</h1>
            <Underline />
            <div className="Projects-container">
                {projects.map(project => (
                    <Card key={project.id}>
                        <Card.Img src={project.image} alt={project.title} />
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                            <h5>Stack</h5>
                            <div className="card-tags">
                                {project.tags.map(tag => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Projects