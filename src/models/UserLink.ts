/*
 * This is the model for UserLink object.
 * It stores the shortened URL which is provided to end user
 * It is accessed by
 */

export interface UserLink {
  id: string;
  url: string;
  nickname?: string;
  creator?: string;
  notes?: string;
  linkIcon?: string;
  createdAt?: string;
  updatedAt?: string;
}
