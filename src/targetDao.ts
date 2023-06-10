import { ValidNetwork } from "@daohaus/keychain-utils";

export const TARGET_DAO: {
  [key: string]: {
    ADDRESS: string;
    SAFE_ADDRESS: string;
    CHAIN_ID: ValidNetwork;
  };
} = {
  "0xb79999fc14c4fbf3961dfe1d1d4dd407e577424e": {
    ADDRESS: "0xb79999fc14c4fbf3961dfe1d1d4dd407e577424e",
    SAFE_ADDRESS: "0xeff947a7bb7508bf7796b61c15ff792e94ed6faa",
    CHAIN_ID: "0x5",
  },
};
