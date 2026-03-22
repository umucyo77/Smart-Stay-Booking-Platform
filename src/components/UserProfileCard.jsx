import { useAuth } from "../context/AuthContext";

const UserProfileCard = () => {
  const { user, login, logout } = useAuth();

  return (
    <div className="flex items-center gap-3">
      
      {user ? (
        <>
          {/* Avatar */}
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">
            {user.name[0].toUpperCase()}
          </div>

          {/* Name */}
          <span className="hidden md:block">{user.name}</span>

          {/* Logout */}
          <button
            onClick={logout}
            className="text-sm text-red-500"
          >
            Logout
          </button>
        </>
      ) : (
        <button
          onClick={() => login("Guest")}
          className="bg-black text-white px-3 py-1 rounded"
        >
          Login
        </button>
      )}

    </div>
  );
};

export default UserProfileCard;