import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/@ui/Card";
import { Text } from "../components/@ui/Text";
import { useAuth } from "../context/AuthContext";

function SignOut() {
   const { signout } = useAuth();
   const { data, loading, error } = signout();
   const navigate = useNavigate();

   if (loading) {
      return <h4>Loading...</h4>;
   }

   return navigate("/home");
}

export default SignOut;
