
const AddGroup = () => {
  return (
  <div className="form-container">
  <h2>Add new Group</h2>
  <form id="user-form">
    <label htmlFor="username">Groupname :</label>
    <input type="text" id="username" name="username" required="" />
    <br />
    <button type="submit">Ajouter</button>
  </form>
</div>

  )
}

export default AddGroup