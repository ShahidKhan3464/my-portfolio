import emailjs from '@emailjs/browser'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Underline from './Underline'
import '..//Style/Contact.css'

const Contact = () => {

    const sendEmail = async (e) => {
        e.preventDefault()
        try {
            await emailjs.sendForm(
                "service_dw809lf",
                "template_lzco4ci",
                e.target,
                "nuzrEflGJfW88NXlb"
            )
            alert('Your message has been sent!')
            document.getElementById("form").reset()
        }
        catch (err) {
            alert('An error occured. Please try again later.')
        }
    }

    return (
        <div className="contact" id="contact">
            <h1>Contact Me</h1>
            <Underline />
            <div className="contact-container">
                <img src="contact.webp" alt="contact me" />
                <Form id='form' className='was-validated' onSubmit={sendEmail}>
                    <h2>Send a Message</h2>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' required />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' required />
                    </Form.Group>

                    <Form.Group controlId="formBasicTextarea">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" name='message' rows={3} minLength='5' required />
                    </Form.Group>

                    <Button variant="success" type="submit">Send</Button>
                </Form>
            </div>
        </div>
    )
}

export default Contact