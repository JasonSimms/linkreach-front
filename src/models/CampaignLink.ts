/*
 *  This file is the model for the CampaignLink object.
 *  It stores the shortened URL which is provided to end user
 */

export interface CampaignLink {
  id: string; //Unique identifier for the shortened link.
  campaignId: string; // Reference to the campaign the link is associated with.
  linkId: string; // Reference to the original user-provided link.
  shortUrl: string; // The shortened URL.
  createdAt?: string;
  updatedAt?: string;
}
