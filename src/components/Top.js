import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import '..//Style/Top.css'

const Top = () => {

    return (
        <div className='Top'>
            <div className='Top-container'>
                <div className='Top-container-left'>
                    <h3>Hi, I'm Shahid <span className='last-name text-success'>Khan</span></h3>
                    <p>Knack of building applications with front and back end operations.</p>
                    <div className="buttons" style={{ marginLeft: '-1rem' }}>
                        <a href='#contact'><Button variant='success'>Hire Me</Button></a>
                        <a href='resume.docx' download><Button variant='success'>Get Resume</Button></a>
                    </div>
                </div>
                <div className='Top-container-right'>
                    <img src='profile.jpg' alt='profile' />
                </div>
            </div>
        </div>
    )
}

export default Top