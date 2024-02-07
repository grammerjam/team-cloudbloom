import "./Form.css"
import { useState, useEffect } from "react"

export default function Form() {

    const [formData, setFormData] = useState({
        name: '',
        cardNumber: '',
        expDateMonth: '',
        expDateYear: '',
        cvc: ''
    })

    const [confirmed, setConfirmed] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setConfirmed(true)
    }

    useEffect(() => {

        console.log(confirmed)

        if (confirmed) {
            alert("you gave me your card info >:)")
        }
    }, [confirmed])

    const handleInputChange = (e) => {
        const { name,  value } = e.target
        setFormData({
            ...formData, 
            [name] : value
        })
    }

    return(
        <>
            <div className="form-container">
            <div>
                <p>{formData.name}</p>
                <p>{formData.cardNumber}</p>
                <p>{formData.expDateMonth}/{formData.expDateYear}</p>
                <p>{formData.cvc}</p>
            </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-input">
                            <label for="name">CARDHOLDER NAME</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} placeholder="e.g. Jane Appleseed" required />
                        </div>
                        <div className="form-input">
                            <label for="number">CARDHOLDER NUMBER</label>
                            <input type="text" name="cardNumber" id="number" value={formData.cardNumber} onChange={handleInputChange} maxLength={12} placeholder="e.g. 1234 4678 9123 0000" required />
                        </div>
                        <div className="date-cvc">
                            <div className="exp-date form-input">
                                <label for="exp-date">EXP. DATE (MM/YY)</label>
                                <div className="date">
                                    <input type="text" name="expDateMonth" id="exp-date-month" value={formData.expDateMonth} onChange={handleInputChange} placeholder="MM" maxLength={2} required />
                                    <input type="text" name="expDateYear" id="exp-date-year" value={formData.expDateYear} onChange={handleInputChange} placeholder="YY" maxLength={2} required />
                                </div>
                            </div>
                            <div className="form-input cvc">
                                <label for="cvc">CVC</label>
                                <input type="text" name="cvc" id="cvc" value={formData.cvc} onChange={handleInputChange} placeholder="e.g. 123" maxLength={3} required />
                            </div>
                        </div>
                        <button type="submit" > Confirm </button>
                    </form>
                </div>
            </div>
        </>
    )
}