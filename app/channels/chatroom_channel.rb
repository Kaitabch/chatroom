class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chatroom"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    p 'COCONUT'
    p data
  end

    # ActionCable.server.broadcast("chatrroom", data)
end

# doesn't fit controllers or views
# channels connect servers to browsers
# new concept