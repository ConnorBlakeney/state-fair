// Import and invoke the ticket booth component function
import {TicketBooth} from "./TicketBooth.js"
import {RideTicketHolders} from "./rides/RideTicketHolders.js"
import {FoodTicketHolders} from "./food/FoodTicketHolders.js"
import {GameTicketHolders} from "./games/GameTicketHolders.js"
import {SideShowTicketHolders} from "./sideshows/SideShowHolders.js"
import {FullPackageTicketHolder} from "./packages/FullPackageTicket.js"

TicketBooth()
RideTicketHolders()
FoodTicketHolders()
GameTicketHolders()
SideShowTicketHolders()
FullPackageTicketHolder()
