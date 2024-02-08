
const AddGroup = () => {
  return (
  <div className="form-container">
  <h2>Add new Company</h2>
  <form id="user-form">
    <label htmlFor="companyname">Companyname :</label>
    <input type="text" id="companyname" name="companyname" required="" />
    <>
  <label>Group Name</label>
  <select>
    <option value="#">#</option>
    <option value="#">#</option>
  </select>
</>

    <br />
    <button type="submit">Ajouter</button>
  </form>
</div>

  )
}

export default AddGroup