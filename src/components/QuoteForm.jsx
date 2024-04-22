import { useState } from "react";

function QuoteForm() {
  const [valueForm, setValueForm] = useState("");

  const MAX_LENGTH = 5;
  const remaining = MAX_LENGTH - valueForm.length;

  const handleSubmit = (event) => event.preventDefault();
  const handleChange = (event) => {
    if (event.target.value.length <= MAX_LENGTH) {
      setValueForm(event.target.value);
    }
  };

  return (
    <form className="QuoteForm" onSubmit={handleSubmit}>
      <label htmlFor="character">Character:</label>
      <input
        id="character"
        name="character"
        type="text"
        value={valueForm}
        onChange={handleChange}
      />
      {console.log(remaining)}
    </form>
  );
}

export default QuoteForm;
