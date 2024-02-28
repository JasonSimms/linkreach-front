/*
 * A campaign is an individual application Group.
 *
 */

export interface Campaign {
  id: string; //Unique identifier for the campaign.
  userId: string; //Reference to the user who created the campaign.
  name: string; //The name of the campaign.
  campaignLinkIds: string[]; //To store the shortened URLs created for each campaign.
  createdAt?: string;
  updatedAt?: string;
}
