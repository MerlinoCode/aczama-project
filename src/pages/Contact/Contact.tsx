import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.scss'
export default function Contact() {
  return (
    <section className="contact-wrap">
      <h2 className="contact-title">Contacto</h2>
      <ContactForm />
    </section>
  );
}