import { Link } from "react-router-dom"
import '../group/group.css'
import useAxios from "../../apis/useAxios"
const Group= () => {
  const {data}=useAxios("group/allGroupe","GET")
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

  <h2>Groups list</h2>
  <table id="users-table">
    <thead>
      <tr>
        <th>Group ID</th>
        <th>Groupname</th>
        <th>edit</th>
        <th>delete</th>
      </tr>
      </thead>
    <tbody>
    {data?.map((group) => (
            <tr key={group._id}>
              <td>{group._id}</td>
              <td>{group.Group_name}</td>
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

export default Group