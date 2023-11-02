import { useEffect, useState } from "react"
import "../App.css"
import "../styles/form.css"

export default function Form() {
    const [textFields, setTextFields] = useState({
        name: '',
        lastName: ''
    });

    useEffect(()=> {
        if (/\d/.test(textFields.name)) {
            document.getElementById('name-field').style.borderColor = 'red'
        }
    
        if (/\d/.test(textFields.lastName)) {
            document.getElementById('last-name-field').style.borderColor = 'red'
        }
        if(!/\d/.test(textFields.name)) {
            document.getElementById('name-field').style.borderColor = 'inherit'
        }
        if(!/\d/.test(textFields.lastName)) {
            document.getElementById('last-name-field').style.borderColor = 'inherit'
        }
    }, [textFields])


    return (
       <section id='form-section-wraper'>
           <div id='form-div'>
            <h3>Get In Touch</h3>
            <p className='large-body'>New albums every single month,
                check out the newest & best from Snyder Recording artist,
                now available on Apple Music & Spotify.</p>
                <form id='form'>
                    <div>
                        <label className='field-label'>First Name</label>
                        <input id='name-field' onChange={(e) => setTextFields({ ...textFields, name: e.target.value })} className='field-label field' required minLength={2} maxLength={50} type='text' placeholder='First Name'/>
                    </div>
                    <div>
                        <label className='field-label'>Last Name</label>
                        <input id='last-name-field' onChange={(e) => setTextFields({ ...textFields, lastName: e.target.value })} className='field-label field' required type='text' minLength={2} maxLength={50} placeholder='Last Name'/>
                    </div>
                    <div>
                        <label className='field-label'>Email Address</label>
                        <input className='field-label field' required type='email' maxLength={50} placeholder='Email Address'/>
                    </div>
                    <div>
                    <label className='field-label'>Reason for Contacting</label>
                    <select id='select-field' required className='field-label field'>
                        <option value='' disabled selected>Select One</option>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </select>
                    </div>
                    <div id='textarea'>
                        <label className='field-label'>Message (Optional)</label>
                        <textarea cols={10} rows={14} style={{width: '99%'}} className='field-label field' placeholder='Write a brief message'/>
                    </div>
                    <button type="submit" className='button button-text' style={{marginTop: '12px'}}>Learn More</button>
                </form>
            </div>
            <div id='img-form'>

            </div>
       </section>
    )
}