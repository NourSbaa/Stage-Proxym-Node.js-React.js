
const AddUser = () => {
  return (
  <div className="form-container">
  <h2>Add new User</h2>
  <form id="user-form">
    <label htmlFor="username">User name :</label>
    <input type="text" id="username" name="username" required="" />
    <label htmlFor="username">User lastName :</label>
    <input type="text" id="userlastName" name="userlastName" required="" />
    <label>Company Name</label>
  <select>
    <option value="#">#</option>
    <option value="#">#</option>
  </select>
    <label>Group Name</label>
  <select>
    <option value="#">#</option>
    <option value="#">#</option>
  </select> <br />
   
    <button type="submit">Ajouter</button>
  </form>
</div>

  )
}

export default AddUser