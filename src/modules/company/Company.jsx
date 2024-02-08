import { Link } from "react-router-dom"
import '../group/group.css'
import useAxios from "../../apis/useAxios"
const Company = () => {
  const {data}=useAxios("company/allCompany","GET")
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

  <h2>Companies list</h2>
  <table id="users-table">
    <thead>
      <tr>
        <th>Company ID</th>
        <th>Companyname</th>
        <th>Groupname</th>
        <th>edit</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
    {data?.map((company) => (
            <tr key={company._id}>
              <td>{company._id}</td>
              <td>{company.Company_name}</td>
              <td>{company.Groupid}</td>
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

export default Company