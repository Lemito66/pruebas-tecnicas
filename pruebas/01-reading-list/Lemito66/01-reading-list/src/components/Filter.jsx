import Form from "react-bootstrap/Form";

export function Filter({ filterToGenre, options }) {
  return (
    <>
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => filterToGenre(e.target.value)}
      >
        {options.map(({ value, label }) => {
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </Form.Select>
    </>
  );
}
