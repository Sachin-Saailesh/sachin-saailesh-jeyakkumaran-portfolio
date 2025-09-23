
import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name && email && message) {
      const subject = encodeURIComponent('Portfolio Contact');
      const body = encodeURIComponent(
        `Hi Sachin,\n\n${message}\n\n— ${name} (${email})`
      );
      window.location.href = `mailto:sjeyakku@buffalo.edu?subject=${subject}&body=${body}`;

      setName(''); setEmail(''); setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Let’s Build Something Useful</h1>
          <p>Questions, collaborations, or roles: my inbox is open.</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail}
          >
            <div className='form-flex'>
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={8}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
