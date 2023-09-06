import React from "react";
import { useAuth } from "../context/AuthContext";
import { setAccount, useAccount } from "../state/AccountReducer";

function Authenticate() {
   const account = useAccount();
   const { signout } = useAuth();

   /*React.useEffect(() => {
      alert("hi");

      if (data?.error) {
         toast.error("Error: " + error);
         signout();
         return;
      }

      dispatch(setAccount(account));
      toast.success("Successfully signed in as " + data.account.username);
   }, []);

   if (loading) return <h4>Loading...</h4>;*/

   return <></>;
}

export default Authenticate;
