import { useEffect, useState, createContext } from 'react'
import UserDetails from './UserDetails';

interface UserContextType {
  users: User[] | null;
  // login: (username: string, email: string) => void;
  // logout: () => void;
}
export const UserDashboardContext = createContext<UserContextType | null>(null);
interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const UserDashboard = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [users, setUsers]= useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    useEffect(()=>
        {
            let isMounted:boolean=true;
            try{
                setLoading(true);
                if(isMounted == true)
                {
                fetch("https://jsonplaceholder.typicode.com/users").then(x=>x.json())
                .then(data=>setUsers(data))
                .catch((error) => console.error('Error fetching data:', error));
                setLoading(false);
                }
        
            }
                catch (err: any) {
                if (isMounted) {
                setError(err.message);
                }
            } finally {
                if (isMounted) {
                setLoading(false);
                }
            }
            isMounted = false;
            // return () => {
            // isMounted = false;
            // };
        },
    []);

    const openProfile = (user: User, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setSelectedUser(user);
    setShowModal(true);
  };

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <>
        {/* <div>UserDashboard</div>
        <h1>{users? users.length : 0}</h1>
        { users? users.map((user) => (
            <div key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )) : <p>No users found.</p>} */}

        <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="card-title mb-3">User Dashboard</h2>
          <p className="text-muted mb-0">A Sample user layout</p>
        </div>
        <span className="badge bg-primary fs-6">{users.length} users</span>
      </div>

      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-3">Loading users...</p>
        </div>
      )}

      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && !error && (
        <div className="row g-4">
          {users.map((user) => (
            <div className="col-md-6 col-lg-4" key={user.id}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5 className="card-title mb-1">{user.name}</h5>
                      <p className="text-muted mb-0">@{user.username}</p>
                    </div>
                    <span className="badge bg-success">Active</span>
                  </div>

                  <hr />

                  <p className="mb-2">
                    <i className="bi bi-envelope me-2"></i>
                    {user.email}
                  </p>
                  <p className="mb-2">
                    <i className="bi bi-telephone me-2"></i>
                    {user.phone}
                  </p>
                  <p className="mb-0">
                    <i className="bi bi-globe me-2"></i>
                    {user.website}
                  </p>
                  <a href="#" className="btn btn-primary" onClick={(e) => openProfile(user, e)} >View Profile</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <UserDashboardContext.Provider value={{ users }}>
        <UserDetails
          user={selectedUser}
          show={showModal}
          onClose={() => setShowModal(false)}
        />
      </UserDashboardContext.Provider>
    </div>

        </>
    )
}

export default UserDashboard;