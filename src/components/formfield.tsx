const Formfield = () => {
  return (
    <div>
      <form>
        <label htmlFor="fname">First name</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <p className="validation">Email</p>
      </form>
    </div>
  );
};
export default Formfield;
