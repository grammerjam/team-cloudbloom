import "./Form.css"

export default function Form(name, card_number, exp_date, cvc) {

    return(
        <>
            <div className="form-container">
                <div className="form">
                    <form action="">
                        <div className="form-input">
                            <label for="name">CARDHOLDER NAME</label>
                            <input type="text" name="name" id="" placeholder="e.g. Jane Appleseed" required />
                        </div>
                        <div className="form-input">
                            <label for="number">CARDHOLDER NUMBER</label>
                            <input type="text" name="number" id="" placeholder="e.g. 1234 4678 9123 0000" required />
                        </div>
                        <div className="form-input">
                            <label for="exp-date">EXP. DATE (MM/YY)</label>
                            <input type="text" name="exp-date-month" id="exp-date-month" placeholder="MM" required />
                            <input type="text" name="exp-date-year" id="exp-date-year" placeholder="YY" required />
                        </div>
                        <div className="form-input">
                            <label for="cvc">CVC</label>
                            <input type="text" name="" id="" placeholder="e.g. 123" required />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}