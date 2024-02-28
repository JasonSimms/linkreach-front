export interface AuthUser {
  uid?: string;
  email: string;
  displayName?: string;
  photoUrl?: string;
}

//MODEL NOTES
// Users Collection: To store user information.
// Model:

// userId: Unique identifier for the user.
// username: User's name or nickname.
// email: User's email.
// password: User's hashed password.
// UserLinks Collection: To store the URLs provided by the user.
// Model:

// linkId: Unique identifier for the link.
// userId: Reference to the user who provided the link.
// originalUrl: The original URL provided by the user.
// nickname: The nickname for the URL provided by the user.
// Campaigns Collection: To store the campaigns created by the user.
// Model:

// campaignId: Unique identifier for the campaign.
// userId: Reference to the user who created the campaign.
// name: The name of the campaign.
// createdDate: The date when the campaign was created.
// ShortenedLinks Collection: To store the shortened URLs created for each campaign.
// Model:

// shortLinkId: Unique identifier for the shortened link.
// campaignId: Reference to the campaign the link is associated with.
// linkId: Reference to the original user-provided link.
// shortUrl: The shortened URL.
// Clicks Collection: To store information about each click on a shortened URL.
// Model:

// clickId: Unique identifier for the click.
// shortLinkId: Reference to the shortened link that was clicked.
// ipAddress: The IP address of the user who clicked the link.
// clickDate: The date and time when the link was clicked.
