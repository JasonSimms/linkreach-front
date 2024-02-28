/*
 * Storing all click records separate from User generated campaigns and links
 */

export interface Click {
  id: string; //Unique identifier for the click history.
  shortLinkId: string; //Reference to the shortened link that was clicked.
  ipAddress: string; //The IP address of the user who clicked the link.
  clickDate: string; //The date and time the link was clicked.
}
