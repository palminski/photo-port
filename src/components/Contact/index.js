import React, {useState} from 'react';


function ContactForm() {
    //sets up formState with these default values assigned
    const [formState, setFormState] = useState({name:'',email:'',message:''});
    //deconstructs values into variables
    const {name,email,message}=formState;

    //On change Handle change synchs the internal state of form state with the user input to DOM
    function handleChange(e){
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    // console.log(formState);

    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type='text' name="name" defaultValue={name} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type='email' name="email" defaultValue={email} onChange={handleChange}/>      
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" defaultValue={message} onChange={handleChange}/>    
            </div>
            <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;