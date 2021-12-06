import React from 'react'
import { useInput } from '../../hooks/useInput'

const Inputs = ({inputsValid}) => {
    const name = useInput("", {isName: true})    
    const email = useInput("", {isEmail: true})
    const phone = useInput("", {isNumber: true})

    React.useEffect(() => {
        if (!name.isNameError && !email.isEmailError && !phone.isNumberError) {
            inputsValid(true)
        } else {
            inputsValid(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name.isNameError, email.isEmailError, phone.isNumberError])

    return (
        <>
            <div className="input">
                <label className="input__label" htmlFor="name">Имя</label>
                <input onChange={(e) => name.onChange(e)} tabIndex="2" onBlur={(e) => name.onBlur(e)} value={name.value} className="input__field" type="text" id="name" placeholder="Введите Ваше имя" required />
                {(name.isDirty && name.isNameError) && <div className="errorValidate">Введенно некоректное значение</div>}
            </div>
            <div className="input">
                <label className="input__label" htmlFor="mail">Email</label>
                <input onChange={(e) => email.onChange(e)} tabIndex="3"  onBlur={(e) => email.onBlur(e)} value={email.value} className="input__field" type="email" id="mail" placeholder="Введите ваш email" required />
                {(email.isDirty && email.isEmailError) && <div className="errorValidate">Введенно некоректное значение</div>}
            </div>
            <div className="input">
                <label className="input__label" htmlFor="phone">Номер телефона</label>
                <input onChange={(e) => phone.onChange(e)} tabIndex="4"  onBlur={(e) => phone.onBlur(e)} value={phone.value} className="input__field" type="text" id="phone" placeholder="Введите номер телефона" required />
                {(phone.isDirty && phone.isNumberError) && <div className="errorValidate">Введенно некоректное значение</div>}
            </div>
        </>
    )
}

export default Inputs;