import "./Form.css"
import { useState } from "react"

export default function Form(name, card_number, exp_date, cvc) {

    const [formData, setFormData] = useState("")

    const handleInputChange = (e) => {
        setFormData(e.target.value)
    }

    return(
        <>
            <div className="form-container">
                <div className="form">
                    <form action="">
                        <div className="form-input">
                            <label for="name">CARDHOLDER NAME</label>
                            <input type="text" name="name" id="name" value={formData} onChange={handleInputChange} placeholder="e.g. Jane Appleseed" required />
                        </div>
                        <div className="form-input">
                            <label for="number">CARDHOLDER NUMBER</label>
                            <input type="text" name="number" id="number" maxLength={12} placeholder="e.g. 1234 4678 9123 0000" required />
                        </div>
                        <div className="date-cvc">
                            <div className="exp-date form-input">
                                <label for="exp-date">EXP. DATE (MM/YY)</label>
                                <div className="date">
                                    <input type="text" name="exp-date-month" id="exp-date-month" placeholder="MM" maxLength={2} required />
                                    <input type="text" name="exp-date-year" id="exp-date-year" placeholder="YY" maxLength={2} required />
                                </div>
                            </div>
                            <div className="form-input cvc">
                                <label for="cvc">CVC</label>
                                <input type="text" name="cvc" id="cvc" placeholder="e.g. 123" maxLength={3} required />
                            </div>
                        </div>
                        <button> Confirm </button>
                    </form>
                </div>
            </div>
        </>
    )
}