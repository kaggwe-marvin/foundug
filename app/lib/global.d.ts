import type { Database as DB } from "./database.types";

declare global {
  type Database = DB;
  type Founditem = DB["public"]["Tables"]["founditems"]["Row"];
  type Lostitem = DB["public"]["Tables"]["lostitems"]["Row"];
  type imageUploadData = DB["public"]["Tables"]["images"]["Row"];
}
declare module "flutterwave-node-v3";
