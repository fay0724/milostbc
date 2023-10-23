import "./Category.css"
import Input from "../../components/Input"

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Kategori</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Semua
        </label>
        <Input
          handleChange={handleChange}
          value="Roti Manis"
          title="Roti Manis"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Roti Asin"
          title="Roti Asin"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Roti Tawar"
          title="Roti Tawar"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Cake Slice"
          title="Cake Slice"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Cake Tart"
          title="Cake Tart"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Lainnya"
          title="Lainnya"
          name="test"
        />
      </div>
    </div>
  )
}

export default Category
