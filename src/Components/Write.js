import './Write.css'

export const Write = () => {
    return(
        <div className='write'>
            <form className='write-form'>
                <div className='write-form-group'>
                    <label htmlFor='file-input'>
                        <i class="fas fa-plus"></i>
                    </label>
                    <input type='file' id='file-input'/>
                    <input type='text' placeholder='Title'/>
                </div>
            </form>
        </div>
    )
}