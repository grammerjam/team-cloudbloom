import "./Form.css"

export default function Form(name, card_number, exp_date, cvc) {

    return(
        <>
            <div className="form-container">
                <div className="form">
                    <form action="">
                        <div className="form-input">
                            <label for="name">CARDHOLDER NAME</label>
                            <input type="text" name="name" id="name" placeholder="e.g. Jane Appleseed" required />
                        </div>
                        <div className="form-input">
                            <label for="number">CARDHOLDER NUMBER</label>
                            <input type="text" name="number" id="number" placeholder="e.g. 1234 4678 9123 0000" required />
                        </div>
                        <div className="date-cvc">
                            <div className="exp-date form-input">
                                <label for="exp-date">EXP. DATE (MM/YY)</label>
                                <div className="date">
                                    <input type="number" name="exp-date-month" id="exp-date-month" placeholder="MM" required />
                                    <input type="number" name="exp-date-year" id="exp-date-year" placeholder="YY" required />
                                </div>
                            </div>
                            <div className="form-input cvc">
                                <label for="cvc">CVC</label>
                                <input type="number" name="cvc" id="cvc" placeholder="e.g. 123" required />
                            </div>
                        </div>
                        <button> Confirm </button>
                        
                    </form>
                </div>
            </div>
        </>
    )
}