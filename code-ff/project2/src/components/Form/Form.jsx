import "./Form.css"

export default function Form(name, card_number, exp_date, cvc) {

    return(
        <>
            <div className="form-container">
                <div className="form">
                    <form action="">
                        <div className="name">
                            <label for="name">CARDHOLDER NAME</label>
                            <input type="text" required />
                        </div>
                        <div className="number">
                            <label for="number">CARDHOLDER NUMBER</label>
                            <input type="text" required />
                        </div>
                        <div className="exp-date">
                            <label for="exp-date">EXP. DATE (MM/YY)</label>
                            <input type="text" required />
                        </div>
                        <div className="cvc">
                            <label for="cvc">CVC</label>
                            <input type="text" required />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}