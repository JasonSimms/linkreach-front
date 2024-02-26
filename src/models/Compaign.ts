/*
* A campaign is an individual application Group.  
* IE user has submitted a resume to 1 employer with the following links
* 
* @campaignLinks: this is an array of links generated unique to this campaign
*/

interface Campaign {
    id: number // first 5 in url
    campaignName: string
    campaignDescription?: string
    campaignImage?: string
    campaignIcon?: string
    campaignLinks?: Link[] // 
    clicked?: string[]
    reach: number
    lastClick: string
    createdAt: string
    updatedAt: string
}