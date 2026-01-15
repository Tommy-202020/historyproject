const timelineEvents = [
  {num:1,date:"November 1777",title:"Articles of Confederation Adopted",description:"The Second Continental Congress adopted the Articles of Confederation as the first written constitution of the United States, creating a loose alliance of sovereign states.",significance:"Reflected fear of strong central power but proved ineffective at governing the nation."},

  {num:2,date:"March 1781",title:"Articles Ratified",description:"All thirteen states ratified the Articles after long disputes over western land claims.",significance:"Established the first national government of the United States."},

  {num:3,date:"September 1783",title:"Treaty of Paris",description:"Formally ended the Revolutionary War. Britain recognized U.S. independence.",significance:"Confirmed the United States as an independent nation.",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/f/fe/Treaty_of_Paris_by_Benjamin_West_1783.jpg"},

  {num:4,date:"1786–1787",title:"Shays' Rebellion",description:"Massachusetts farmers revolted against high taxes and debt imprisonment.",significance:"Highlighted weaknesses of the Articles of Confederation."},

  {num:5,date:"May 1787",title:"Constitutional Convention",description:"Delegates drafted an entirely new Constitution in Philadelphia.",significance:"Laid the foundation for the modern U.S. government.",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/9/9d/Scene_at_the_Signing_of_the_Constitution_of_the_United_States.jpg"},

  {num:6,date:"July 1787",title:"Northwest Ordinance",description:"Organized the Northwest Territory and banned slavery there.",significance:"Established a model for westward expansion."},

  {num:7,date:"June 1788",title:"Constitution Ratified",description:"New Hampshire became the ninth state to approve the Constitution.",significance:"Replaced the Articles with a stronger federal system."},

  {num:8,date:"April 1789",title:"Washington Inaugurated",description:"George Washington was sworn in as the first President of the United States.",significance:"Marked the beginning of the federal government under the Constitution."},

  {num:9,date:"December 1791",title:"Bill of Rights Ratified",description:"The first ten amendments guaranteed individual liberties.",significance:"Protected citizens’ rights and limited government power.",imageUrl:"https://1.bp.blogspot.com/-2a0G6vAMfek/WRro26RHTfI/AAAAAAAACB0/lePjWvPGGgMbP7xoXXFQTEqPYFBgUaYKACLcB/s1600/n_bill_rights.254135709_std.jpg"},

  {num:10,date:"1794",title:"Whiskey Rebellion",description:"Farmers protested a federal tax on whiskey in Pennsylvania.",significance:"Demonstrated the federal government’s ability to enforce laws."},

  {num:11,date:"1798",title:"Alien and Sedition Acts",description:"Laws restricted immigration and limited criticism of the government.",significance:"Raised concerns about free speech and states’ rights."},

  {num:12,date:"April 1803",title:"Louisiana Purchase",description:"The U.S. purchased Louisiana from France, doubling the nation’s size.",significance:"Expanded territory and strengthened national power.",imageUrl:"https://res.cloudinary.com/aenetworks/image/upload/c_fill%2Car_2%2Cw_3840%2Ch_1920%2Cg_auto/dpr_auto/f_auto/q_auto%3Aeco/v1/louisiana-purchase-gettyimages-3070818?_a=BAVAZGID0"},

  {num:13,date:"1804–1806",title:"Lewis and Clark Expedition",description:"Explored the Louisiana Territory to the Pacific Ocean.",significance:"Increased knowledge of western lands and Native tribes."},

  {num:14,date:"1812–1815",title:"War of 1812",description:"The U.S. fought Britain over trade restrictions and expansion.",significance:"Confirmed U.S. independence and boosted nationalism.", imageUrl:"https://www.neh.gov/sites/default/files/2019-09/battle-new-orleans.jpg"},

  {num:15,date:"December 1814",title:"Treaty of Ghent",description:"Ended the War of 1812 with borders unchanged.",significance:"Restored peace and strengthened U.S. confidence."},

  {num:16,date:"1820",title:"Missouri Compromise",description:"Missouri entered as a slave state and Maine as a free state.",significance:"Temporarily balanced slave and free states."},

  {num:17,date:"December 1823",title:"Monroe Doctrine",description:"Warned European nations against colonization in the Americas.",significance:"Asserted U.S. influence in the Western Hemisphere."},

  {num:18,date:"May 1830",title:"Indian Removal Act",description:"Authorized forced relocation of Native American tribes west of the Mississippi.",significance:"Led to the Trail of Tears.",imageUrl:"https://www.nps.gov/common/uploads/grid_builder/trte/crop16_9/2C20A6C6-0820-0622-978DD11BE2B0270D.jpg?mode=crop&quality=90&width=1300"},

  {num:19,date:"August 1831",title:"Nat Turner Rebellion",description:"Enslaved people led by Nat Turner revolted in Virginia.",significance:"Led to harsher slave laws in the South."},

  {num:20,date:"March 1836",title:"Battle of the Alamo",description:"Texas forces were defeated by the Mexican army.",significance:"Became a symbol of Texas resistance."},

  {num:21,date:"1837",title:"Panic of 1837",description:"A major economic depression caused widespread bank failures.",significance:"Exposed weaknesses in the U.S. economy.",imageUrl:"https://www.brandeis.edu/magazine/2013/spring/images/panic647x260.jpg"},

  {num:22,date:"December 1845",title:"Texas Annexed",description:"Texas was admitted to the United States as a state.",significance:"Increased tensions with Mexico."},

  {num:23,date:"1846–1848",title:"Mexican-American War",description:"War fought over territorial disputes after Texas annexation.",significance:"Expanded U.S. territory in the Southwest.", imageUrl:"https://res.cloudinary.com/aenetworks/image/upload/c_fill,w_1200,h_630,g_auto/dpr_auto/f_auto/q_auto:eco/v1/mexican-american-war-113492973?_a=BAVAZGID0"},

  {num:24,date:"February 1848",title:"Treaty of Guadalupe Hidalgo",description:"Ended the war and transferred large territories to the U.S.",significance:"Greatly expanded U.S. land holdings.",imageUrl:"https://i0.wp.com/homesteadmuseum.blog/wp-content/uploads/2019/05/img20190531_16142626.jpg?resize=730%2C1137&ssl=1"},

  {num:25,date:"July 1848",title:"Seneca Falls Convention",description:"First women’s rights convention held in the U.S.",significance:"Launched the women’s suffrage movement."},

  {num:26,date:"1850",title:"Compromise of 1850",description:"Series of laws addressing slavery in new territories.",significance:"Temporarily eased sectional tensions."},

  {num:27,date:"1852",title:"Uncle Tom’s Cabin Published",description:"Harriet Beecher Stowe published an anti-slavery novel.",significance:"Increased Northern opposition to slavery.",imageUrl:"https://m.media-amazon.com/images/I/81Nlf6QX7sL._AC_UF1000,1000_QL80_.jpg"},

  {num:28,date:"1854",title:"Kansas-Nebraska Act",description:"Allowed popular sovereignty on slavery.",significance:"Led to violent conflict known as Bleeding Kansas."},

  {num:29,date:"March 1857",title:"Dred Scott Decision",description:"Supreme Court ruled enslaved people were not citizens.",significance:"Intensified sectional conflict."},

  {num:30,date:"October 1859",title:"John Brown’s Raid",description:"Abolitionist attempted to start a slave revolt at Harpers Ferry.",significance:"Increased tensions leading to Civil War.",imageUrl:"https://www.battlefields.org/sites/default/files/styles/hero_large/public/thumbnails/image/John%20Brown%20Hero.jpg.webp?h=1a7cb72a&itok=9z2eWuzo"},

  {num:31,date:"November 1860",title:"Lincoln Elected",description:"Abraham Lincoln won the presidency without Southern support.",significance:"Triggered Southern secession."},

  {num:32,date:"1860–1861",title:"Southern States Secede",description:"Southern states left the Union to form the Confederacy.",significance:"Direct cause of the Civil War."},

  {num:33,date:"1861–1865",title:"Civil War",description:"War between the Union and Confederate states.",significance:"Preserved the Union and ended slavery.",imageUrl:"https://www.battlefields.org/sites/default/files/styles/social_media/public/thumbnails/image/Civil%20War%20-%20Battle%20of%20Atlanta.jpg.webp?h=26133ae9&itok=z2fokYdu"},

  {num:34,date:"January 1863",title:"Emancipation Proclamation",description:"Lincoln declared enslaved people free in Confederate states.",significance:"Shifted war goals toward ending slavery."},

  {num:35,date:"July 1863",title:"Battle of Gettysburg",description:"Major Union victory and turning point of the war.",significance:"Marked decline of Confederate forces."},

  {num:36,date:"April 1865",title:"Lee Surrenders",description:"General Robert E. Lee surrendered at Appomattox.",significance:"Effectively ended the Civil War.",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/b/bc/General_Robert_E._Lee_surrenders_at_Appomattox_Court_House_1865.jpg"},

  {num:37,date:"April 1865",title:"Lincoln Assassinated",description:"President Lincoln was shot by John Wilkes Booth.",significance:"Shocked the nation during Reconstruction."},

  {num:38,date:"December 1865",title:"13th Amendment",description:"Abolished slavery throughout the United States.",significance:"Legally ended slavery."},

  {num:39,date:"July 1868",title:"14th Amendment",description:"Granted citizenship and equal protection under the law.",significance:"Expanded civil rights.",imageUrl:"https://cloudfront-us-east-1.images.arcpublishing.com/gray/NESGWLBBRJHRVJDJXNQFJHQBUQ.jpg"},

  {num:40,date:"February 1870",title:"15th Amendment",description:"Prohibited denying voting rights based on race.",significance:"Expanded African American suffrage."},

  {num:41,date:"1876–1877",title:"Contested Election",description:"Disputed election between Hayes and Tilden.",significance:"Ended Reconstruction through the Compromise of 1877."}
];
