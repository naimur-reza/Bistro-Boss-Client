import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import useAxiosSecure from "./useAxiosSequre";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log("is admin response", res);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
