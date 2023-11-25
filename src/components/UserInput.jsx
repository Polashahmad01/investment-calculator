
export default function UserInput({ userInput, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label
            htmlFor="initialInvestment"
          >
            Initial Investment
          </label>
          <input
            id="initialInvestment"
            type="number"
            value={userInput.initialInvestment}
            onChange={event => handleChange("initialInvestment", event.target.value)}
            required
          />
        </p>
        <p>
          <label
            htmlFor="annualInvestment"
          >
            Annual Investment
          </label>
          <input
            id="annualInvestment"
            type="number"
            value={userInput.annualInvestment}
            onChange={event => handleChange("annualInvestment", event.target.value)}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label
            htmlFor="expectedReturn"
          >
            Expected Return
          </label>
          <input
            id="expectedReturn"
            type="number"
            value={userInput.expectedReturn}
            onChange={event => handleChange("expectedReturn", event.target.value)}
            required
          />
        </p>
        <p>
          <label
            htmlFor="duration"
          >
            Duration
          </label>
          <input
            id="duration"
            type="number"
            value={userInput.duration}
            onChange={event => handleChange("duration", event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  )
}
