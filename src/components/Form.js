import "../App.css"
import "../form.css"

export default function Form() {

    return (
       <section id='form-div'>
           <h3>Get In Touch</h3>
           <p className='large-body'>New albums every single month,
            check out the newest & best from Snyder Recording artist,
            now available on Apple Music & Spotify.</p>
            <form id='form'>
                <div>
                    <label className='field-label'>First Name</label>
                    <input className='field-label field' type='text' placeholder='First Name'/>
                </div>
                <div>
                    <label className='field-label'>Last Name</label>
                    <input className='field-label field' type='text' placeholder='Last Name'/>
                </div>
                <div>
                    <label className='field-label'>Email Address</label>
                    <input className='field-label field' type='email' placeholder='Email Address'/>
                </div>
                <div>
                    <label className='field-label'>Reason for Contacting</label>
                    <input className='field-label field' type='text' placeholder='Select One'/>
                </div>
                <div>
                    <label className='field-label'>Message (Optional)</label>
                    <textarea cols={10} rows={14} className='field-label field' type='text' placeholder='Write a brief message'/>
                </div>
            </form>
       </section>
    )
}