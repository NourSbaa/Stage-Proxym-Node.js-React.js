import { Link } from "react-router-dom"
import '../group/group.css'
import useAxios from "../../apis/useAxios"
const User = () => {
  const {data}=useAxios("user/allUser","GET")
  console.log(data)
  return (
    <>
   
    <div><div className="table-container">
    <>
    <>
    <Link to="Acceuil">
  <a  className="Btn_add">
    {" "}
    <img src="../../../images/retour.png" /> Retour
  </a> </Link>
  <Link to="add">
  <a  className="Btn_add">
    {" "}
    <img src="../../../images/plus.png" /> Ajouter
  </a></Link>
</>

<h2>Users list</h2>
  <table id="users-table">
    <thead>
      <tr>
        <th>Company ID</th>
        <th>User Name</th>
        <th>User Last Name</th>
        <th>Age</th>
        <th>Company Name</th>
        <th>Groupname</th>
        <th>edit</th>
        <th>delete</th>
      </tr>
      </thead>
    <tbody>
    {data?.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.age}</td>
              <td>Edit Button</td>
              <td>Delete Button</td>
            </tr>
          ))}
    </tbody>
  </table>
</>

</div>
</div>
    </>
  )

}

export default User