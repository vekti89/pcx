import styles from './contactForm.module.css'
import { useState } from 'react';
import { send } from 'emailjs-com';

export default function ContactForm(props) {
    {/* using a third-party service called EmailJS */}


    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
      });


      const onSubmit = (e) => {
        e.preventDefault();
        send(
          props.service_id, 
          props.template_id,
          
          toSend,
          props.user_id
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
        
          setToSend({
            from_name: '',
            message: '',
            reply_to: '',
          })
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };


    return (
        <div> 

            <section className={styles.contactForm}>
            
                <h5 className="px-2">Contact us</h5>


                <form onSubmit={onSubmit} className="p-2">
                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <input
                                className="form-control"
                                type='text'
                                name='from_name'
                                placeholder='Your name'
                                value={toSend.from_name}
                                onChange={handleChange}
                            required/>
                        </div>

                        <div className="mb-3 col-md-6">
                            <input
                                className="form-control"
                                type='email'
                                name='reply_to'
                                placeholder='Your email'
                                value={toSend.reply_to}
                                onChange={handleChange}
                                required/>
                        </div>
                    </div>
                   
                    <textarea
                        style={{height:"150px"}}
                        className="form-control mb-3"
                        type='text'
                        name='message'
                        placeholder='Your message for us'
                        value={toSend.message}
                        onChange={handleChange}
                        required></textarea>
                   
                    <button className="btn btn btn-warning mb-2" type="submit">Send Message</button>
                    
                </form>


            </section>

        </div>
    )
}
