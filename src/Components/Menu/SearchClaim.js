const SearchClaim = () => {
    return <div class="container">
        <h2>Search Claims</h2>

        <h3 class="mini-heading">To begin enter policy number and customers Surname.</h3>
        <form>
        <label htmlFor="policy" >Policy Number: </label>
        <input type="text" name="policy" id="policy" placeholder="Policy Number" required />
    
        <label htmlFor="surname" >Surname: </label>
        <input type="text" name="surname" id="surname" placeholder="Smith" required />

        <button type="submit">Search</button>

    </form>
        <table id="customers">
            <tr>
              <th>Policy Number</th>
              <th>Surname</th>
              <th>Status</th>
              <th>  </th>
            </tr>
            <tr>
              <td>100101</td>
              <td>Gerrard</td>
              <td>Pending</td>
              <td><button type="button">Open</button></td>
            </tr>
            <tr>
              <td>100102</td>
              <td>Barnes</td>
              <td>Paid</td>
              <td><button type="button">Open</button></td>
            </tr>
            <tr>
                <td>100103</td>
                <td>Carragher</td>
                <td>Reject</td>
                <td><button type="button">Open</button></td>
              </tr>
          </table>
    </div>
}
export default SearchClaim;