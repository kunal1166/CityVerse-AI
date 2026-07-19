import { bengaluru } from "./bengaluru";
import { kolkata } from "./kolkata";
import { singapore } from "./singapore";
import { taipei } from "./taipei";

export const cities = { taipei, singapore, kolkata, bengaluru } as const;
export type CityKey = keyof typeof cities;
export { bengaluru, kolkata, singapore, taipei };
