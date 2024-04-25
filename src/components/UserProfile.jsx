import { useTheme } from "../contexts/UserContext";

function UserProfile() {
  const { isOnline, setIsOnline } = useTheme();
  console.log(isOnline);

  return (
    <>
      <button
        onClick={() => {
          isOnline ? setIsOnline(false) : setIsOnline(true);
        }}
      >
        {console.log(isOnline)}
        click to change user status
      </button>
      <div>User is {isOnline ? "en ligne" : "hors ligne"}</div>
    </>
  );
}

export default UserProfile;
