const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

let totalTickets = 0

const ticketCount = () => {
  totalTickets++

  contentTarget.innerHTML = `Total tickets purchased: ${totalTickets}`
}

const packageTicketCount = () => {
  totalTickets += 4

  contentTarget.innerHTML = `Total tickets purchased: ${totalTickets}`
}

export const TicketNumber = () => {
  contentTarget.innerHTML = `Total tickets purchased: ${totalTickets}`
  eventHub.addEventListener("rideTicketPurchased", ticketCount)
  eventHub.addEventListener("foodTicketPurchased", ticketCount)
  eventHub.addEventListener("sideshowTicketPurchased", ticketCount)
  eventHub.addEventListener("gameTicketPurchased", ticketCount)
  eventHub.addEventListener("packageTicketPurchased", packageTicketCount)
}
