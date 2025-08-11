import React from 'react';
import { useRef, useEffect } from 'react';

function Contact() {

    const scrollref = useRef(null);
      useEffect(() => {
        if (scrollref.current) {
          scrollref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, []);

  return (
    <main  ref={scrollref} style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }} className="contact-page">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Reach out with any questions or feedback.</p>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Name:
          <input type="text" name="name" placeholder="Your full name" required style={{ width: '100%', padding: '0.5rem' }} />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="you@example.com" required style={{ width: '100%', padding: '0.5rem' }} />
        </label>
        <label>
          Message:
          <textarea name="message" rows="5" placeholder="Write your message here" required style={{ width: '100%', padding: '0.5rem' }} />
        </label>
        <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#2E8B57', color: 'white', border: 'none', borderRadius: '4px' }}>
          Send Message
        </button>
      </form>
    </main>
  );
}

export default Contact;
