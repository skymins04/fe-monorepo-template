import fs from 'fs';

export const writeJSONFileSync = (jsonPath: string, jsonContents: any) => {
  const jsonContentsRawString =
    typeof jsonContents === 'string'
      ? jsonContents
      : JSON.stringify(jsonContents, undefined, 2);
  fs.writeFileSync(jsonPath, jsonContentsRawString);
};
