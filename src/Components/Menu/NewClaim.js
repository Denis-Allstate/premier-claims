const NewClaim = () => {
return <div className="container">
    <h2>Submit a claim</h2>
    <form>
    <label htmlFor="policy" >Policy Number: </label>
    <input type="text" name="policy" id="policy" placeholder="Policy Number" required />

    <label htmlFor="title">Title: </label>
        <select name="title" id="title" required>
            <option value="" >Please Select</option>
            <option value="mr">Mr</option>
            <option value="ms">Ms</option>
            <option value="miss">Miss</option>
            <option value="dr">Dr</option>
        </select>
 
    <label htmlFor="firstName" >First name: </label>
    <input type="text" name="firstName" id="firstName" placeholder="John" required />
                
               
    <label htmlFor="surname" >Surname: </label>
    <input type="text" name="surname" id="surname" placeholder="Smih" required />

    <label htmlFor="email">Email Address: </label>
    <input type="email" id="email" name="email" placeholder="exampe@example.com" />   

    <label htmlFor="phone">Phone Number: </label>
    <input type="tel" id="phone" name="phone" placeholder="0800-123-456" />

    <div className="claimtype">
        <p>Select claim type:</p>
            <label className="radiooptions">
                <input type="radio" name="optradio" defaultChecked/>Auto
            </label>
            <label className="radiooptions">
                <input type="radio" name="optradio" />Motorcycle
            </label>
            <label className="radiooptions">
                <input type="radio" name="optradio" />Property   
            </label>
    </div>
    <p><label htmlFor="description">Enter details of claim:</label></p>
  <textarea id="description" name="description" rows="4" cols="50" placeholder="Please enter all relevant claim details and attach any relevant documentation.">
  </textarea>
  <br />
    <button type="submit">Submit</button><br />
    </form>
    </div>
    }
export default NewClaim;