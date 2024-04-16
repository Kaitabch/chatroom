import { Controller } from "@hotwired/stimulus"
import consumer from "channels/consumer"

export default class extends Controller {
  static target = [ "input" ]

  connect() {
    this.channel = consumer.subscriptions.create(
      { channel: "ChatroomChannel" }, {
        connected: this._connected.bind(this),
        received: this._received.bind(this),
        disconnected: this._disconnected.bind(this)
      }
    )
  }

  disconnect() {
    this.channel.unsubscribed()
  }

  send() {
    // this.chatboxTarget.innerHTML += `<div>${this.inputTarget.value}</div>`
    // console.log(this.inputTarget.value)
    this.channel.send({ message: this.inputTarget.value })
  }

  _connected() {
    console.log('you are connected')
  }

  _received(data) {
    console.log('received something')
    console.log(data)
    this.channel.send({ message: this.inputTarget.value})
  }

  _disconnected() {
    console.log('you disconnected')
  }
}
