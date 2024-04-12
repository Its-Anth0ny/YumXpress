import { useContext } from "react";
import { LocationContext } from "../LocationContext";

export const useLocation = () => useContext(LocationContext);
