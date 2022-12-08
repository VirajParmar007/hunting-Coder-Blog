import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

const contactus = () => {

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = { name, number, email, message }
    fetch('http://localhost:3000/api/contact', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    alert("Thank you for contacting us, our team will reach you soon")
    setname("")
    setemail("")
    setnumber("")
    setmessage("")
    e.target.reset()
  }
  const handleOnChange = (e) => {
    if (e.target.name == 'name') {
      setname(e.target.value)
    } else if (e.target.name == 'email') {
      setemail(e.target.value)
    } else if (e.target.name == 'number') {
      setnumber(e.target.value)
    } else if (e.target.name == 'message') {
      setmessage(e.target.value)
    }
  }

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [number, setnumber] = useState("")
  const [message, setmessage] = useState("")
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Connect with Us</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.mb3}>
            <input type="text" className={styles.formControl} id="name" name="name" aria-describedby="emailHelp" placeholder='Fullname' value={name} onChange={handleOnChange} required />
          </div>
          <div className={styles.mb3}>
            <input type="email" className={styles.formControl} id="email" name="email" value={email} onChange={handleOnChange} aria-describedby="emailHelp" placeholder='Email' required />
          </div>
          <div className={styles.mb3}>
            <input type="number" className={styles.formControl} id="number" name="number" placeholder='Phone number' value={number} onChange={handleOnChange} required />
          </div>
          <div className={styles.mb3}>
            <textarea rows={5} type="text" className={styles.formControl} id="message" name="message" placeholder='We are listening' value={message} onChange={handleOnChange} />
          </div>
          <div className={styles.mb3}>
            <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
            <label className="form-check-label" htmlFor="exampleCheck1">I am a human</label>
          </div>
          <button type="submit" className={styles.submit}><a>Submit</a></button>
        </form>
      </main>
    </div>
  )
}

export default contactus