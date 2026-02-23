/* eslint-disable no-unused-vars */
import { AuthContext } from "./context/AuthContext";
import { useContext, useEffect } from "react";
import { Spin } from "antd";
import { Outlet } from "react-router-dom";
import SideBar from "./components/ui/SideBar";

function App() {
  const { setAuth, appLoading, setAppLoading } = useContext(AuthContext);

  //Check auth
  //  useEffect(() => {
  //    const fetchAccount = async () => {
  //      setAppLoading(true);
  //      const res = await axios.get(`/v1/api/account`);
  //      if (!res?.message && res) {
  //        setAuth({
  //          isAuthenticated: true,
  //          user: {
  //            email: res?.email,
  //            name: res?.name,
  //          },
  //        });
  //      }

  //      setAppLoading(false);
  //      console.log("Checking", res);
  //    };

  //    fetchAccount();
  //  }, []);

  //Temporary cancel the auth block
  useEffect(() => {
    setAppLoading(false);
  }, []);

  return (
    <div>
      {appLoading === true ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spin />
        </div>
      ) : (
        <div className="flex min-h-screen bg-background">
          <SideBar />
          <main className="flex-1 min-w-0 overflow-auto">
            <Outlet />
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
