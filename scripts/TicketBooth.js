const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", (clickEvent) => {
  switch (clickEvent.target.id) {
    case "rideTicket":
      const rideEvent = new CustomEvent("rideTicketPurchased")
      eventHub.dispatchEvent(rideEvent)
      break
    case "foodTicket":
      const foodEvent = new CustomEvent("foodTicketPurchased")
      eventHub.dispatchEvent(foodEvent)
      break
    case "gameTicket":
      const gameEvent = new CustomEvent("gameTicketPurchased")
      eventHub.dispatchEvent(gameEvent)
      break
    case "sideshowTicket":
      const sideshowEvent = new CustomEvent("sideshowTicketPurchased")
      eventHub.dispatchEvent(sideshowEvent)
      break
    case "fullPackageTicket":
      const fullPackageEvent = new CustomEvent("packageTicketPurchased")
      eventHub.dispatchEvent(fullPackageEvent)
      break
  }
})

export const TicketBooth = () => {
  contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}
