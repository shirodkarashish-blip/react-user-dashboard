interface UserDetailsProps {
  user: any;
  show: boolean;
  onClose: () => void;
}

const UserDetails = ({ user, show, onClose }: UserDetailsProps) => {
  if (!user) return null;

  return (
    <div
      className={`modal fade ${show ? 'show d-block' : ''}`}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      style={{ backgroundColor: show ? 'rgba(0,0,0,0.5)' : 'transparent' }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{user.name}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;