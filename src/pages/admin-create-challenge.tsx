import GreenButton from "../components/buttons/GreenButton/GreenButton"

const AdminCreateChallenge: React.FC = () => {

  return (
    <div className="AdminCreateChallenge">
      <div className="form">
        <h1 style={{ marginBottom: '10px', marginTop: '10px' }} >Challenge Details</h1>
        <div>

          <label >Challenge Name</label>
          <input type="text" />
        </div>

        <div>

          <label htmlFor="startDate">Start Date:</label>
          <input type="date" id="startDate" name="startDate" min="2024-09-01" max="2024-12-31" required />
        </div>
<div>

        <label htmlFor="endDate">End Date:</label>
        <input type="date" id="endDate" name="endDate" min="2024-09-01" max="2024-12-31" required />
</div>
<div>

        <label htmlFor="endDate">Description</label>
        <textarea id="w3review" name="Description" rows={8} cols={100} style={{ width: '40%',display:'flex',flexDirection:'column' }} />
</div>
<div>

        <label htmlFor="endDate">Image</label>
        <input type="file" id="imageUpload" name="imageUpload" accept="image/*" required />
</div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="LavelType">LavelType</label>
          <select name="LavelType" id="LavelType" style={{ width: '40%' }}>
            <option value="Easy">Easy</option>
            <option value="Mediam">Mediam</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <GreenButton text={'Create Challenge'} />
      </div>
    </div>
  )
}

export default AdminCreateChallenge
