export default function GeneralInfo({ data, onChange, isEditing, onSubmit, onEdit }) {
  const { fullName, email, phone, url } = data;

  return (
    <div className="general-info">
      <h3>General Information</h3>

      {isEditing ? (
        <form className="general-info-form" onSubmit={onSubmit}>
          <input
            name="fullName"
            value={fullName}
            onChange={onChange}
            /*the on change here is coming as a prop from APP, both onChanges are different
           NOTE: whenever we write something this onChange f() invokes the handleGenInfo function in parent (APP) where we update the state using setter function then re render the page, we do this to keep all the data in App so that we can share it with other components as well.
           So, we are lifting the "state" upwards.
          
           */
            type="text"
            placeholder="Full Name"
          />
          <input
            name="email"
            value={email}
            onChange={onChange}
            type="email"
            placeholder="Email"
          />
          <input
            name="phone"
            value={phone}
            onChange={onChange}
            type="tel"
            placeholder="Phone Number"
          />
          <input
            name="url"
            value={url}
            onChange={onChange}
            type="url"
            placeholder="GitHub URL"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Full Name:</strong> {fullName}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>GitHub:</strong> <a href={url} target="_blank" rel="noreferrer">{url}</a></p>
          <button onClick={onEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
