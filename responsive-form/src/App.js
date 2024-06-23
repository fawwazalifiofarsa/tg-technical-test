import { useSelector } from "react-redux";
import { selectUser } from "./middleware/UserSlice";
import Form from "./components/Form";
import Profile from "./components/Profile";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="sm:bg-gray-100">
      <div className="flex w-full justify-center items-center sm:h-screen">
        <div className="w-full flex items-center justify-center px-12">
          {user == null ? <Form /> : <Profile />}
        </div>
      </div>
    </div>
  );
}

export default App;
