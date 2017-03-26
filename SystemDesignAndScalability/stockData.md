# Problem
>Imagine you are building some sort of service that will be called by up to 1000 client applications to get simple end-of-day stock price information (open, close, high, low). You may assume that you already have the data and you can store it in any format you wish. How would you design the client-facing service that provides the information to client applications? You are responsible for the development, rollout, and ongoing monitoring and maintenance of the feed, Describe the different methods youconsider and why you would recommend your approach, Your service can use ay technologies you wish, and can distribute the information to the client applications in any mechanism you choose.

# Assumptions & Considerations
* Data I have: stock name; price: open, close, highest, lowest. (on a perday basis);
* Is one thousand users a hard cap? Do we want to think about what happens when someone tries to connect when there are 1000 concurrent connections already?
* We are not considering how it is we have all the data already/process in which we update or store it.
* Different stocks may have varying popularity amoung users.
* This is time senstive information. Fault tolerance is important here.
* Are we locked into one just a particular day? Or can clients request stock prices from yesturday?
* Are clients interested in these stats over a series of days? Or just at the end of the current day?

# Immediate Thoughts
* Data Storage - key-value store like Redis would be good to deal with popular stocks 
* 1000 is not a lot? 

# Solution & Diagram


# Things I missed
A SQL database that users could plug into would be be good if there is an interest in complicated queries
Ex. Largest stock price for Apple in the last 5 days
