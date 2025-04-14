"use client";

import { UserDetailContext } from "@/context/user-context";
import { supabase } from "@/services/client";
import React, { useEffect } from "react";

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    createNewUser();
  }, []);

  const createNewUser = async () => {
    supabase.auth.getUser().then(async (user) => {
      let { data: Users, error } = await supabase
        .from("Users")
        .select("*")

        .eq("email", user?.data?.user?.email);

      if (error) {
        console.log("error found data: ", error.message);
      }

      if (Users?.length === 0) {
        const { error, data } = await supabase.from("Users").insert([
          {
            email: user?.data?.user?.email,
            name: user?.data?.user?.user_metadata?.name,
            picture: user?.data?.user?.user_metadata?.picture,
          },
        ]);

        if (error) {
          console.log("error create data: ", error.message);
        }

        setUser(data);

        return;
      }

      setUser(Users[0]);
    });
  };
  return (
    <UserDetailContext.Provider value={{ user, setUser }}>
      <div>{children}</div>
    </UserDetailContext.Provider>
  );
};

export default Provider;
