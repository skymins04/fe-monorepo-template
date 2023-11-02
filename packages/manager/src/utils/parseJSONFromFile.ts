import fs from "fs";
import { readFileByString } from "@/utils";

export const parseJSONFromFile = (jsonPath: string) => {
  if (!fs.existsSync(jsonPath))
    throw new Error(`Not found json file: ${jsonPath}`);

  try {
    const jsonFileRawString = readFileByString(jsonPath);
    const parsedJSON = JSON.parse(jsonFileRawString);
    return parsedJSON;
  } catch (e) {
    throw new Error(`Invaild json file: ${jsonPath}`);
  }
};
