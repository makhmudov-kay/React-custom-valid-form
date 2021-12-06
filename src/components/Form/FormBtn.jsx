import React from 'react'

const FormBtn = ({checkTerms, nameValid, emailValid, phoneValid, selectedLang}) => {
    const [isDisabled, setIsDisabled] = React.useState(true)

    React.useEffect(() => {
        if (checkTerms && nameValid && emailValid && phoneValid && selectedLang) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }, [checkTerms, nameValid, emailValid, phoneValid, selectedLang])

    return (
        <button disabled={isDisabled} className="btn" type="submit">Зарегистрироваться</button>
    )
}

export default FormBtn;