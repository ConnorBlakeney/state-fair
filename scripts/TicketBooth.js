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
  }
})

export const TicketBooth = () => {
  contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
        </div>
    `
}
